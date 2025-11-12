export async function fetchCSV(url: string) {
  const res = await fetch(url, { cache: "no-store" });
  const text = await res.text();

  // robust CSV parser – handles quoted fields, commas, and newlines correctly
  const rows: string[][] = [];
  let cur = "", inQuotes = false, row: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const next = text[i + 1];

    if (ch === '"') {
      if (inQuotes && next === '"') { 
        cur += '"'; // escaped quote
        i++;
      } else {
        inQuotes = !inQuotes; // toggle quote state
      }
    } else if (ch === ',' && !inQuotes) {
      row.push(cur);
      cur = "";
    } else if ((ch === '\n' || ch === '\r') && !inQuotes) {
      if (ch === '\r' && next === '\n') i++;
      row.push(cur);
      rows.push(row);
      cur = "";
      row = [];
    } else {
      cur += ch;
    }
  }

  // push last row
  if (cur.length || row.length) {
    row.push(cur);
    rows.push(row);
  }

  const headers = (rows.shift() || []).map(h =>
    h.trim().toLowerCase().replace(/\s+/g, "_")
  );

  return rows.map(r => {
    const obj: Record<string, string> = {};
    headers.forEach((h, i) => (obj[h] = (r[i] ?? "").trim()));
    return obj;
  });
}

import { useState, useEffect } from 'react';
import { MeetingData } from '@/types/meeting';
import { toast } from '@/hooks/use-toast';

const CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQH8yBzOcva1dvjjCrvks0gv32KQS7p5QFWJJN2FlhKk5D-89zxuJgI4RTRCEuAX9wM7B8zh49cZd6A/pub?gid=0&output=csv';
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

function parseCSV(csvText: string): MeetingData | null {
  const lines = csvText.trim().split('\n');
  if (lines.length < 2) return null;

  // Parse headers (first row)
  const headers = lines[0].split(',').map(h => h.trim());
  
  // Parse first data row
  const values = lines[1].split(',').map(v => v.trim());
  
  // Create object mapping headers to values
  const data: Record<string, string> = {};
  headers.forEach((header, index) => {
    data[header] = values[index] || '';
  });

  return {
    title: data['title'] || '',
    description: data['description'] || '',
    speaker1Name: data['speaker1_name'] || '',
    speaker1Title: data['speaker1_title'] || '',
    speaker1Bio: data['speaker1_bio'] || '',
    speaker2Name: data['speaker2_name'] || '',
    speaker2Title: data['speaker2_title'] || '',
    speaker2Bio: data['speaker2_bio'] || '',
    dateTimeUS: data['datetime_us'] || '',
    dateTimeVN: data['datetime_vn'] || '',
    timezone: data['timezone'] || '',
    meetingLink: data['meeting_link'] || '',
    bioLink: data['bio_link'] || '',
    agendaLink: data['agenda_link'] || '',
    presentationLink: data['presentation_link'] || '',
    pastSessionsLink: data['past_sessions_link'] || '',
  };
}

export function useMeetingData() {
  const [data, setData] = useState<MeetingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(CSV_URL);
      if (!response.ok) throw new Error('Failed to fetch meeting data');
      
      const csvText = await response.text();
      const parsed = parseCSV(csvText);
      
      if (!parsed) throw new Error('Failed to parse CSV data');
      
      setData(parsed);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(message);
      toast({
        title: "Error loading meeting data",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchData, REFRESH_INTERVAL);
    
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
}

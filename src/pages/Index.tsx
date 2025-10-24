import { useState, useEffect, useMemo } from "react";
import { Calendar, Globe } from "lucide-react";
import { fetchCSV } from "@/lib/csv";
import { Header, SpeakerCard, DetailsSection, JoinSection } from "@/components/ui/custom";
import { Button } from "@/components/ui/button";

const DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQH8yBzOcva1dvjjCrvks0gv32KQS7p5QFWJJN2FlhKk5D-89zxuJgI4RTRCEuAX9wM7B8zh49cZd6A/pub?gid=0&output=csv";

export default function Index() {
  const [rows, setRows] = useState<Record<string, string>[]>([]);

  useEffect(() => {
    fetchCSV(DATA_URL).then(setRows).catch(console.error);
  }, []);

  const data = useMemo(() => {
    const m: Record<string, string> = {};
    for (const r of rows) {
      const k = String((r as any).field ?? "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_");
      const v = String((r as any).value ?? "");
      if (k) m[k] = v;
    }
    return m;
  }, [rows]);

  const get = (k: string) => data[k] || "";
  const getAny = (...keys: string[]) => keys.map(get).find(Boolean) || "";

  const header = getAny("header");
  const subheader = getAny("subheader");
  const description = getAny("description");
  const dateUS = getAny("dateus", "date_us");
  const dateVN = getAny("datevn", "date_vn");
  const bioURL = getAny("bio_url", "bio_link", "biolink");
  const agendaURL = getAny("agenda_url", "agenda_link", "agendalink");
  const pptURL = getAny("ppt_url", "ppt_link", "pptlink");
  const meetURL = getAny("meet_link", "meeting_link", "meetinglink");
  const mainSpeaker = getAny("mainspeaker", "main_speaker");
  const mainSpeakerBio = getAny("mainspeakerbio", "main_speaker_bio");
  const facilitator = getAny("facilitator");
  const facilitatorBio = getAny("facilitatorbio");

  return (
    <>
      <Header header={header} />

      <section className="bg-[#FFC629]/95 py-2">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-black">
            {subheader || "Collaborative Meeting Series"}
          </h2>
        </div>
      </section>

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/Clock.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative z-10">
          <main className="container mx-auto px-4 py-12 max-w-6xl animate-fade-in">
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <SpeakerCard
                  name={mainSpeaker}
                  roleLabel="Main Speaker"
                  bio={mainSpeakerBio}
                />
                <SpeakerCard
                  name={facilitator}
                  roleLabel="Management Information Systems – Facilitator"
                  bio={facilitatorBio}
                />
              </div>
              <p className="text-center text-sm italic text-white">
                To share their thoughts on the opportunity for collaboration.
              </p>
            </section>

            <DetailsSection
              description={description}
              bioURL={bioURL}
              agendaURL={agendaURL}
              pptURL={pptURL}
            />

            <section className="mb-12 text-center">
              <div className="inline-flex flex-col gap-2 items-center">
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="h-5 w-5 text-white" />
                  <p className="italic text-lg">{dateUS || "Loading..."}</p>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Globe className="h-5 w-5 text-white" />
                  <p className="italic text-lg">{dateVN || "Loading..."}</p>
                </div>
              </div>
            </section>

            <JoinSection meetURL={meetURL} />
          </main>

          <footer className="bg-[#FFC629]/95 py-4 mt-12">
            <div className="container mx-auto px-4 text-center">
              <Button
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[hsl(var(--deep-green))] hover:translate-y-[-3px] hover:shadow-lg font-semibold px-8 py-4 transition-all duration-200"
                onClick={() =>
                  window.open("https://conferencenow.info/tgu/past/", "_blank")
                }
              >
                Past Sessions
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

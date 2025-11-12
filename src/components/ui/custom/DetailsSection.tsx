import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface DetailsSectionProps {
  description: string;
  bioURL: string;
  agendaURL: string;
  pptURL: string;
}

export default function DetailsSection({
  description,
  bioURL,
  agendaURL,
  pptURL,
}: DetailsSectionProps) {
  const links = [
    ["Complete Bio", bioURL],
    ["Agenda", agendaURL],
    ["PowerPoint", pptURL],
  ] as const;

  return (
    <section className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Details of the Meeting
      </h2>

      <Card className="p-6 md:p-8 mb-6 border border-white/20 shadow-md bg-[rgba(14,77,45,0.7)] backdrop-blur-md">
        <p className="text-base leading-relaxed text-white mb-6">
          {description || "Welcome to the collaborative session..."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map(([label, url]) => (
            <Button
              key={label}
              variant="outline"
              className="border-2 border-white text-white bg-transparent 
                         hover:bg-white/85 hover:translate-y-[-3px] hover:shadow-lg 
                         font-semibold h-auto py-4 flex flex-col items-center gap-2 
                         transition-all duration-200"
              onClick={() => window.open(url as string, "_blank")}
              disabled={!url}
            >
              <ExternalLink className="h-5 w-5" />
              <span className="font-medium">{label}</span>
            </Button>
          ))}
        </div>
      </Card>
    </section>
  );
}

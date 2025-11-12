import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface JoinSectionProps {
  meetURL: string;
}

export default function JoinSection({ meetURL }: JoinSectionProps) {
  return (
    <section className="mb-12">
      <Card className="bg-[rgba(14,77,45,0.7)] border border-white/20 shadow-lg p-8 text-center backdrop-blur-md">
        <h2 className="text-2xl font-bold text-white mb-6">
          Joining the workshop online
        </h2>
        <Button
          size="lg"
          className="border-2 border-white text-white bg-transparent 
                     hover:bg-white/85 hover:text-[hsl(var(--deep-green))] 
                     hover:translate-y-[-3px] hover:shadow-lg px-8 py-6 text-lg 
                     font-semibold transition-all duration-200"
          disabled={!meetURL}
          onClick={() => window.open(meetURL, "_blank")}
        >
          <ExternalLink className="mr-2 h-5 w-5" />
          Join Google Meet
        </Button>
      </Card>
    </section>
  );
}

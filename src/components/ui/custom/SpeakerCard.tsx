import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SpeakerCardProps {
  name: string;
  roleLabel: string;
  bio: string;
}

const SpeakerCard = ({ name, roleLabel, bio }: SpeakerCardProps) => {
  return (
    <div className="relative group">
      {/* Base Card */}
      <Card className="bg-primary transition-all duration-300 cursor-default p-6 border-none">
        <div className="text-center transition-opacity duration-200 group-hover:opacity-10">
          <h3 className="text-lg font-semibold text-primary-foreground">
            {name}
          </h3>
          <p className="text-sm text-primary-foreground/90 mt-2">
            {roleLabel}
          </p>
        </div>
      </Card>

      {/* Read Short Bio Button (Center Fade-In) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="pointer-events-auto
                         border-2 border-white text-white bg-transparent
                         font-semibold shadow
                         opacity-0 scale-95
                         transition-all duration-200
                         group-hover:opacity-100 group-hover:scale-100
                         hover:bg-white/85 hover:text-[hsl(var(--deep-green))]
                         hover:translate-y-[-3px] hover:shadow-lg
                         rounded-xl px-5 py-2"
              onClick={(e) => e.stopPropagation()}
            >
              Read Short Bio
            </Button>
          </DialogTrigger>

          {/* Pop-up Bio Card */}
          <DialogContent
            className="max-w-2xl overflow-auto max-h-[80vh]
                       bg-[rgba(14,77,45,0.95)] border border-white/20
                       backdrop-blur-md rounded-2xl shadow-2xl
                       text-white p-8 animate-in fade-in-50 zoom-in-50 duration-300"
          >
            <DialogHeader className="border-b border-white/20 pb-4 mb-4">
              <DialogTitle className="text-2xl font-bold text-[#FFC629]">
                {name}
              </DialogTitle>
            </DialogHeader>

            <div className="whitespace-pre-line text-base leading-relaxed tracking-wide text-white/90">
              {bio || "Details will appear here."}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SpeakerCard;

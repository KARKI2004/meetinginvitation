import { Button } from "@/components/ui/button";

interface HeaderProps {
  header: string;
}

export default function Header({ header }: HeaderProps) {
  return (
    <header className="bg-[hsl(var(--deep-green))]/90 py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Southeastern logo button */}
        <button
          onClick={() => window.open("https://www.southeastern.edu", "_blank")}
          className="flex items-center justify-center gap-2
                     bg-white/10 backdrop-blur-sm border-2 border-[#FFC629]
                     rounded-xl px-6 py-2
                     hover:bg-white/15 hover:scale-105 hover:shadow-[0_0_12px_rgba(255,198,41,0.6)]
                     transition-all duration-300"
        >
          <img
            src="/images/logo.png"
            alt="Southeastern Louisiana University Logo"
            className="h-10 w-14"
          />
        </button>

        <h1 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-wider text-[hsl(var(--gold))] flex-1">
          {header}
        </h1>

        <div className="w-10" />
      </div>
    </header>
  );
}

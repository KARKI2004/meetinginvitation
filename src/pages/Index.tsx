import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Calendar, Globe, Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMeetingData } from "@/hooks/useMeetingData";

const Index = () => {
  const { data, loading, error } = useMeetingData();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading meeting details...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-md text-center">
          <h2 className="text-xl font-semibold text-destructive mb-2">
            Unable to load meeting data
          </h2>
          <p className="text-muted-foreground">{error || "Please try again later"}</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <header className="bg-[hsl(var(--deep-green))] py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl md:text-4xl font-bold uppercase tracking-wider text-[hsl(var(--gold))]">
            Invitation
          </h1>
        </div>
      </header>

      {/* Subheader */}
      <section className="bg-[hsl(var(--dark-green))] py-4">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-semibold text-[hsl(var(--gold))]">
            {data.title}
          </h2>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl animate-fade-in">
        {/* Speaker Section */}
        <TooltipProvider>
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Speaker Card 1 */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-help p-6 border-none">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-primary-foreground">
                        {data.speaker1Name}
                      </h3>
                      <p className="text-sm text-primary-foreground/90 mt-2">
                        {data.speaker1Title}
                      </p>
                    </div>
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs p-4 bg-popover border-border">
                  <p className="text-sm">{data.speaker1Bio}</p>
                </TooltipContent>
              </Tooltip>

              {/* Speaker Card 2 */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-help p-6 border-none">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-primary-foreground">
                        {data.speaker2Name}
                      </h3>
                      <p className="text-sm text-primary-foreground/90 mt-2">
                        {data.speaker2Title}
                      </p>
                    </div>
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs p-4 bg-popover border-border">
                  <p className="text-sm">{data.speaker2Bio}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <p className="text-center text-sm text-muted-foreground italic">
              To share their thoughts on the opportunity for collaboration.
            </p>
          </section>
        </TooltipProvider>

        {/* Details Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Details of the Meeting
          </h2>
          
          <Card className="p-6 md:p-8 mb-6 border-border shadow-md">
            <p className="text-base leading-relaxed text-foreground mb-6">
              <span className="font-semibold">Description:</span> {data.description}
            </p>

            {/* Document Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-auto py-4 flex flex-col items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open(data.bioLink, '_blank')}
              >
                <ExternalLink className="h-5 w-5" />
                <span className="font-medium">Complete Bio</span>
              </Button>

              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-auto py-4 flex flex-col items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open(data.agendaLink, '_blank')}
              >
                <ExternalLink className="h-5 w-5" />
                <span className="font-medium">Agenda</span>
              </Button>

              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-auto py-4 flex flex-col items-center gap-2 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open(data.presentationLink, '_blank')}
              >
                <ExternalLink className="h-5 w-5" />
                <span className="font-medium">PowerPoint</span>
              </Button>
            </div>
          </Card>
        </section>

        {/* Date & Time */}
        <section className="mb-12 text-center">
          <div className="inline-flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 text-foreground">
              <Calendar className="h-5 w-5 text-secondary" />
              <p className="italic text-lg">
                {data.dateTimeUS} ({data.timezone})
              </p>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Globe className="h-5 w-5 text-secondary" />
              <p className="italic text-lg">
                {data.dateTimeVN}
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Link Section */}
        <section className="mb-12">
          <Card className="bg-[hsl(var(--yellow-accent))] border-none shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-accent-foreground mb-6">
              Joining the workshop online
            </h2>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open(data.meetingLink, '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Join Google Meet
            </Button>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open(data.pastSessionsLink, '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Past Sessions
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;

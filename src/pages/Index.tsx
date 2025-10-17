import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Calendar, Clock, Globe } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
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
            Collaborative Meeting Series
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
                        Dr. Louis Le Guyader
                      </h3>
                      <p className="text-sm text-primary-foreground/90 mt-2">
                        Main Speaker
                      </p>
                    </div>
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs p-4 bg-popover border-border">
                  <p className="text-sm">
                    Professor, Department of Accounting & Finance, College of Business, 
                    Southeastern Louisiana University, Hammond, Louisiana 70402. 
                    Office: 52 Garrett Hall
                  </p>
                </TooltipContent>
              </Tooltip>

              {/* Speaker Card 2 */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-help p-6 border-none">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-primary-foreground">
                        Dr. Minh Huynh
                      </h3>
                      <p className="text-sm text-primary-foreground/90 mt-2">
                        Management Information Systems – Facilitator
                      </p>
                    </div>
                  </Card>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs p-4 bg-popover border-border">
                  <p className="text-sm">
                    PhD. Professor of MIS, Marketing & Supply Chain Management, 
                    College of Business
                  </p>
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
              <span className="font-semibold">Description:</span> Welcome to the collaborative session between 
              Southeastern Louisiana University and partner University in Vietnam. This is the first 
              collaborative meeting series in the Spring 2025. This session features Dr. Louis Le Guyader 
              Professor Department of Accounting & Finance College of Business Southeastern Louisiana 
              University Hammond, Louisiana. He will share his expertise in the area of Accounting System 
              and Standards.
            </p>

            {/* Document Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button 
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 hover:shadow-md"
                onClick={() => window.open('https://conferencenow.info/tgu/presentation/250206-Louis-Bio-DUE.pdf', '_blank')}
              >
                <ExternalLink className="h-5 w-5" />
                <span className="font-medium">Complete Bio</span>
              </Button>

              <Button 
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 hover:shadow-md"
                onClick={() => window.open('https://docs.google.com/document/u/1/d/e/2PACX-1vT7NY1rWA7B-GFoUpDpV_RhKkgcIXWRFqjtYeg-WdLbYZUXPANqEelzOzqx3USpFWizZiyfTdsCZPNd/pub', '_blank')}
              >
                <ExternalLink className="h-5 w-5" />
                <span className="font-medium">Agenda</span>
              </Button>

              <Button 
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2 hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 hover:shadow-md"
                onClick={() => window.open('https://conferencenow.info/tgu/presentation/250206-Louis-Presentation.pdf', '_blank')}
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
                Thursday February 6, 2025 at 7PM (US-CST)
              </p>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Globe className="h-5 w-5 text-secondary" />
              <p className="italic text-lg">
                Thứ Sáu ngày 7 tháng 2, năm 2025 lúc 8 giờ sáng (Việt Nam)
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
              onClick={() => window.open('https://meet.google.com/vid-zshj-pda', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Join Google Meet
            </Button>
          </Card>
        </section>

        {/* Meeting Info Block */}
        <section className="mb-12">
          <Card className="p-6 md:p-8 border-border shadow-md">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              SLU-Vi Meeting
            </h3>
            <div className="space-y-3 text-foreground">
              <div className="flex items-start gap-2">
                <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Time zone: America/Chicago</p>
                </div>
              </div>
              <div className="border-t border-border pt-3">
                <p className="font-semibold mb-2">Google Meet joining info</p>
                <p className="text-sm text-muted-foreground mb-3">
                  Video call link: https://meet.google.com/vid-zshj-pda
                </p>
                <Button 
                  variant="outline"
                  className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300"
                  onClick={() => window.open('https://meet.google.com/vid-zshj-pda', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open Meeting Link
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <Button 
            variant="outline"
            size="lg"
            className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300"
            onClick={() => window.open('https://conferencenow.info/tgu/past/', '_blank')}
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

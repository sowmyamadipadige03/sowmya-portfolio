import { Reveal } from "@/components/ui/Reveal";
import { ViralityDemo } from "@/components/widgets/ViralityDemo";
import { ArrowRight, TerminalSquare } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative z-10 pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
        
        <div className="flex flex-col items-start max-w-2xl">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-primary text-xs tracking-[0.1em] mb-6 uppercase">
              <span className="w-5 h-px bg-primary block" />
              AI/ML · Final Year CSE
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 tracking-tight text-foreground">
              Turning raw data into <span className="text-primary">models that decide.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              I build machine learning systems end-to-end — from feature engineering to explainable predictions. Currently deep in NLP, clustering, and predictive modeling, prepping for data science roles.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollTo("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-semibold text-sm transition-transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <button 
                onClick={() => scrollTo("contact")}
                className="bg-transparent border border-border text-foreground hover:border-primary hover:text-primary px-6 py-3 rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
              >
                <TerminalSquare size={16} /> Get in Touch
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} direction="left" className="relative">
          {/* Decorative glow behind widget */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />
          <ViralityDemo />
        </Reveal>

      </div>
    </section>
  );
}

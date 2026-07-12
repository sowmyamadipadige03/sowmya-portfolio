import { Reveal } from "@/components/ui/Reveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Learning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="learning" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <Reveal>
          <div className="mb-12">
            <div className="font-mono text-primary text-xs tracking-widest mb-3 uppercase">In Progress</div>
            <h2 className="text-3xl font-display font-bold text-foreground">Currently building</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
            
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-2xl relative z-10">
              <h3 className="text-xl font-display font-bold text-foreground mb-3">IBM Data Science Professional Certificate</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Working through 6 core courses — Python for DS, SQL, Data Analysis, Machine Learning, and the Applied Capstone.
              </p>
            </div>

            <div className="w-full md:w-64 shrink-0 relative z-10">
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden mb-3">
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary to-amber-400"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "45%" } : { width: 0 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                />
              </div>
              <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest text-right">
                July — September 2026
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SAMPLES = [
  {
    id: 0,
    label: "Humorous tweet, 3 hashtags, video",
    text: "\"Just tried the 3am coding trick and now my code magically works anyone else?\" #relatable #coding #devlife",
    score: 78,
    factors: [
      { name: "Content Category", value: 95 },
      { name: "Hashtag Strategy", value: 92 },
      { name: "Posting Timing", value: 88 },
      { name: "Sentiment & Emotion", value: 80 },
      { name: "Media Type", value: 65 }
    ]
  },
  {
    id: 1,
    label: "Plain announcement, no hashtags, text-only",
    text: "\"Server maintenance scheduled for Tuesday 3-4 PM. Expect brief downtime.\"",
    score: 22,
    factors: [
      { name: "Content Category", value: 20 },
      { name: "Hashtag Strategy", value: 10 },
      { name: "Posting Timing", value: 40 },
      { name: "Sentiment & Emotion", value: 15 },
      { name: "Media Type", value: 25 }
    ]
  },
  {
    id: 2,
    label: "Emotional story, question hook, image",
    text: "\"I almost gave up on this project 3 times. Here's what kept me going — and why you shouldn't quit either 🧵\"",
    score: 64,
    factors: [
      { name: "Content Category", value: 70 },
      { name: "Hashtag Strategy", value: 40 },
      { name: "Posting Timing", value: 60 },
      { name: "Sentiment & Emotion", value: 85 },
      { name: "Media Type", value: 55 }
    ]
  }
];

export function ViralityDemo() {
  const [selectedId, setSelectedId] = useState(0);
  const sample = SAMPLES[selectedId];

  return (
    <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col relative z-10 w-full max-w-lg mx-auto md:max-w-none">
      {/* Window Controls / Top Bar */}
      <div className="flex items-center gap-3 px-4 py-3 bg-secondary/50 border-b border-border text-xs font-mono text-muted-foreground">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <span>virality_predictor.py — demo</span>
      </div>

      <div className="p-6 flex flex-col gap-5">
        <div>
          <div className="font-mono text-[10px] text-muted-foreground mb-2 tracking-widest uppercase">Sample Post Input</div>
          <div className="relative">
            <select 
              className="w-full appearance-none bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm font-sans text-foreground outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all cursor-pointer"
              value={selectedId}
              onChange={(e) => setSelectedId(Number(e.target.value))}
            >
              {SAMPLES.map(s => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
              ▼
            </div>
          </div>
        </div>

        <div className="bg-secondary/40 border border-border rounded-lg p-4 font-mono text-sm min-h-[80px] flex items-center shadow-inner">
          <AnimatePresence mode="wait">
            <motion.p
              key={selectedId}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="text-foreground/90"
            >
              {sample.text}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6 mt-2">
          {/* Gauge / Score */}
          <div className="flex flex-col items-center justify-center min-w-[90px]">
            <div className="font-mono text-[10px] text-muted-foreground mb-1 tracking-widest uppercase">Virality Score</div>
            <div className="font-display font-bold text-5xl text-primary flex items-baseline gap-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={selectedId}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {sample.score}
                </motion.span>
              </AnimatePresence>
              <span className="text-lg font-normal text-muted-foreground">/100</span>
            </div>
          </div>

          {/* Factors */}
          <div className="flex-1 flex flex-col gap-2.5">
            {sample.factors.map((factor, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs font-mono">
                <div className="w-[120px] text-muted-foreground truncate" title={factor.name}>
                  {factor.name}
                </div>
                <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${factor.value}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 text-[11px] text-muted-foreground/60 italic font-sans leading-tight">
          * Simplified client-side illustration of how the scoring model evaluates features.
        </div>
      </div>
    </div>
  );
}

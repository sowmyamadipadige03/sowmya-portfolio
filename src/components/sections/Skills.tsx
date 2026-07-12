import { Reveal } from "@/components/ui/Reveal";

const SKILL_CATEGORIES = [
  {
    title: "LANGUAGES",
    items: ["Python", "Java", "SQL", "HTML/CSS/JS"]
  },
  {
    title: "ML / DATA SCIENCE",
    items: ["scikit-learn", "pandas", "NumPy", "TF-IDF", "Clustering (K-Means)", "PCA", "Logistic Regression", "Random Forest"]
  },
  {
    title: "TOOLS",
    items: ["Google Colab", "Jupyter", "Flask", "Git / GitHub", "Matplotlib / Seaborn"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <div className="font-mono text-primary text-xs tracking-widest mb-3 uppercase">Stack</div>
            <h2 className="text-3xl font-display font-bold text-foreground">What I build with</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={category.title} delay={idx * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/50 transition-colors">
                <h3 className="font-mono text-primary text-sm tracking-wide mb-5 uppercase">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(item => (
                    <span 
                      key={item} 
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary border border-border text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

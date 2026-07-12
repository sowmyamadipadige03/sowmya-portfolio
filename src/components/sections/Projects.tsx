import { Reveal } from "@/components/ui/Reveal";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    num: "01",
    title: "Virality Prediction System for Social Media",
    tagline: "Predicts whether a post will go viral — before you hit publish",
    description: "An AI-powered pre-publication content evaluator built with Flask and scikit-learn. A custom NLP pipeline extracts sentiment, readability, and viral-trigger signals from post text, merges them with behavioral metadata (follower tier, posting time, engagement rate), and feeds a 13-feature vector through a dual-model pipeline — a Random Forest Classifier for the viral/non-viral call and a Gradient Boosting Regressor for a continuous 0–100 score. A rule-based 10-factor panel explains every prediction.",
    metrics: [
      { value: "<300ms", label: "API response time" },
      { value: "5,000", label: "records trained on" },
      { value: "7", label: "REST endpoints" }
    ],
    stack: ["Python", "Flask", "scikit-learn", "JavaScript"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/sowmyamadipadige03/Virality-Prediction-System-for-Social-Media", icon: Github },
      { label: "Live Demo", url: "#", icon: ExternalLink }
    ]
  },
  {
    num: "02",
    title: "Dynamic Customer Segmentation",
    tagline: "Segments 8,950+ credit card customers — and tracks how those segments shift over time",
    description: "An unsupervised ML pipeline for credit risk profiling. Built RFM (Recency-Frequency-Monetary) features from transaction data, reduced dimensionality with PCA, and applied K-Means clustering to group customers by spending behavior. Added a simulated streaming layer that processes transactions in batch windows — moving the system beyond static, one-time segmentation to near real-time behavioral tracking.",
    metrics: [
      { value: "0.46", label: "silhouette score" },
      { value: "97.75%", label: "variance retained (PCA)" },
      { value: "8,950", label: "customers analyzed" }
    ],
    stack: ["Python", "pandas", "scikit-learn", "Seaborn"],
    links: [
      { label: "GitHub Repo", url: "https://github.com/sowmyamadipadige03/Dynamic-Customer-Segmentation", icon: Github }
    ]
  },
  {
    num: "03",
    title: "Semantic Analysis — Twitter Sentiment Classifier",
    tagline: "Classic NLP done right — built and shipped end-to-end in a single day",
    description: "A TF-IDF + Logistic Regression pipeline for classifying tweet sentiment, built entirely in Google Colab. Covers the full workflow: text cleaning and preprocessing, TF-IDF vectorization, model training and evaluation, and visualizing results — a compact demonstration of the classic NLP pipeline done cleanly.",
    metrics: [],
    stack: ["Python", "scikit-learn", "TF-IDF", "Google Colab"],
    links: [
      { label: "GitHub Repo", url: "#", icon: Github }
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <div className="font-mono text-primary text-xs tracking-widest mb-3 uppercase">Featured Work</div>
            <h2 className="text-3xl font-display font-bold text-foreground">Projects I can walk you through end-to-end</h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.num} delay={idx * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 hover:border-primary/40 transition-colors group">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  
                  {/* Number Indicator */}
                  <div className="hidden lg:block font-mono text-5xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                    {project.num}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-primary font-medium text-sm mb-5 font-mono">{project.tagline}</p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-3xl">
                      {project.description}
                    </p>

                    {project.metrics.length > 0 && (
                      <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
                        {project.metrics.map(m => (
                          <div key={m.label} className="font-mono">
                            <span className="block text-xl font-bold text-foreground">{m.value}</span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-6">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.links.map(link => {
                          const Icon = link.icon;
                          return (
                            <a 
                              key={link.label}
                              href={link.url}
                              target={link.url !== "#" ? "_blank" : undefined}
                              rel={link.url !== "#" ? "noopener noreferrer" : undefined}
                              className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors group/link"
                            >
                              <Icon size={16} /> 
                              <span className="border-b border-transparent group-hover/link:border-primary transition-colors">{link.label}</span>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg font-sans">
          <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse" />
          <span>Madipadige Sowmya<span className="font-mono text-muted-foreground text-sm font-normal"> · dev</span></span>
        </div>
        
        <nav className="hidden sm:flex items-center gap-8 text-sm font-mono text-muted-foreground">
          <button onClick={() => scrollTo("projects")} className="hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollTo("skills")} className="hover:text-primary transition-colors">Skills</button>
          <button onClick={() => scrollTo("learning")} className="hover:text-primary transition-colors">Currently Learning</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">Contact</button>
        </nav>
      </div>
    </header>
  );
}

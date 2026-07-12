import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-border mt-32 py-12 bg-background/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex gap-6 text-sm font-mono text-muted-foreground">
          <a href="https://github.com/sowmyamadipadige03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/sowmya-madipadige-5a31402a5/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="mailto:sowmyagupta0306@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={16} /> Email
          </a>
        </div>
        
        <div className="text-xs font-mono text-muted-foreground/60 text-center sm:text-right">
          Open to internships and <br className="sm:hidden"/>full-time roles in Data Science and Machine Learning.
        </div>
      </div>
    </footer>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import Scene3D from "./3D/Scene3D";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 hero-gradient animate-gradient opacity-70" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Greeting */}
          <div className="mb-6 inline-block animate-slide-in-left">
            <span className="px-6 py-3 glass-effect rounded-full text-sm font-medium glow-effect">
              <span className="gradient-text font-semibold">✨ Available for Freelance & Full-time</span>
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 leading-tight">
            <span className="block text-2xl md:text-4xl font-normal text-muted-foreground mb-4">
              Hello, I'm
            </span>
            <span className="gradient-text animate-gradient inline-block hover:scale-105 transition-transform">
              Nishchay Verma
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-foreground mb-4 font-semibold">
            Software Engineer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Architecting <span className="text-primary font-semibold">scalable backend systems</span> and <span className="text-accent font-semibold">AI-powered solutions</span> with 3 years of experience building enterprise-grade applications
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 glow-effect-lg transition-spring hover:scale-110 group"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="glass-effect border-2 border-primary/50 hover:bg-primary/20 text-lg px-8 py-6 font-bold transition-spring hover:scale-110"
              onClick={() => window.open('https://drive.google.com/file/d/1aJDXbVhkOeUIAlP6IjexqDqJdgDZxhQN/view', '_blank')}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex gap-6 justify-center mb-16 animate-slide-in-right">
            {[
              { icon: Github, href: "https://github.com/vnishchay", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vnishchay", label: "LinkedIn" },
              { icon: Twitter, href: "https://twitter.com/nishchay_v_", label: "Twitter" },
              { icon: Mail, href: "#contact", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('#') ? undefined : "_blank"}
                rel={social.href.startsWith('#') ? undefined : "noopener noreferrer"}
                onClick={social.href.startsWith('#') ? (e) => { e.preventDefault(); scrollToSection('contact'); } : undefined}
                className="group p-4 glass-effect rounded-2xl hover:scale-125 transition-spring border border-border/50 hover:border-primary/80 glow-effect relative overflow-hidden"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 relative z-10 group-hover:text-primary transition-colors" />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

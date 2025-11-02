import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 hero-gradient animate-gradient opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Greeting */}
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full text-sm font-medium border border-primary/20">
              🎯 Available for opportunities
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text animate-gradient">
              Nishchay Verma
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Full Stack Developer & Cybersecurity Enthusiast
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Student at <span className="text-primary font-semibold">IIIT Sricity</span> | 
            Building scalable applications with React, Flutter & Docker
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect transition-all hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10 transition-all hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4 justify-center mb-16">
            <a 
              href="https://github.com/vnishchay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:scale-110 transition-all border border-border glow-effect"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vnishchay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:scale-110 transition-all border border-border glow-effect"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/nishchay_v_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:scale-110 transition-all border border-border glow-effect"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="p-3 bg-secondary/50 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:scale-110 transition-all border border-border glow-effect"
            >
              <Mail className="w-5 h-5" />
            </a>
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

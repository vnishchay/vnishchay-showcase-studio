import { ExternalLink, Github, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, RoundedBox } from '@react-three/drei';

const FloatingIcon = ({ color }: { color: string }) => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
      <RoundedBox args={[0.8, 0.8, 0.8]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </RoundedBox>
    </Float>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Interview Zone",
      description: "A comprehensive interview conducting platform that streamlines the hiring process with real-time video interviews, coding assessments, and candidate evaluation tools.",
      tech: ["JavaScript", "React", "Node.js", "WebRTC"],
      github: "https://github.com/vnishchay/interview-zone",
      stars: 5,
      forks: 2
    },
    {
      title: "Urban Eatary",
      description: "A full-stack food delivery website with a beautiful UI/UX. Features include restaurant browsing, cart management, order tracking, and secure payment integration.",
      tech: ["JavaScript", "React", "Express", "MongoDB"],
      github: "https://github.com/vnishchay/Urban-Eatary-Frontend",
      stars: 1
    },
    {
      title: "COVID-19 Supermarket Simulation",
      description: "Agent-Based Modeling simulation to analyze virus spread patterns in supermarket environments. Helps understand social distancing effectiveness and safety measures.",
      tech: ["NetLogo", "Agent-Based Modeling", "Data Analysis"],
      github: "https://github.com/vnishchay/supermkt-covid-abm",
      stars: 2,
      forks: 5
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold gradient-text">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Showcasing innovative solutions and technical excellence across various domains
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative perspective-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-full p-8 gradient-card rounded-3xl border-2 border-border hover:border-primary/70 transition-all duration-500 card-shadow hover:scale-105 hover:-rotate-1 flex flex-col overflow-hidden">
                  {/* 3D Background Element */}
                  <div className="absolute -top-8 -right-8 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                      <ambientLight intensity={0.5} />
                      <pointLight position={[5, 5, 5]} intensity={1} color="#38BDF8" />
                      <FloatingIcon color={index % 2 === 0 ? "#38BDF8" : "#A855F7"} />
                      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={3} />
                    </Canvas>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Project header */}
                  <div className="mb-6 relative z-10">
                    <h3 className="text-2xl font-heading font-bold mb-3 group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1.5 glass-effect rounded-lg text-xs font-bold text-primary border border-primary/20 hover:border-primary/60 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 mb-6 text-sm relative z-10">
                    {project.stars && (
                      <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-semibold">{project.stars}</span>
                      </div>
                    )}
                    {project.forks && (
                      <div className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                        <Github className="w-5 h-5" />
                        <span className="font-semibold">{project.forks} forks</span>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto relative z-10">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="flex-1 border-2 border-primary/40 hover:bg-primary/20 hover:border-primary/80 group/btn transition-spring font-bold"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more */}
          <div className="text-center mt-16 animate-fade-in-up">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 hover:bg-primary/20 hover:border-primary/80 text-lg px-8 py-6 font-bold transition-spring hover:scale-110"
              asChild
            >
              <a href="https://github.com/vnishchay" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

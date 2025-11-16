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
      description: "An interview conducting platform where interviewers and candidates can connect for real-time interviews. Features user authentication, interview scheduling, question management, and interview details tracking.",
      tech: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/vnishchay/interview-zone",
      deploy: "https://interview-zone-frontend.web.app/",
      preview: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
      stars: 5,
      forks: 2,
      featured: true
    },
    {
      title: "Urban Eatary",
      description: "A full-stack food delivery application with beautiful UI/UX. Order your favorite food from the menu, pay online using credit cards, and enjoy delicious food delivered to your doorstep. Features restaurant browsing, cart management, and secure payment integration.",
      tech: ["JavaScript", "React", "Node.js", "MongoDB", "Firebase"],
      github: "https://github.com/vnishchay/Urban-Eatary-Frontend",
      deploy: "https://foodie-eb5cd.web.app",
      preview: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
      stars: 1,
      forks: 0,
      featured: true
    },
    {
      title: "E-Commerce Flutter App",
      description: "A complete e-commerce application with Flutter frontend, Node.js backend, and MongoDB database. Cross-platform mobile app for shopping with product browsing, cart management, and order processing.",
      tech: ["Dart", "Flutter", "Node.js", "MongoDB", "REST API"],
      github: "https://github.com/vnishchay/ecom-flutter-node",
      deploy: null,
      preview: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      stars: 3,
      forks: 0,
      featured: true
    },
    {
      title: "Sightly Solve",
      description: "Interview Zone DSA patterns platform - A comprehensive platform for learning and practicing data structures and algorithms patterns commonly asked in technical interviews. Interactive coding challenges and pattern recognition.",
      tech: ["TypeScript", "React", "Next.js", "Algorithms", "DSA"],
      github: "https://github.com/vnishchay/sightly-solve",
      deploy: "https://interview-zone-dsa-patterns.lovable.app",
      preview: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
      stars: 0,
      forks: 0,
      featured: true
    },
    {
      title: "gRPC Microservice",
      description: "A microservices architecture implementation using gRPC for inter-service communication. Built with Go and Python, demonstrating high-performance, scalable microservices with efficient protocol buffer serialization.",
      tech: ["Go", "Python", "gRPC", "Protocol Buffers", "Microservices"],
      github: "https://github.com/vnishchay/go-python-grpc-microservice",
      deploy: null,
      preview: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      stars: 0,
      forks: 0,
      featured: true
    },
    {
      title: "Telepathy Flutter",
      description: "A Flutter mobile application with native platform integrations. Cross-platform mobile app built with Dart, featuring native Android and iOS support with platform-specific optimizations.",
      tech: ["Dart", "Flutter", "Kotlin", "Swift", "C++"],
      github: "https://github.com/vnishchay/telepathy-flutter",
      deploy: null,
      preview: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      stars: 0,
      forks: 0,
      featured: true
    },
    {
      title: "COVID-19 Supermarket Simulation",
      description: "Agent-Based Modeling simulation to analyze virus spread patterns in supermarket environments. Helps understand social distancing effectiveness and safety measures through computational modeling.",
      tech: ["NetLogo", "Agent-Based Modeling", "Simulation", "Data Analysis"],
      github: "https://github.com/vnishchay/supermkt-covid-abm",
      deploy: null,
      preview: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?w=800&h=600&fit=crop",
      stars: 2,
      forks: 5,
      featured: true
    },
    {
      title: "Interview Zone",
      description: "Frontend implementation of the Interview Zone platform. React-based user interface for interviewers and candidates with real-time updates and intuitive design.",
      tech: ["JavaScript", "React", "CSS", "HTML"],
      github: "https://github.com/vnishchay/Interview-zone-Front",
      deploy: null,
      preview: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      stars: 2,
      forks: 1,
      featured: false
    },
    {
      title: "Urban Eatary Backend",
      description: "Backend API for Urban Eatary food delivery platform. RESTful API with comprehensive documentation, handling orders, payments, restaurant management, and user authentication.",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB", "Swagger"],
      github: "https://github.com/vnishchay/Urban-Eatary-Backend",
      deploy: "https://urban-eatary-backend.herokuapp.com/api-docs",
      preview: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
      stars: 1,
      forks: 2,
      featured: false
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
            {projects.filter(p => p.featured).map((project, index) => (
              <div 
                key={index}
                className="group relative perspective-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-full gradient-card rounded-3xl border-2 border-border hover:border-primary/70 transition-all duration-500 card-shadow hover:scale-105 hover:-rotate-1 flex flex-col overflow-hidden">
                  {/* Preview Image */}
                  {project.preview && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <img 
                        src={project.preview} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 glass-effect rounded-full text-xs font-bold gradient-text border border-primary/30">
                          Featured
                        </div>
                      )}
                    </div>
                  )}

                  <div className="relative flex-1 p-8 flex flex-col">
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
                      <p className="text-muted-foreground leading-relaxed text-sm">
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
                      {project.deploy && (
                        <Button 
                          variant="default" 
                          size="lg"
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group/btn transition-spring font-bold"
                          asChild
                        >
                          <a href={project.deploy} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="lg"
                        className={`${project.deploy ? 'flex-1' : 'w-full'} border-2 border-primary/40 hover:bg-primary/20 hover:border-primary/80 group/btn transition-spring font-bold`}
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Code
                        </a>
                      </Button>
                    </div>
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

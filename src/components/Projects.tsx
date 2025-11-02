import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Some of my recent work and contributions
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:scale-105 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project header */}
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 rounded text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  {project.stars && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                  {project.forks && (
                    <div className="flex items-center gap-1">
                      <Github className="w-4 h-4" />
                      <span>{project.forks} forks</span>
                    </div>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* View more */}
          <div className="text-center mt-12 animate-fade-in-up">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
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

const Skills = () => {
  const skillCategories = [
    {
      category: "Backend Engineering",
      skills: ["Golang", "Node.js", "Express.js", "Python", "C/C++", "Microservices", "REST API", "GraphQL"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["LLM Integration", "AI Agents", "RAG Systems", "Prompt Engineering", "ML Model Deployment"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Kubernetes", "Docker", "AWS", "Cloud-Native Architecture", "CI/CD", "Microservices"]
    },
    {
      category: "Data & Real-time Systems",
      skills: ["PostgreSQL", "MongoDB", "Redis", "WebSocket", "Socket.io", "Event-Driven Architecture"]
    },
    {
      category: "Frontend Technologies",
      skills: ["React", "TypeScript", "JavaScript", "Flutter", "Dart", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "System Design",
      skills: ["Distributed Systems", "Scalability", "Load Balancing", "Caching Strategies", "High Availability"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 card-shadow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-lg text-sm font-medium hover:bg-primary/20 hover:scale-105 transition-all border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub stats */}
          <div className="mt-16 text-center animate-fade-in-up">
            <h3 className="text-2xl font-heading font-semibold mb-8">GitHub Statistics</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=vnishchay&show_icons=true&include_all_commits=true&theme=tokyonight&count_private=true&hide_border=true"
                alt="GitHub Stats"
                className="rounded-xl border border-border card-shadow max-w-full h-auto"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://github-readme-stats.vercel.app/api?username=vnishchay&show_icons=true&theme=default&count_private=true`;
                }}
              />
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=vnishchay&layout=compact&theme=tokyonight&hide_border=true"
                alt="Top Languages"
                className="rounded-xl border border-border card-shadow max-w-full h-auto"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=vnishchay&layout=compact&theme=default`;
                }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              View more on <a href="https://github.com/vnishchay" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

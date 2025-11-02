import { Code2, Shield, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building scalable web and mobile applications with modern frameworks and tools"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Passionate about secure coding practices and vulnerability assessment"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and contributing to open-source projects"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate developer focused on creating impactful solutions
            </p>
          </div>

          {/* About content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="flex justify-center animate-fade-in-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-30" />
                <img 
                  src="https://avatars.githubusercontent.com/u/56715777?v=4" 
                  alt="Nishchay Verma"
                  className="relative rounded-2xl w-80 h-80 object-cover border-4 border-primary/20 card-shadow"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-3xl font-heading font-bold">
                Student & Developer from Varanasi, India
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently pursuing my studies at the <span className="text-primary font-semibold">Indian Institute of Information Technology Sricity</span>, 
                I'm deeply passionate about building innovative solutions that make a difference.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With expertise spanning from <span className="text-primary font-semibold">Full Stack Development</span> to <span className="text-primary font-semibold">Cybersecurity</span>, 
                I love tackling challenging problems and continuously learning new technologies.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <span className="text-accent font-semibold">I love connecting with different people</span>, so if you want to say hi, 
                I'll be happy to meet you! 😊
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

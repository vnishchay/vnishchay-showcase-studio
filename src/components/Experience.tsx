import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Toddle - Your Teaching Partner",
      roles: [
        {
          title: "Software Development Engineer 2",
          duration: "July 2024 - Present",
          location: "Remote",
          achievements: [
            "Architecting microservices and cloud-native solutions for EdTech platform serving thousands of educators",
            "Leading backend system design for scalable, distributed architectures using Golang and Node.js",
            "Implementing AI/LLM integration for intelligent features and automation",
            "Optimizing database performance and implementing caching strategies for high-traffic applications"
          ]
        },
        {
          title: "Software Engineer - Backend",
          duration: "July 2023 - June 2024",
          location: "Remote",
          achievements: [
            "Developed and maintained RESTful APIs serving millions of requests daily",
            "Built real-time communication features using WebSocket and event-driven architecture",
            "Collaborated with cross-functional teams to deliver features aligned with product roadmap",
            "Implemented CI/CD pipelines and automated testing frameworks"
          ]
        },
        {
          title: "Associate Software Engineer - Backend",
          duration: "January 2023 - June 2023",
          location: "Remote",
          achievements: [
            "Contributed to core backend services and microservices development",
            "Participated in code reviews and maintained high code quality standards",
            "Worked on database optimization and query performance improvements"
          ]
        }
      ]
    },
    {
      company: "Sozo",
      roles: [
        {
          title: "Full Stack Engineer",
          duration: "September 2022 - December 2022",
          location: "Remote",
          achievements: [
            "Led frontend development for cryptocurrency exchange platform from scratch",
            "Collaborated with design and blockchain teams for seamless integration",
            "Built responsive, secure user interfaces using React, ensuring optimal UX",
            "Implemented security best practices for handling sensitive financial data"
          ]
        }
      ]
    },
    {
      company: "Newton School",
      roles: [
        {
          title: "Software Engineer",
          duration: "April 2022 - September 2022",
          location: "Remote",
          achievements: [
            "Developed reusable component library, reducing code redundancy by 40%",
            "Implemented end-to-end testing using Cypress framework",
            "Enhanced user experience through rigorous testing and debugging processes",
            "Collaborated with product team to deliver features on tight timelines"
          ]
        }
      ]
    },
    {
      company: "Campus Media",
      roles: [
        {
          title: "Software Engineer Intern",
          duration: "February 2021 - April 2021",
          location: "Remote",
          achievements: [
            "Enhanced product usability leading to 1000+ user adoption",
            "Implemented cloud functions for push notification system",
            "Added key features improving product functionality and user engagement"
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nearly 3 years of building scalable backend systems and AI-powered solutions
            </p>
          </div>

          {/* Experience timeline */}
          <div className="space-y-12">
            {experiences.map((exp, expIndex) => (
              <div 
                key={expIndex}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${expIndex * 0.1}s` }}
              >
                {/* Company header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2 flex items-center gap-2">
                    <Briefcase className="w-6 h-6" />
                    {exp.company}
                  </h3>
                </div>

                {/* Roles */}
                <div className="space-y-8 ml-8 border-l-2 border-primary/20 pl-8">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-[2.35rem] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      
                      {/* Role card */}
                      <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-shadow">
                        <div className="mb-4">
                          <h4 className="text-xl font-heading font-semibold mb-2">
                            {role.title}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {role.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {role.location}
                            </span>
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {role.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex}
                              className="text-muted-foreground leading-relaxed flex gap-3"
                            >
                              <span className="text-primary mt-1.5">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key achievements callout */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 animate-fade-in-up">
            <h3 className="text-xl font-heading font-semibold mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Ranked AIR 418 in Google Hash Code competitive programming</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">LeetCode: Top 8% ranking with 600+ problems solved</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Built peer interview platform with WebRTC and distributed backend</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">Multiple certifications in cybersecurity and modern programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

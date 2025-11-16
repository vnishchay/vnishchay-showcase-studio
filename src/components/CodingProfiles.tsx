import { Trophy, TrendingUp, ExternalLink, Code, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "nichahylc2000",
      url: "https://leetcode.com/u/nichahylc2000/",
      achievement: "Top 8%",
      description: "600+ problems solved with consistent high performance",
      icon: Code,
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      textColor: "text-yellow-600",
      stats: [
        { label: "Problems Solved", value: "600+" },
        { label: "Contest Rating", value: "Top 8%" }
      ]
    },
    {
      platform: "Google Hash Code",
      username: "Rank #418",
      url: "https://drive.google.com/file/d/1ZzDVlyNifFPhGeFtFt9M4Fa2jNNO5aO2/view",
      achievement: "AIR 418",
      description: "Ranked All India Rank 418 in Google Hash Code competitive programming",
      icon: Trophy,
      color: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-600",
      stats: [
        { label: "Rank", value: "AIR 418" },
        { label: "Competition", value: "Google Hash Code" }
      ],
      buttonText: "View Certificate"
    },
    {
      platform: "GitHub",
      username: "vnishchay",
      url: "https://github.com/vnishchay",
      achievement: "Active Developer",
      description: "Open source contributions and project development",
      icon: Code,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      textColor: "text-green-600",
      stats: [
        { label: "Repositories", value: "50+" },
        { label: "Contributions", value: "Active" }
      ]
    }
  ];

  return (
    <section id="coding-profiles" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold gradient-text">Competitive Programming</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Coding <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Competitive programming excellence and algorithmic problem-solving achievements
            </p>
          </div>

          {/* Profiles grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {profiles.map((profile, index) => {
              const IconComponent = profile.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 bg-card rounded-2xl border-2 ${profile.borderColor} hover:border-primary/70 transition-all duration-500 card-shadow hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  <div className="relative z-10">
                    {/* Platform header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${profile.color} border ${profile.borderColor}`}>
                        <IconComponent className={`w-6 h-6 ${profile.textColor}`} />
                      </div>
                      {profile.achievement && (
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${profile.textColor} bg-gradient-to-r ${profile.color} border ${profile.borderColor}`}>
                          {profile.achievement}
                        </span>
                      )}
                    </div>

                    {/* Platform name */}
                    <h3 className="text-2xl font-heading font-bold mb-2">{profile.platform}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{profile.username}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{profile.description}</p>

                    {/* Stats */}
                    <div className="space-y-3 mb-6">
                      {profile.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{stat.label}</span>
                          <span className="font-semibold text-primary">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Link button */}
                    <Button
                      variant="outline"
                      className={`w-full border-2 ${profile.borderColor} hover:bg-gradient-to-r ${profile.color} hover:border-primary/80 transition-spring`}
                      asChild
                    >
                      <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        {(profile as any).buttonText || "View Profile"}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievement highlights */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl border border-primary/20 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-heading font-semibold">Notable Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl">
                <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">LeetCode Excellence</h4>
                  <p className="text-sm text-muted-foreground">Top 8% ranking with 600+ problems solved, demonstrating strong algorithmic and data structure expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-card/50 rounded-xl">
                <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Google Hash Code</h4>
                  <p className="text-sm text-muted-foreground">Achieved All India Rank 418 in Google's annual competitive programming competition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

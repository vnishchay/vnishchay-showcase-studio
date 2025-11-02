import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:nishchay@example.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always excited to discuss new opportunities, collaborations, or just have a friendly chat 
                  about technology and innovation.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">Varanasi, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">Drop me a message anytime</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://github.com/vnishchay" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-card rounded-lg hover:bg-primary/10 hover:scale-105 transition-all border border-border text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vnishchay" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-card rounded-lg hover:bg-primary/10 hover:scale-105 transition-all border border-border text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com/nishchay_v_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-card rounded-lg hover:bg-primary/10 hover:scale-105 transition-all border border-border text-sm font-medium"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-card border-border focus:border-primary min-h-[150px]"
                    placeholder="Tell me about your project or just say hi..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

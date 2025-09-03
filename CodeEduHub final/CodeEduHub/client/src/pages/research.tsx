import { Microscope, Users, Lightbulb, Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const researchProjects = [
  {
    title: "AI-Powered Code Analysis",
    description: "Developing machine learning models to automatically detect code vulnerabilities and suggest optimizations.",
    status: "Active",
    partners: ["Stanford University", "Google Research"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
    category: "Machine Learning",
    duration: "2023-2025"
  },
  {
    title: "Blockchain Education Platform",
    description: "Building a decentralized learning platform for cryptocurrency and blockchain development education.",
    status: "Active",
    partners: ["MIT", "Ethereum Foundation"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
    category: "Blockchain",
    duration: "2024-2026"
  },
  {
    title: "Inclusive Programming Education",
    description: "Research on accessibility and inclusive design in programming education for underrepresented communities.",
    status: "Recruiting",
    partners: ["Carnegie Mellon", "Code.org"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
    category: "Education Research",
    duration: "2024-2025"
  }
];

const collaborationTypes = [
  {
    title: "Academic Partnerships",
    description: "Collaborate with universities on cutting-edge research in computer science education",
    icon: Microscope,
    opportunities: ["Research Assistant", "PhD Collaboration", "Publication Co-author"]
  },
  {
    title: "Industry Collaboration",
    description: "Work with tech companies on real-world projects and internship programs",
    icon: Lightbulb,
    opportunities: ["Internship Programs", "Mentorship", "Project Sponsorship"]
  },
  {
    title: "Student Research Program",
    description: "Join our student research initiative and contribute to meaningful projects",
    icon: Users,
    opportunities: ["Research Credits", "Conference Presentations", "Portfolio Projects"]
  }
];

export default function Research() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-research-title">
            Research &amp; <span className="gradient-text">Collaboration</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-research-description">
            Advancing the future of programming education through innovative research, 
            academic partnerships, and collaborative projects with leading institutions.
          </p>
        </div>

        {/* Active Research Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8" data-testid="text-active-projects-title">
            Active Research Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchProjects.map((project, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 course-card" data-testid={`card-research-project-${index}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  data-testid={`img-research-project-${index}`}
                />
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-accent" data-testid={`badge-project-category-${index}`}>
                    {project.category}
                  </Badge>
                  <Badge 
                    variant={project.status === "Active" ? "default" : "outline"}
                    className={project.status === "Active" ? "bg-accent text-accent-foreground" : ""}
                    data-testid={`badge-project-status-${index}`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span data-testid={`text-project-duration-${index}`}>{project.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    <span data-testid={`text-project-partners-${index}`}>
                      {project.partners.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Opportunities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-collaboration-title">
              Collaboration Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-collaboration-description">
              Join our research community and contribute to the future of programming education
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {collaborationTypes.map((type, index) => (
              <div key={index} className="bg-secondary/30 rounded-xl p-8 text-center" data-testid={`card-collaboration-${index}`}>
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3" data-testid={`text-collaboration-type-${index}`}>
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`text-collaboration-description-${index}`}>
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.opportunities.map((opportunity, oppIndex) => (
                    <div key={oppIndex} className="text-sm text-accent" data-testid={`text-opportunity-${index}-${oppIndex}`}>
                      • {opportunity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Research Impact */}
        <section className="bg-secondary/30 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-research-impact-title">
              Research Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-research-impact-description">
              Our research contributes to the global programming education community
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2" data-testid="text-stat-publications">
                25+
              </div>
              <div className="text-muted-foreground">Published Papers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-conferences">
                12
              </div>
              <div className="text-muted-foreground">Conference Presentations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2" data-testid="text-stat-partnerships">
                30+
              </div>
              <div className="text-muted-foreground">Academic Partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-students">
                200+
              </div>
              <div className="text-muted-foreground">Student Researchers</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-secondary/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="text-join-research-title">
            Join Our Research Community
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-join-research-description">
            Whether you're a student, educator, or industry professional, there are many ways to get involved in our research initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-4 text-lg h-auto" data-testid="button-apply-research">
              Apply for Research Program
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg h-auto border-border text-foreground hover:bg-secondary" data-testid="button-view-publications">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Publications
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
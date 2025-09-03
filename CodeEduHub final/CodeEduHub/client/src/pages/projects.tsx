import { useState } from "react";
import { ExternalLink, Github, Star, Eye, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const studentProjects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Dashboard",
    description: "A comprehensive web application that helps users track their carbon footprint and suggest eco-friendly alternatives.",
    student: "Maria Rodriguez",
    course: "Full-Stack JavaScript",
    technologies: ["React", "Node.js", "MongoDB", "D3.js"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    githubUrl: "#",
    liveUrl: "#",
    stars: 124,
    views: 2340,
    category: "Web Development",
    completedAt: "2024-01-15",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Code Reviewer",
    description: "Machine learning tool that analyzes code quality, suggests improvements, and detects potential security vulnerabilities.",
    student: "James Park",
    course: "Python Data Science",
    technologies: ["Python", "TensorFlow", "Flask", "Docker"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    githubUrl: "#",
    liveUrl: "#",
    stars: 89,
    views: 1850,
    category: "Machine Learning",
    completedAt: "2024-01-12",
    featured: true
  },
  {
    id: 3,
    title: "CryptoPortfolio Tracker",
    description: "Real-time cryptocurrency portfolio management app with advanced analytics and price prediction features.",
    student: "Sarah Chen",
    course: "React Development",
    technologies: ["React", "TypeScript", "Chart.js", "Web3"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    githubUrl: "#",
    liveUrl: "#",
    stars: 156,
    views: 3200,
    category: "Blockchain",
    completedAt: "2024-01-10",
    featured: true
  },
  {
    id: 4,
    title: "StudyBuddy - Collaborative Learning Platform",
    description: "Social learning platform that connects students for group study sessions and peer-to-peer tutoring.",
    student: "Alex Kim",
    course: "Full-Stack Development",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    githubUrl: "#",
    liveUrl: "#",
    stars: 67,
    views: 1450,
    category: "Education",
    completedAt: "2024-01-08",
    featured: false
  },
  {
    id: 5,
    title: "FitnessAI - Personalized Workout Planner",
    description: "AI-driven fitness application that creates personalized workout plans based on user goals and progress tracking.",
    student: "Emma Wilson",
    course: "Python Programming",
    technologies: ["Python", "Scikit-learn", "Streamlit", "SQLite"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    githubUrl: "#",
    liveUrl: "#",
    stars: 43,
    views: 890,
    category: "Machine Learning",
    completedAt: "2024-01-05",
    featured: false
  },
  {
    id: 6,
    title: "TaskFlow - Project Management Tool",
    description: "Agile project management application with kanban boards, time tracking, and team collaboration features.",
    student: "David Martinez",
    course: "Java Enterprise",
    technologies: ["Spring Boot", "Angular", "MySQL", "Redis"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    githubUrl: "#",
    liveUrl: "#",
    stars: 78,
    views: 1620,
    category: "Enterprise",
    completedAt: "2024-01-03",
    featured: false
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "Web Development", label: "Web Development" },
  { value: "Machine Learning", label: "Machine Learning" },
  { value: "Blockchain", label: "Blockchain" },
  { value: "Education", label: "Education" },
  { value: "Enterprise", label: "Enterprise" }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = studentProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-projects-title">
            Student <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-projects-description">
            Discover amazing projects built by our students. From web applications to machine learning models, 
            see what's possible when passion meets education.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <ExternalLink className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects, students, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-input border-border"
              data-testid="input-search-projects"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className={cn(
                  "whitespace-nowrap transition-colors",
                  selectedCategory === category.value
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border-border bg-card text-foreground hover:bg-secondary"
                )}
                data-testid={`button-filter-${category.value}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8" data-testid="text-featured-projects-title">
              Featured Projects
            </h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="bg-card border border-border rounded-xl overflow-hidden course-card" data-testid={`card-featured-project-${project.id}`}>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      data-testid={`img-featured-project-${project.id}`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-background/90 backdrop-blur" data-testid="badge-featured-project">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-accent" data-testid={`badge-featured-project-category-${project.id}`}>
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          <span data-testid={`text-featured-project-stars-${project.id}`}>{project.stars}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          <span data-testid={`text-featured-project-views-${project.id}`}>{project.views}</span>
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-featured-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4" data-testid={`text-featured-project-description-${project.id}`}>
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        By <span className="text-accent font-medium" data-testid={`text-featured-project-student-${project.id}`}>{project.student}</span> • 
                        <span className="ml-1" data-testid={`text-featured-project-course-${project.id}`}>{project.course}</span>
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-secondary rounded-md" data-testid={`text-featured-project-tech-${project.id}-${index}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1 text-xs" data-testid={`button-featured-project-live-${project.id}`}>
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs" data-testid={`button-featured-project-github-${project.id}`}>
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* All Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8" data-testid="text-all-projects-title">
            All Student Projects
          </h2>
          {regularProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-2" data-testid="text-no-projects-title">
                No projects found
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-no-projects-description">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="btn-primary"
                data-testid="button-clear-project-filters"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularProjects.map((project) => (
                <div key={project.id} className="bg-card border border-border rounded-xl overflow-hidden course-card" data-testid={`card-project-${project.id}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                    data-testid={`img-project-${project.id}`}
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-accent text-xs" data-testid={`badge-project-category-${project.id}`}>
                        {project.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          <span data-testid={`text-project-stars-${project.id}`}>{project.stars}</span>
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mb-3" data-testid={`text-project-description-${project.id}`}>
                      {project.description.slice(0, 100)}...
                    </p>
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground mb-2">
                        By <span className="text-accent" data-testid={`text-project-student-${project.id}`}>{project.student}</span>
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="text-xs px-2 py-1 bg-secondary rounded-md" data-testid={`text-project-tech-${project.id}-${index}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 text-xs h-8" data-testid={`button-project-live-${project.id}`}>
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs h-8" data-testid={`button-project-github-${project.id}`}>
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Submit Project CTA */}
        <div className="bg-secondary/30 rounded-xl p-8 text-center mt-20">
          <h3 className="text-2xl font-bold mb-4" data-testid="text-submit-project-title">
            Share Your Project
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-submit-project-description">
            Built something amazing during your course? Share it with the community and inspire other students!
          </p>
          <Button className="btn-primary px-8 py-4 text-lg h-auto" data-testid="button-submit-project">
            Submit Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
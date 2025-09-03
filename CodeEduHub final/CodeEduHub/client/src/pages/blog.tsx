import { useState } from "react";
import { Search, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Programming Education",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we teach and learn programming concepts.",
    content: "Full article content here...",
    author: "Alex Chen",
    authorRole: "Python Expert",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI & Education",
    tags: ["AI", "Education", "Programming"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Building Your First React Application: A Complete Guide",
    excerpt: "Step-by-step tutorial for beginners to create their first React application with modern best practices.",
    content: "Full article content here...",
    author: "Sarah Martinez",
    authorRole: "JavaScript Specialist",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Tutorial",
    tags: ["React", "JavaScript", "Tutorial"],
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Python Data Science: From Beginner to Professional",
    excerpt: "Learn essential Python libraries and techniques for data analysis and machine learning projects.",
    content: "Full article content here...",
    author: "David Kim",
    authorRole: "Data Science Expert",
    date: "2024-01-10",
    readTime: "15 min read",
    category: "Data Science",
    tags: ["Python", "Data Science", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Database Design Best Practices for Modern Applications",
    excerpt: "Essential principles and patterns for designing scalable and efficient database schemas.",
    content: "Full article content here...",
    author: "Emma Thompson",
    authorRole: "Database Expert",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Database",
    tags: ["SQL", "Database Design", "Backend"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Career Transition: From Bootcamp to Software Engineer",
    excerpt: "Real stories and practical advice from students who successfully transitioned into tech careers.",
    content: "Full article content here...",
    author: "Alex Chen",
    authorRole: "Career Counselor",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Career",
    tags: ["Career", "Success Stories", "Advice"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Modern JavaScript ES2024: New Features You Should Know",
    excerpt: "Discover the latest JavaScript features and how they can improve your development workflow.",
    content: "Full article content here...",
    author: "Sarah Martinez",
    authorRole: "JavaScript Specialist",
    date: "2024-01-03",
    readTime: "7 min read",
    category: "JavaScript",
    tags: ["JavaScript", "ES2024", "Modern Web"],
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
    featured: false
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "AI & Education", label: "AI & Education" },
  { value: "Tutorial", label: "Tutorials" },
  { value: "Data Science", label: "Data Science" },
  { value: "Database", label: "Database" },
  { value: "Career", label: "Career" },
  { value: "JavaScript", label: "JavaScript" }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-blog-title">
            CodeCraft <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-blog-description">
            Insights, tutorials, and stories from the world of programming education. 
            Stay updated with the latest trends and best practices.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-input border-border"
              data-testid="input-search-blog"
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

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8" data-testid="text-featured-posts-title">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-card border border-border rounded-xl overflow-hidden course-card" data-testid={`card-featured-post-${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                    data-testid={`img-featured-post-${post.id}`}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-accent" data-testid={`badge-featured-category-${post.id}`}>
                        {post.category}
                      </Badge>
                      <Badge variant="outline" data-testid="badge-featured">Featured</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3" data-testid={`text-featured-title-${post.id}`}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4" data-testid={`text-featured-excerpt-${post.id}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span data-testid={`text-featured-author-${post.id}`}>{post.author}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span data-testid={`text-featured-date-${post.id}`}>{new Date(post.date).toLocaleDateString()}</span>
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span data-testid={`text-featured-read-time-${post.id}`}>{post.readTime}</span>
                      </span>
                    </div>
                    <Button variant="ghost" className="text-accent hover:text-primary p-0 h-auto" data-testid={`button-read-featured-${post.id}`}>
                      Read Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8" data-testid="text-recent-posts-title">
            Recent Articles
          </h2>
          {regularPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold mb-2" data-testid="text-no-posts-title">
                No articles found
              </h3>
              <p className="text-muted-foreground mb-6" data-testid="text-no-posts-description">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="btn-primary"
                data-testid="button-clear-blog-filters"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-card border border-border rounded-xl overflow-hidden course-card" data-testid={`card-blog-post-${post.id}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    data-testid={`img-blog-post-${post.id}`}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-accent" data-testid={`badge-post-category-${post.id}`}>
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-3" data-testid={`text-post-title-${post.id}`}>
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4" data-testid={`text-post-excerpt-${post.id}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span data-testid={`text-post-author-${post.id}`}>{post.author}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span data-testid={`text-post-read-time-${post.id}`}>{post.readTime}</span>
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs text-accent" data-testid={`text-post-tag-${post.id}-${index}`}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" className="text-accent hover:text-primary p-0 h-auto text-sm" data-testid={`button-read-post-${post.id}`}>
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <div className="bg-secondary/30 rounded-xl p-8 text-center mt-20">
          <h3 className="text-2xl font-bold mb-4" data-testid="text-newsletter-title">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-newsletter-description">
            Subscribe to our newsletter and never miss the latest programming tutorials, industry insights, and educational content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-input border-border"
              data-testid="input-newsletter-email"
            />
            <Button className="btn-primary px-6" data-testid="button-subscribe">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
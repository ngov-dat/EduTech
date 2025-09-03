import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, Star, Tag } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-title">
                Master <span className="gradient-text">Coding</span> Skills for the Future
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-description">
                Learn programming languages from industry experts. Build real projects, get certified, and launch your tech career with confidence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button className="btn-primary px-8 py-4 text-lg h-auto" data-testid="button-start-learning">
                  Start Learning Now
                </Button>
              </Link>
              <Button variant="outline" className="px-8 py-4 text-lg h-auto border-border text-foreground hover:bg-secondary" data-testid="button-watch-demo">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-accent" />
                <span data-testid="text-students-count">50K+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent" />
                <span data-testid="text-rating">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-accent" />
                <span data-testid="text-certification">Industry Certified</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Modern coding workspace with multiple monitors"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="img-hero-workspace"
            />
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse"></span>
                <span>Live Coding Sessions</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/hero-section";
import CourseCard from "@/components/course-card";
import { Laptop, Users, Award } from "lucide-react";
import type { Course } from "@shared/schema";

export default function Home() {
  const { data: courses = [], isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const featuredCourses = courses.slice(0, 3);

  return (
    <div>
      <HeroSection />

      {/* Featured Courses */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-featured-courses-title">
              Featured <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-featured-courses-description">
              Start your coding journey with our most popular programming languages
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 animate-pulse">
                  <div className="w-full h-48 bg-muted rounded-lg mb-6"></div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-3 bg-muted rounded mb-6"></div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-muted rounded w-20"></div>
                    <div className="h-4 bg-muted rounded w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button className="btn-primary px-8 py-4 text-lg h-auto" data-testid="button-view-all-courses">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Laptop className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-interactive-title">
                Interactive Learning
              </h3>
              <p className="text-muted-foreground" data-testid="text-feature-interactive-description">
                Hands-on coding exercises and real-time feedback to accelerate your learning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-mentorship-title">
                Expert Mentorship
              </h3>
              <p className="text-muted-foreground" data-testid="text-feature-mentorship-description">
                Learn from industry professionals with years of real-world experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-feature-certification-title">
                Certification
              </h3>
              <p className="text-muted-foreground" data-testid="text-feature-certification-description">
                Earn recognized certificates to showcase your skills to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2" data-testid="text-stat-students">
                50K+
              </div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-languages">
                15+
              </div>
              <div className="text-muted-foreground">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2" data-testid="text-stat-instructors">
                200+
              </div>
              <div className="text-muted-foreground">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-success">
                95%
              </div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

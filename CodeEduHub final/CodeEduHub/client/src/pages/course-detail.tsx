import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Users, Star, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Course } from "@shared/schema";

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: course, isLoading, error } = useQuery<Course>({
    queryKey: ["/api/courses", slug],
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-accent/20 text-accent";
      case "intermediate":
        return "bg-primary/20 text-primary";
      case "advanced":
        return "bg-orange/20 text-orange";
      default:
        return "bg-muted/20 text-muted-foreground";
    }
  };

  const formatStudents = (count: number) => {
    if (count >= 1000) {
      return `${Math.floor(count / 1000)}K+`;
    }
    return count.toString();
  };

  if (isLoading) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-32 mb-8"></div>
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="h-64 bg-muted rounded-xl"></div>
              <div className="space-y-6">
                <div className="h-6 bg-muted rounded w-24"></div>
                <div className="h-10 bg-muted rounded w-full"></div>
                <div className="h-16 bg-muted rounded w-full"></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-muted rounded"></div>
                  <div className="h-20 bg-muted rounded"></div>
                </div>
                <div className="h-12 bg-muted rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-2" data-testid="text-course-not-found-title">
            Course Not Found
          </h1>
          <p className="text-muted-foreground mb-6" data-testid="text-course-not-found-description">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/courses">
            <Button className="btn-primary" data-testid="button-back-to-courses">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/courses">
            <Button variant="ghost" className="flex items-center text-accent hover:text-primary transition-colors mb-6" data-testid="button-back-to-courses">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img
              src={course.image}
              alt={`${course.title} course preview`}
              className="w-full h-64 object-cover rounded-xl"
              data-testid="img-course-preview"
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <Badge
                  className={cn(
                    "capitalize",
                    getLevelColor(course.level)
                  )}
                  data-testid="badge-course-level"
                >
                  {course.level}
                </Badge>
                <div className="flex items-center text-yellow-500">
                  {[...Array(course.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-muted-foreground" data-testid="text-course-rating">
                    ({course.rating}.0)
                  </span>
                </div>
              </div>
              <h1 className="text-4xl font-bold mb-4" data-testid="text-course-title">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-course-description">
                {course.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="font-medium">Duration</span>
                </div>
                <div className="text-lg font-semibold" data-testid="text-course-duration">
                  {course.duration}
                </div>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="font-medium">Students</span>
                </div>
                <div className="text-lg font-semibold" data-testid="text-course-students">
                  {formatStudents(course.students || 0)}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold text-accent" data-testid="text-course-price">
                {course.price}
              </div>
              <Button className="btn-primary px-8 py-4 text-lg h-auto" data-testid="button-enroll-now">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8" data-testid="text-modules-title">
            Course Modules
          </h2>
          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6" data-testid={`module-${index}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <span className="text-accent font-bold" data-testid={`text-module-number-${index}`}>
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold" data-testid={`text-module-title-${index}`}>
                        {module.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4" data-testid={`text-module-description-${index}`}>
                      {module.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-2">
                        <Play className="w-4 h-4" />
                        <span data-testid={`text-module-lessons-${index}`}>{module.lessons} lessons</span>
                      </span>
                      <span className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span data-testid={`text-module-duration-${index}`}>{module.duration}</span>
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-accent hover:text-primary" data-testid={`button-toggle-module-${index}`}>
                    <CheckCircle className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-secondary/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="text-ready-to-start-title">
            Ready to Start Learning?
          </h3>
          <p className="text-muted-foreground mb-6" data-testid="text-ready-to-start-description">
            Join thousands of students and start your programming journey today.
          </p>
          <Button className="btn-primary px-8 py-4 text-lg h-auto" data-testid="button-enroll-course">
            Enroll in {course.title}
          </Button>
        </div>
      </div>
    </div>
  );
}

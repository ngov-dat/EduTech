import { Link } from "wouter";
import { Clock, Users, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Course } from "@shared/schema";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export default function CourseCard({ course, className }: CourseCardProps) {
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

  return (
    <Link href={`/courses/${course.slug}`}>
      <div
        className={cn(
          "course-card bg-card border border-border rounded-xl p-6 cursor-pointer",
          className
        )}
        data-testid={`card-course-${course.slug}`}
      >
        <img
          src={course.image}
          alt={`${course.title} course preview`}
          className="w-full h-48 object-cover rounded-lg mb-6"
          data-testid={`img-course-${course.slug}`}
        />
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold" data-testid={`text-title-${course.slug}`}>
              {course.title}
            </h3>
          </div>
          <span
            className={cn(
              "px-3 py-1 rounded-full text-sm font-medium capitalize",
              getLevelColor(course.level)
            )}
            data-testid={`text-level-${course.slug}`}
          >
            {course.level}
          </span>
        </div>
        
        <p className="text-muted-foreground mb-6" data-testid={`text-description-${course.slug}`}>
          {course.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span data-testid={`text-duration-${course.slug}`}>{course.duration}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span data-testid={`text-students-${course.slug}`}>{formatStudents(course.students || 0)} students</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground" data-testid={`text-rating-${course.slug}`}>
                {course.rating}.0
              </span>
            </div>
            <div className="text-accent font-semibold" data-testid={`text-price-${course.slug}`}>
              {course.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

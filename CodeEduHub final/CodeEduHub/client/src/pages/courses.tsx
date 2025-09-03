import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/course-card";
import { cn } from "@/lib/utils";
import type { Course } from "@shared/schema";

const levels = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const { data: courses = [], isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-courses-title">
            Choose Your <span className="gradient-text">Programming Journey</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-courses-description">
            Explore our comprehensive collection of programming courses designed to take you from beginner to expert
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 bg-input border-border"
              data-testid="input-search-courses"
            />
          </div>
          <div className="flex gap-2">
            {levels.map((level) => (
              <Button
                key={level.value}
                onClick={() => setSelectedLevel(level.value)}
                variant={selectedLevel === level.value ? "default" : "outline"}
                className={cn(
                  "transition-colors",
                  selectedLevel === level.value
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "border-border bg-card text-foreground hover:bg-secondary"
                )}
                data-testid={`button-filter-${level.value}`}
              >
                {level.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
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
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2" data-testid="text-no-courses-title">
              No courses found
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="text-no-courses-description">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedLevel("all");
              }}
              className="btn-primary"
              data-testid="button-clear-filters"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}

        {/* Results Count */}
        {!isLoading && filteredCourses.length > 0 && (
          <div className="text-center mt-12 text-muted-foreground" data-testid="text-results-count">
            Showing {filteredCourses.length} of {courses.length} courses
          </div>
        )}
      </div>
    </div>
  );
}

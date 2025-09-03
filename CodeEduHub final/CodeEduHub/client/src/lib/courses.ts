export const courseCategories = [
  { value: "all", label: "All Categories" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Development" },
  { value: "data", label: "Data Science" },
  { value: "backend", label: "Backend Development" },
  { value: "frontend", label: "Frontend Development" },
];

export const courseLevels = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export const formatDuration = (hours: number): string => {
  if (hours < 1) {
    return `${Math.round(hours * 60)} minutes`;
  }
  return `${hours} hour${hours !== 1 ? 's' : ''}`;
};

export const formatStudentCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M+`;
  }
  if (count >= 1000) {
    return `${Math.floor(count / 1000)}K+`;
  }
  return count.toString();
};

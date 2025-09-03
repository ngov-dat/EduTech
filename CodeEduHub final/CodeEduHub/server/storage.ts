import { 
  type User, type InsertUser, 
  type Course, type InsertCourse, 
  type Contact, type InsertContact, 
  type BlogPost, type InsertBlogPost,
  type ResearchProject, type InsertResearchProject,
  type StudentProject, type InsertStudentProject,
  type CourseModule 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  getCourseBySlug(slug: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  getResearchProjects(): Promise<ResearchProject[]>;
  getResearchProject(id: string): Promise<ResearchProject | undefined>;
  createResearchProject(project: InsertResearchProject): Promise<ResearchProject>;
  
  getStudentProjects(): Promise<StudentProject[]>;
  getStudentProject(id: string): Promise<StudentProject | undefined>;
  createStudentProject(project: InsertStudentProject): Promise<StudentProject>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private courses: Map<string, Course>;
  private contacts: Map<string, Contact>;
  private blogPosts: Map<string, BlogPost>;
  private researchProjects: Map<string, ResearchProject>;
  private studentProjects: Map<string, StudentProject>;

  constructor() {
    this.users = new Map();
    this.courses = new Map();
    this.contacts = new Map();
    this.blogPosts = new Map();
    this.researchProjects = new Map();
    this.studentProjects = new Map();
    
    // Initialize with sample data
    this.initializeCourses();
    this.initializeBlogPosts();
    this.initializeResearchProjects();
    this.initializeStudentProjects();
  }

  private initializeCourses() {
    const sampleCourses: Course[] = [
      {
        id: randomUUID(),
        title: "Python Programming",
        slug: "python",
        description: "Master Python programming from basics to advanced concepts. Perfect for beginners and aspiring data scientists.",
        level: "beginner",
        duration: "40 hours",
        price: "Free",
        students: 15420,
        rating: 5,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        modules: [
          {
            title: "Python Basics",
            description: "Variables, data types, operators, and control structures",
            lessons: 8,
            duration: "6 hours"
          },
          {
            title: "Data Structures",
            description: "Lists, dictionaries, sets, and tuples in Python",
            lessons: 6,
            duration: "5 hours"
          },
          {
            title: "Object-Oriented Programming",
            description: "Classes, objects, inheritance, and polymorphism",
            lessons: 10,
            duration: "8 hours"
          },
          {
            title: "Web Development with Flask",
            description: "Build web applications using Python Flask framework",
            lessons: 12,
            duration: "10 hours"
          },
          {
            title: "Data Science Fundamentals",
            description: "NumPy, Pandas, and Matplotlib for data analysis",
            lessons: 15,
            duration: "11 hours"
          }
        ]
      },
      {
        id: randomUUID(),
        title: "JavaScript Mastery",
        slug: "javascript",
        description: "Master modern JavaScript, ES6+, and build dynamic web applications with popular frameworks.",
        level: "intermediate",
        duration: "35 hours",
        price: "$49",
        students: 22340,
        rating: 5,
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        modules: [
          {
            title: "Modern JavaScript ES6+",
            description: "Arrow functions, destructuring, modules, and async/await",
            lessons: 10,
            duration: "8 hours"
          },
          {
            title: "DOM Manipulation",
            description: "Interactive web pages and event handling",
            lessons: 8,
            duration: "6 hours"
          },
          {
            title: "Asynchronous JavaScript",
            description: "Promises, async/await, and API integration",
            lessons: 7,
            duration: "5 hours"
          },
          {
            title: "React Fundamentals",
            description: "Components, state, props, and hooks",
            lessons: 12,
            duration: "10 hours"
          },
          {
            title: "Project: Full-Stack App",
            description: "Build a complete web application with React and Node.js",
            lessons: 8,
            duration: "6 hours"
          }
        ]
      },
      {
        id: randomUUID(),
        title: "Java Enterprise",
        slug: "java",
        description: "Enterprise Java development with Spring Framework, microservices, and scalable application architecture.",
        level: "advanced",
        duration: "50 hours",
        price: "$79",
        students: 18520,
        rating: 5,
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        modules: [
          {
            title: "Java Fundamentals Review",
            description: "OOP concepts, collections, and best practices",
            lessons: 6,
            duration: "5 hours"
          },
          {
            title: "Spring Framework",
            description: "Dependency injection, Spring Boot, and REST APIs",
            lessons: 15,
            duration: "12 hours"
          },
          {
            title: "Database Integration",
            description: "JPA, Hibernate, and database design patterns",
            lessons: 10,
            duration: "8 hours"
          },
          {
            title: "Microservices Architecture",
            description: "Service discovery, API gateways, and containerization",
            lessons: 12,
            duration: "10 hours"
          },
          {
            title: "Testing & Deployment",
            description: "Unit testing, integration testing, and CI/CD pipelines",
            lessons: 18,
            duration: "15 hours"
          }
        ]
      },
      {
        id: randomUUID(),
        title: "SQL & Databases",
        slug: "sql",
        description: "Master database design, SQL queries, data modeling, and database administration from ground up.",
        level: "beginner",
        duration: "25 hours",
        price: "$39",
        students: 12840,
        rating: 4,
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        modules: [
          {
            title: "Database Fundamentals",
            description: "Relational databases, tables, and relationships",
            lessons: 5,
            duration: "4 hours"
          },
          {
            title: "SQL Basics",
            description: "SELECT, INSERT, UPDATE, DELETE operations",
            lessons: 8,
            duration: "6 hours"
          },
          {
            title: "Advanced Queries",
            description: "JOINs, subqueries, and complex data retrieval",
            lessons: 10,
            duration: "8 hours"
          },
          {
            title: "Database Design",
            description: "Normalization, indexes, and performance optimization",
            lessons: 7,
            duration: "5 hours"
          },
          {
            title: "Database Administration",
            description: "Backup, security, and maintenance procedures",
            lessons: 5,
            duration: "2 hours"
          }
        ]
      },
      {
        id: randomUUID(),
        title: "C++ Programming",
        slug: "cpp",
        description: "Systems programming, memory management, algorithms, and performance optimization with modern C++.",
        level: "advanced",
        duration: "60 hours",
        price: "$89",
        students: 8940,
        rating: 5,
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        modules: [
          {
            title: "C++ Fundamentals",
            description: "Syntax, variables, functions, and basic I/O",
            lessons: 8,
            duration: "6 hours"
          },
          {
            title: "Object-Oriented Programming",
            description: "Classes, inheritance, polymorphism, and encapsulation",
            lessons: 12,
            duration: "10 hours"
          },
          {
            title: "Memory Management",
            description: "Pointers, references, smart pointers, and RAII",
            lessons: 15,
            duration: "12 hours"
          },
          {
            title: "STL and Algorithms",
            description: "Standard Template Library and algorithm design",
            lessons: 18,
            duration: "15 hours"
          },
          {
            title: "Advanced Topics",
            description: "Templates, multithreading, and performance optimization",
            lessons: 20,
            duration: "17 hours"
          }
        ]
      },
      {
        id: randomUUID(),
        title: "React Development",
        slug: "react",
        description: "Build modern web applications with React, hooks, state management, and popular ecosystem tools.",
        level: "intermediate",
        duration: "30 hours",
        price: "$59",
        students: 25670,
        rating: 5,
        image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        modules: [
          {
            title: "React Fundamentals",
            description: "Components, JSX, props, and state",
            lessons: 8,
            duration: "6 hours"
          },
          {
            title: "React Hooks",
            description: "useState, useEffect, custom hooks, and context",
            lessons: 10,
            duration: "8 hours"
          },
          {
            title: "State Management",
            description: "Redux, Context API, and state patterns",
            lessons: 8,
            duration: "6 hours"
          },
          {
            title: "Routing and Navigation",
            description: "React Router and single-page application patterns",
            lessons: 6,
            duration: "4 hours"
          },
          {
            title: "Testing and Deployment",
            description: "Jest, React Testing Library, and production deployment",
            lessons: 8,
            duration: "6 hours"
          }
        ]
      }
    ];

    sampleCourses.forEach(course => {
      this.courses.set(course.id, course);
    });
  }

  private initializeBlogPosts() {
    const sampleBlogPosts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "The Future of AI in Programming Education",
        slug: "future-ai-programming-education",
        excerpt: "Exploring how artificial intelligence is revolutionizing the way we teach and learn programming concepts.",
        content: "Full article content here...",
        author: "Alex Chen",
        authorRole: "Python Expert",
        category: "AI & Education",
        tags: ["AI", "Education", "Programming"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        featured: 1,
        readTime: "8 min read",
        publishedAt: "2024-01-15"
      },
      {
        id: randomUUID(),
        title: "Building Your First React Application: A Complete Guide",
        slug: "building-first-react-application",
        excerpt: "Step-by-step tutorial for beginners to create their first React application with modern best practices.",
        content: "Full article content here...",
        author: "Sarah Martinez",
        authorRole: "JavaScript Specialist",
        category: "Tutorial",
        tags: ["React", "JavaScript", "Tutorial"],
        image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        featured: 1,
        readTime: "12 min read",
        publishedAt: "2024-01-12"
      },
      {
        id: randomUUID(),
        title: "Python Data Science: From Beginner to Professional",
        slug: "python-data-science-beginner-professional",
        excerpt: "Learn essential Python libraries and techniques for data analysis and machine learning projects.",
        content: "Full article content here...",
        author: "David Kim",
        authorRole: "Data Science Expert",
        category: "Data Science",
        tags: ["Python", "Data Science", "Machine Learning"],
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        featured: 0,
        readTime: "15 min read",
        publishedAt: "2024-01-10"
      }
    ];

    sampleBlogPosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  private initializeResearchProjects() {
    const sampleResearchProjects: ResearchProject[] = [
      {
        id: randomUUID(),
        title: "AI-Powered Code Analysis",
        description: "Developing machine learning models to automatically detect code vulnerabilities and suggest optimizations.",
        status: "Active",
        category: "Machine Learning",
        partners: ["Stanford University", "Google Research"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
        duration: "2023-2025",
        createdAt: "2023-01-15"
      },
      {
        id: randomUUID(),
        title: "Blockchain Education Platform",
        description: "Building a decentralized learning platform for cryptocurrency and blockchain development education.",
        status: "Active",
        category: "Blockchain",
        partners: ["MIT", "Ethereum Foundation"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
        duration: "2024-2026",
        createdAt: "2024-01-10"
      },
      {
        id: randomUUID(),
        title: "Inclusive Programming Education",
        description: "Research on accessibility and inclusive design in programming education for underrepresented communities.",
        status: "Recruiting",
        category: "Education Research",
        partners: ["Carnegie Mellon", "Code.org"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80",
        duration: "2024-2025",
        createdAt: "2024-01-05"
      }
    ];

    sampleResearchProjects.forEach(project => {
      this.researchProjects.set(project.id, project);
    });
  }

  private initializeStudentProjects() {
    const sampleStudentProjects: StudentProject[] = [
      {
        id: randomUUID(),
        title: "EcoTrack - Sustainability Dashboard",
        description: "A comprehensive web application that helps users track their carbon footprint and suggest eco-friendly alternatives.",
        student: "Maria Rodriguez",
        course: "Full-Stack JavaScript",
        category: "Web Development",
        technologies: ["React", "Node.js", "MongoDB", "D3.js"],
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        githubUrl: "#",
        liveUrl: "#",
        stars: 124,
        views: 2340,
        featured: 1,
        completedAt: "2024-01-15"
      },
      {
        id: randomUUID(),
        title: "AI-Powered Code Reviewer",
        description: "Machine learning tool that analyzes code quality, suggests improvements, and detects potential security vulnerabilities.",
        student: "James Park",
        course: "Python Data Science",
        category: "Machine Learning",
        technologies: ["Python", "TensorFlow", "Flask", "Docker"],
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        githubUrl: "#",
        liveUrl: "#",
        stars: 89,
        views: 1850,
        featured: 1,
        completedAt: "2024-01-12"
      },
      {
        id: randomUUID(),
        title: "CryptoPortfolio Tracker",
        description: "Real-time cryptocurrency portfolio management app with advanced analytics and price prediction features.",
        student: "Sarah Chen",
        course: "React Development",
        category: "Blockchain",
        technologies: ["React", "TypeScript", "Chart.js", "Web3"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
        githubUrl: "#",
        liveUrl: "#",
        stars: 156,
        views: 3200,
        featured: 1,
        completedAt: "2024-01-10"
      }
    ];

    sampleStudentProjects.forEach(project => {
      this.studentProjects.set(project.id, project);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCourses(): Promise<Course[]> {
    return Array.from(this.courses.values());
  }

  async getCourse(id: string): Promise<Course | undefined> {
    return this.courses.get(id);
  }

  async getCourseBySlug(slug: string): Promise<Course | undefined> {
    return Array.from(this.courses.values()).find(
      (course) => course.slug === slug,
    );
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const id = randomUUID();
    const course: Course = { 
      ...insertCourse, 
      id,
      students: insertCourse.students ?? 0,
      rating: insertCourse.rating ?? 5
    };
    this.courses.set(id, course);
    return course;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date().toISOString() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  // Blog Posts
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const newPost: BlogPost = {
      ...post,
      id: randomUUID(),
      publishedAt: new Date().toISOString(),
    };
    this.blogPosts.set(newPost.id, newPost);
    return newPost;
  }

  // Research Projects
  async getResearchProjects(): Promise<ResearchProject[]> {
    return Array.from(this.researchProjects.values());
  }

  async getResearchProject(id: string): Promise<ResearchProject | undefined> {
    return this.researchProjects.get(id);
  }

  async createResearchProject(project: InsertResearchProject): Promise<ResearchProject> {
    const newProject: ResearchProject = {
      ...project,
      id: randomUUID(),
      createdAt: new Date().toISOString(),
    };
    this.researchProjects.set(newProject.id, newProject);
    return newProject;
  }

  // Student Projects
  async getStudentProjects(): Promise<StudentProject[]> {
    return Array.from(this.studentProjects.values());
  }

  async getStudentProject(id: string): Promise<StudentProject | undefined> {
    return this.studentProjects.get(id);
  }

  async createStudentProject(project: InsertStudentProject): Promise<StudentProject> {
    const newProject: StudentProject = {
      ...project,
      id: randomUUID(),
      completedAt: new Date().toISOString(),
    };
    this.studentProjects.set(newProject.id, newProject);
    return newProject;
  }
}

export const storage = new MemStorage();

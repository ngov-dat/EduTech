import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactSchema, 
  insertBlogPostSchema, 
  insertResearchProjectSchema, 
  insertStudentProjectSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all courses
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  // Get course by slug
  app.get("/api/courses/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const course = await storage.getCourseBySlug(slug);
      
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      res.json(course);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  // Blog Posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Research Projects
  app.get("/api/research", async (req, res) => {
    try {
      const projects = await storage.getResearchProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch research projects" });
    }
  });

  app.get("/api/research/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const project = await storage.getResearchProject(id);
      
      if (!project) {
        return res.status(404).json({ message: "Research project not found" });
      }
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch research project" });
    }
  });

  // Student Projects
  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await storage.getStudentProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch student projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const project = await storage.getStudentProject(id);
      
      if (!project) {
        return res.status(404).json({ message: "Student project not found" });
      }
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch student project" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

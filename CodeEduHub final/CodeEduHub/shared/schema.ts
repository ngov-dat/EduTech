import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const courses = pgTable("courses", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  level: text("level").notNull(), // beginner, intermediate, advanced
  duration: text("duration").notNull(),
  price: text("price").notNull(),
  students: integer("students").notNull().default(0),
  rating: integer("rating").notNull().default(5),
  image: text("image").notNull(),
  modules: json("modules").$type<CourseModule[]>().notNull(),
});

export const contact = pgTable("contact", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  authorRole: text("author_role").notNull(),
  category: text("category").notNull(),
  tags: json("tags").$type<string[]>().notNull(),
  image: text("image").notNull(),
  featured: integer("featured").default(0),
  readTime: text("read_time").notNull(),
  publishedAt: text("published_at").default(sql`CURRENT_TIMESTAMP`),
});

export const researchProjects = pgTable("research_projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(),
  category: text("category").notNull(),
  partners: json("partners").$type<string[]>().notNull(),
  image: text("image").notNull(),
  duration: text("duration").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const studentProjects = pgTable("student_projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  student: text("student").notNull(),
  course: text("course").notNull(),
  category: text("category").notNull(),
  technologies: json("technologies").$type<string[]>().notNull(),
  image: text("image").notNull(),
  githubUrl: text("github_url"),
  liveUrl: text("live_url"),
  stars: integer("stars").default(0),
  views: integer("views").default(0),
  featured: integer("featured").default(0),
  completedAt: text("completed_at").default(sql`CURRENT_TIMESTAMP`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertCourseSchema = createInsertSchema(courses).omit({
  id: true,
});

export const insertContactSchema = createInsertSchema(contact).omit({
  id: true,
  createdAt: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  publishedAt: true,
});

export const insertResearchProjectSchema = createInsertSchema(researchProjects).omit({
  id: true,
  createdAt: true,
});

export const insertStudentProjectSchema = createInsertSchema(studentProjects).omit({
  id: true,
  completedAt: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Course = typeof courses.$inferSelect;
export type InsertCourse = z.infer<typeof insertCourseSchema>;
export type Contact = typeof contact.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type ResearchProject = typeof researchProjects.$inferSelect;
export type InsertResearchProject = z.infer<typeof insertResearchProjectSchema>;
export type StudentProject = typeof studentProjects.$inferSelect;
export type InsertStudentProject = z.infer<typeof insertStudentProjectSchema>;

export interface CourseModule {
  title: string;
  description: string;
  lessons: number;
  duration: string;
}

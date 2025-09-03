# CodeCraft Academy

## Overview

CodeCraft Academy is a comprehensive online programming education platform that provides coding courses, educational content, and community engagement for developers at all skill levels. The platform features a complete learning ecosystem including course catalog, blog articles, research collaboration opportunities, and student project showcases. Built with a full-stack architecture, it combines a React frontend with an Express.js backend, utilizing in-memory storage for development and focusing on delivering a smooth, responsive user experience for programming education and community engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **State Management**: TanStack Query (React Query) for server state management, caching, and data synchronization
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable design system
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for API development
- **Data Layer**: In-memory storage implementation with interface-based design for easy database swapping
- **API Design**: RESTful endpoints following standard HTTP conventions
- **Middleware**: Custom logging, JSON parsing, and error handling middleware
- **Development**: Hot reload and development server integration with Vite

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Database**: PostgreSQL with Neon serverless configuration
- **Schema**: Structured tables for users, courses (with JSON module data), and contact submissions
- **Migrations**: Drizzle Kit for database schema versioning and deployment

### Data Models
- **Users**: Basic authentication structure with username/password
- **Courses**: Rich course data including metadata, pricing, difficulty levels, and modular content structure
- **Contact**: Form submissions for user inquiries and support requests
- **Course Modules**: Nested JSON structure within courses for lesson organization
- **Blog Posts**: Educational articles with categories, tags, authorship, and publishing metadata
- **Research Projects**: Academic and industry collaboration projects with partners, status tracking, and duration
- **Student Projects**: Portfolio showcase with project details, technologies used, GitHub links, and engagement metrics

### Development Workflow
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Code Quality**: ESLint configuration and consistent coding standards
- **Development Server**: Integrated Vite dev server with Express API proxy
- **Asset Management**: Optimized image handling and static asset serving

### Authentication & Security
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **CORS**: Configured for development and production environments
- **Input Validation**: Zod schemas for request validation and type safety

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Connect-pg-simple**: PostgreSQL session store for user session management

### UI and Styling
- **Radix UI**: Headless, accessible component primitives for building the design system
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Modern icon library for consistent iconography
- **React Icons**: Extended icon collection including social media icons

### Development Tools
- **Vite**: Build tool and development server with React plugin support
- **TypeScript**: Static type checking across the entire application stack
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **ESBuild**: Fast JavaScript bundling for production builds

### Form and Data Management
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation for forms and API requests
- **Drizzle Zod**: Integration between Drizzle ORM and Zod for schema consistency

### Fonts and Assets
- **Google Fonts**: Inter font family for modern, readable typography
- **Unsplash**: Stock photography service for course images and educational content

### Deployment and Hosting
- **Replit**: Development environment with integrated deployment capabilities
- **Runtime Error Overlay**: Development debugging tools for better error visibility

## Recent Changes (September 2025)

### Enhanced Platform Features
- **Research & Collaboration**: Added comprehensive research projects showcase featuring academic partnerships, collaboration opportunities, industry partnerships, and research impact metrics with active project tracking
- **Educational Blog**: Integrated full-featured blog section with searchable articles, category filtering, author attribution, featured posts, and newsletter subscription functionality
- **Student Projects**: Created extensive portfolio showcase featuring student work with technology stacks, live demos, GitHub integration, star ratings, view counts, and project categorization
- **Enhanced Navigation**: Updated site structure with dedicated community sections including Projects, Blog, and Research pages with improved footer organization and user experience
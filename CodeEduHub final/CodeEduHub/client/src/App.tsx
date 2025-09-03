import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Courses from "./pages/courses";
import Projects from "./pages/projects";
import Blog from "./pages/blog";
import Research from "./pages/research";
import Contact from "./pages/contact";
import CourseDetail from "./pages/course-detail";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={Courses} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/research" component={Research} />
          <Route path="/contact" component={Contact} />
          <Route path="/courses/:slug" component={CourseDetail} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

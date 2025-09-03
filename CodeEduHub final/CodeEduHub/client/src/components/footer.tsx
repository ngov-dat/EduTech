import { Link } from "wouter";
import { Code } from "lucide-react";
import { SiX, SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-background" />
              </div>
              <span className="text-xl font-bold">CodeCraft Academy</span>
            </div>
            <p className="text-muted-foreground">
              Empowering the next generation of developers through comprehensive, hands-on programming education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-social-twitter">
                <SiX className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-social-linkedin">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-social-github">
                <SiGithub className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" data-testid="link-social-youtube">
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Courses</h3>
            <div className="space-y-2">
              <Link href="/courses" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-python">
                Python
              </Link>
              <Link href="/courses" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-javascript">
                JavaScript
              </Link>
              <Link href="/courses" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-java">
                Java
              </Link>
              <Link href="/courses" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-sql">
                SQL
              </Link>
              <Link href="/courses" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-cpp">
                C++
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <div className="space-y-2">
              <Link href="/projects" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-projects">
                Student Projects
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-blog">
                Blog
              </Link>
              <Link href="/research" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-research">
                Research
              </Link>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-community">
                Community
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-about">
                About Us
              </Link>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-careers">
                Careers
              </a>
              <Link href="/contact" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-contact">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-help">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-community">
                Community
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-accent transition-colors" data-testid="link-cookies">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CodeCraft Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

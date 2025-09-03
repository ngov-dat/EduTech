import { Target, Eye, GraduationCap, Laptop, Users as UsersIcon, Award } from "lucide-react";
import { SiLinkedin, SiGithub, SiX } from "react-icons/si";

const instructors = [
  {
    name: "Alex Chen",
    role: "Python Expert",
    bio: "Former Google Engineer with 8+ years experience in backend development and machine learning.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80&face=center",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Sarah Martinez",
    role: "JavaScript Specialist",
    bio: "Senior Frontend Developer at Meta with expertise in React and modern web technologies.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80&face=center",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "David Kim",
    role: "Java Architect",
    bio: "Lead Software Architect at Amazon with 10+ years building enterprise Java applications.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80&face=center",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Emma Thompson",
    role: "Database Expert",
    bio: "Senior Data Engineer at Microsoft specializing in SQL, databases, and data analytics.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80&face=center",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
            About <span className="gradient-text">CodeCraft Academy</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-about-description">
            We're on a mission to make programming education accessible, engaging, and effective for everyone. 
            Join millions of learners building the future through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-accent" data-testid="text-mission-title">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-mission-description">
                To democratize programming education by providing high-quality, practical courses that 
                prepare students for real-world careers in technology. We believe everyone deserves access 
                to the tools and knowledge needed to succeed in the digital economy.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary" data-testid="text-vision-title">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-vision-description">
                A world where anyone, anywhere can learn to code and build the technologies that shape our future. 
                We envision a global community of empowered developers creating solutions to tomorrow's challenges.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Diverse group of students learning coding in modern classroom"
              className="rounded-2xl shadow-xl w-full"
              data-testid="img-about-classroom"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-value-mission-title">
              Our Mission
            </h3>
            <p className="text-muted-foreground" data-testid="text-value-mission-description">
              To provide accessible, high-quality programming education that bridges the gap between 
              learning and real-world application.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-value-vision-title">
              Our Vision
            </h3>
            <p className="text-muted-foreground" data-testid="text-value-vision-description">
              A world where anyone, regardless of background, can learn to code and build 
              solutions that make a positive impact.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-value-teaching-title">
              Teaching Style
            </h3>
            <p className="text-muted-foreground" data-testid="text-value-teaching-description">
              Hands-on, project-based learning with personalized feedback and real-world 
              applications that prepare you for your career.
            </p>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-philosophy-title">
              Our Teaching Philosophy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-philosophy-description">
              We believe in learning by doing. Our hands-on approach combines theory with practice to ensure lasting knowledge.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Laptop className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold" data-testid="text-approach-hands-on-title">
                Hands-On Projects
              </h3>
              <p className="text-muted-foreground" data-testid="text-approach-hands-on-description">
                Build real applications while learning. Every concept is reinforced through practical coding exercises.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <UsersIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold" data-testid="text-approach-peer-title">
                Peer Learning
              </h3>
              <p className="text-muted-foreground" data-testid="text-approach-peer-description">
                Connect with fellow learners, collaborate on projects, and grow together in our supportive community.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold" data-testid="text-approach-mentorship-title">
                Industry Mentorship
              </h3>
              <p className="text-muted-foreground" data-testid="text-approach-mentorship-description">
                Learn from experienced developers currently working at top tech companies worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-team-title">
            Meet Our Expert Instructors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-description">
            Our world-class team of instructors brings years of industry experience and passion for teaching to every course.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 text-center course-card">
              <img
                src={instructor.image}
                alt={`Professional headshot of ${instructor.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                data-testid={`img-instructor-${index}`}
              />
              <h3 className="text-xl font-semibold mb-2" data-testid={`text-instructor-name-${index}`}>
                {instructor.name}
              </h3>
              <p className="text-accent font-medium mb-2" data-testid={`text-instructor-role-${index}`}>
                {instructor.role}
              </p>
              <p className="text-sm text-muted-foreground mb-4" data-testid={`text-instructor-bio-${index}`}>
                {instructor.bio}
              </p>
              <div className="flex justify-center space-x-3">
                <a href={instructor.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-instructor-linkedin-${index}`}>
                  <SiLinkedin className="w-4 h-4" />
                </a>
                <a href={instructor.social.github} className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-instructor-github-${index}`}>
                  <SiGithub className="w-4 h-4" />
                </a>
                <a href={instructor.social.twitter} className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-instructor-twitter-${index}`}>
                  <SiX className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

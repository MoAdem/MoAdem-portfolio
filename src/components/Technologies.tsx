
import { useEffect, useRef } from 'react';
import { 
  Code, 
  FileText, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Github,
  Star
} from 'lucide-react';

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  technologies: string[];
}

const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    icon: <Code className="h-10 w-10 text-purple" />,
    technologies: ["React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "SASS"]
  },
  {
    name: "Backend",
    icon: <Server className="h-10 w-10 text-purple" />,
    technologies: ["Node.js", "Express", "Django", "PHP", "Java", "Spring Boot"]
  },
  {
    name: "Mobile",
    icon: <Smartphone className="h-10 w-10 text-purple" />,
    technologies: ["React Native", "Flutter", "SwiftUI", "Kotlin", "Android SDK", "iOS Development"]
  },
  {
    name: "Database",
    icon: <Database className="h-10 w-10 text-purple" />,
    technologies: ["PostgreSQL","MongoDB", "MySQL", "Firebase"]
  },
  {
    name: "DevOps",
    icon: <Github className="h-10 w-10 text-purple" />,
    technologies: ["Git", "GitHub", "Docker", "Azure"]
  },
  {
    name: "Other",
    icon: <Star className="h-10 w-10 text-purple" />,
    technologies: ["RESTful APIs", "WebSockets", "Testing (Jest, Cypress)", "UI/UX Design", "Figma", "Responsive Design"]
  }
];

const Technologies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="technologies" className="section bg-black relative">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple/10 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
            Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <div 
                key={category.name}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple/50 transition-colors"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

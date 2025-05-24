
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  hasVideo?: boolean;
  videoId?: string;
  demoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    description: "A fully functional e-commerce application built with React Native, featuring product listings, cart functionality, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "A comprehensive task management system with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "Socket.IO"],
    hasVideo: true,
    videoId: "dQw4w9WgXcQ", // YouTube video ID
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Healthcare Monitoring Web App",
    description: "A responsive web application that allows healthcare providers to monitor patient vitals remotely, with data visualization and alert systems.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    technologies: ["Angular", "Chart.js", "Express", "PostgreSQL", "AWS"],
    demoLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
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
    <section id="projects" className="section bg-black relative">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 gap-12 mb-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} h-full`}>
                    <div className="w-full md:w-1/2 h-64 md:h-auto">
                      <div className="h-full relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {project.hasVideo && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <Button 
                              className="bg-purple hover:bg-purple-dark rounded-full p-4"
                              onClick={() => {
                                console.log(`Open video for ${project.title}`);
                                // In a real app, you'd show a modal with the video here
                              }}
                            >
                              <Play className="h-8 w-8" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm uppercase text-gray-400 mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech} 
                                className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-4">
                        {project.demoLink && (
                          <Button 
                            variant="outline" 
                            className="border border-purple text-purple hover:bg-purple hover:text-white"
                            asChild
                          >
                            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubLink && (
                          <Button 
                            variant="outline" 
                            className="border border-gray-700 text-white hover:bg-gray-800"
                            asChild
                          >
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

// Define experience type
interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "Tech Solutions Inc.",
    period: "Jun 2023 - Sep 2023",
    description: [
      "Developed responsive user interfaces using React and Tailwind CSS.",
      "Collaborated with design team to implement pixel-perfect designs.",
      "Optimized application performance, reducing load times by 40%.",
      "Participated in code reviews and contributed to team's development standards."
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git", "Figma"]
  },
  {
    id: 2,
    role: "Mobile App Developer Intern",
    company: "MobileFirst Apps",
    period: "Jan 2023 - Apr 2023",
    description: [
      "Built cross-platform mobile applications using React Native.",
      "Implemented state management using Redux and context API.",
      "Integrated third-party APIs and libraries for enhanced functionality.",
      "Created reusable component library to improve development efficiency."
    ],
    technologies: ["React Native", "TypeScript", "Redux", "RESTful APIs", "Jest"]
  }
];

const Experience = () => {
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
    <section id="experience" className="section bg-black relative">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
            Experience
          </h2>
          
          <div className="grid grid-cols-1 gap-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-16 flex items-start justify-center">
                      <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-purple" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.role}</h3>
                          <p className="text-purple">{exp.company}</p>
                        </div>
                        <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                      </div>
                      
                      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                        {exp.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      
                      <div>
                        <h4 className="text-sm uppercase text-gray-400 mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
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

export default Experience;

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

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
    role: "Full Stack Developer",
    company: "Farness",
    period: "February 2025 - Present",
    description: [
      "Developed and maintained the company’s full stack platform using modern web technologies.",
      "Designed and optimized database schemas to ensure performance, scalability, and data integrity.",
      "Collaborated with AI and embedded software teams to integrate backend systems with machine learning models and hardware components.",
      "Participated in code reviews and contributed to team's development standards.",
    ],
    technologies: [
      "React",
      "Next.js",
      " Node.js",
      "PostgreSQL",
      "OAuth 2.0",
      "Git",
      " REST APIs",
      "Azure",
      "WebSockets",
      "Docker",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer Intern",
    company: "IPACT Consult inc",
    period: "June 2024 - September 2024",
    description: [
      "Built a comprehensive mobile application to streamline restaurant and franchise operations, enabling real-time management of menus, staff, and orders.",
      "Improved operational efficiency by digitizing key workflows, reducing manual processes, and enhancing day-to-day organization for restaurant managers.",
    ],
    technologies: ["React Native", " Node.js", "MongoDB", "Git"],
  },
  {
    id: 3,
    role: "Front-end Developer Intern",
    company: "CleverTech",
    period: "February 2022 – July 2022",
    description: [
      "Engineered responsive and user-friendly front-end components for a cloud-based file storage platform, enabling seamless file upload, synchronization, and cross-device sharing.",
      "Improved platform usability and performance by implementing intuitive UI components, refining workflows, and optimizing front-end architecture based on user feedback and usage patterns.",
    ],
    technologies: ["React", " Node.js", "MongoDB", "Git"],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
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
        <div ref={sectionRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
            Experience
          </h2>

          <div className="grid grid-cols-1 gap-8">
            {experiences.map((exp) => (
              <Card
                key={exp.id}
                className="bg-gray-900 border-gray-800 overflow-hidden"
              >
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
                          <h3 className="text-xl md:text-2xl font-semibold text-white">
                            {exp.role}
                          </h3>
                          <p className="text-purple">{exp.company}</p>
                        </div>
                        <p className="text-gray-400 mt-2 md:mt-0">
                          {exp.period}
                        </p>
                      </div>

                      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                        {exp.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>

                      <div>
                        <h4 className="text-sm uppercase text-gray-400 mb-2">
                          Technologies Used
                        </h4>
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

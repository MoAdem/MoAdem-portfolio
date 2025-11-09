import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  hasVideo?: boolean;
  video?: string; // Path to local video file
  videoId?: string;
  demoLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SoulLift",
    description:
      "A mental well-being mobile app featuring a chatbot, personalized avatar, daily motivation, and voice/emotion recognition.",
    image:
      "https://plus.unsplash.com/premium_photo-1669560674802-dc9c382137de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVudGFsJTIwaGVhbHRoJTIwYXBwfGVufDB8fDB8fHww",
    video: "/videos/soul.mp4",
    hasVideo: true,
    technologies: ["Flutter", "Node.js", "MongoDB", "Express.js", "Python"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "RecycleConnect",
    description:
      "A platform (web and desktop) for exchanging physical goods and services between users.",
    image:
      "https://plus.unsplash.com/premium_photo-1682309652843-ed4eb60d473e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmVjeWNsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    technologies: [
      "Kotlin",
      "Android",
      "Swift",
      "SwiftUI",
      "Node.js",
      "MongoDB",
    ],
    videoId: "dQw4w9WgXcQ", // YouTube video ID
    demoLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Treydi",
    description:
      "A platform (web and desktop) for exchanging physical goods and services between users.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    technologies: [
      "Kotlin",
      "Android Studio",
      "Swift",
      "SwiftUI",
      "Node.js",
      "MongoDB",
    ],
    demoLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="projects" className="section bg-black relative">
      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-12 mb-16">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-gray-900 border-gray-800 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } h-full`}
                  >
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                      {project.hasVideo &&
                      project.video &&
                      playingVideoId === project.id ? (
                        <video
                          src={project.video}
                          controls
                          autoPlay
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                          {project.hasVideo && project.video && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                              <Button
                                className="bg-purple hover:bg-purple-dark rounded-full p-4"
                                onClick={() => setPlayingVideoId(project.id)}
                              >
                                <Play className="h-8 w-8" />
                              </Button>
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {project.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-sm uppercase text-gray-400 mb-2">
                            Technologies
                          </h4>
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
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubLink && (
                          <Button
                            variant="outline"
                            className="border border-gray-700 text-purple hover:bg-gray-800  hover:text-white"
                            asChild
                          >
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
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

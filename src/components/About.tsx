
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
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
      { threshold: 0.2 }
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
    <section id="about" className="section bg-black relative">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="opacity-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 heading-gradient">
            About Me
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-gradient-to-br from-purple to-purple-dark p-1 rounded-lg shadow-lg">
                <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFeX48X7iNAQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719014805762?e=1753315200&v=beta&t=y1gwg_9pLnD3Q4o0dztyVgMa2tFyv4hse3OR0M7i0Wk" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <Button 
                  className="bg-purple hover:bg-purple-dark text-white px-6 py-2 purple-glow transition-all duration-300 hover:shadow-lg hover:shadow-purple/50"
                  asChild
                >
                  
                  <a  href="/Mohamed Adem Torkhan Resume.pdf" 
                  download="Mohamed Adem Torkhan Resume.pdf" className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-300 mb-4">
                I am a passionate software engineering student specializing in web and mobile development.
                With a strong foundation in modern technologies and programming languages, 
                I create responsive and user-friendly applications.
              </p>
              
              <p className="text-lg text-gray-300 mb-4">
                My journey in software development started with a curiosity about how digital 
                products are built, which evolved into a deep passion for creating intuitive 
                and efficient solutions.
              </p>
              
              <p className="text-lg text-gray-300">
                I'm constantly learning and exploring new technologies to stay at the 
                forefront of innovation in the field of software engineering, with recent 
                interests in AI and its applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

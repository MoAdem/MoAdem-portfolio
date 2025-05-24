
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-16 bg-black relative overflow-hidden"
    >
      {/* Purple gradient blob - made larger and more vibrant */}
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-purple/30 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-purple/30 rounded-full blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-3xl mb-2 opacity-0 animate-fade-in">
            Hello, I'm Adem a
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient opacity-0 animate-fade-in animation-delay-200">
            Software Engineer
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 opacity-0 animate-fade-in animation-delay-300">
            Specializing in Web & Mobile Development
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-400">
            <Button 
              className="bg-purple hover:bg-purple-dark text-white px-8 py-6 purple-glow"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-purple text-purple hover:bg-purple hover:text-white px-8 py-6"
              asChild
            >
              {/* add pdf resume */}
              <a href="/Mohamed Adem Torkhani resume.pdf" download="resume.pdf" className="flex items-center"> 
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-purple">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

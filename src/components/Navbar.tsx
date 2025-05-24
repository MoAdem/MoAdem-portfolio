
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-white">
          <span className="text-purple font-bold">MoAdem</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['About', 'Experience', 'Projects', 'Technologies', 'Testimonials', 'Blog'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center space-x-2">
            <a 
              href="https://github.com/MoAdem" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-adem-torkhani/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
           <a 
              href="mailto:torkhani.mohamed.adem@gmail.com"
              className="text-gray-300 hover:text-purple transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
         
            <a 
              href="/Mohamed Adem Torkhan Resume.pdf" 
              download="Mohamed Adem Torkhan Resume.pdf"
              className="text-gray-300 hover:text-purple transition-colors"
              aria-label="Download Resume"
            >
              <Download className="h-5 w-5" />
            </a>
          </div>

          <Button 
            variant="outline" 
            className="border-2 border-purple text-purple hover:bg-purple hover:text-white transition-colors purple-glow"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

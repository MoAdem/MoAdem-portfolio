
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold text-white">
              <span className="text-purple">MoAdem</span>
            </p>
            <p className="mt-2">Software Engineer • Web & Mobile Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:example@email.com" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <hr className="my-8 border-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} All Rights Reserved.</p>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-purple">About</a></li>
              <li><a href="#projects" className="hover:text-purple">Projects</a></li>
              <li><a href="#experience" className="hover:text-purple">Experience</a></li>
              <li><a href="#technologies" className="hover:text-purple">Technologies</a></li>
              <li><a href="#blog" className="hover:text-purple">Blog</a></li>
              <li><a href="#contact" className="hover:text-purple">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

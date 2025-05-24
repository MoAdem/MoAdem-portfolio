
import { useEffect, useRef, useState } from 'react';
import { Section } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<any>(null);
  
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

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  const testimonials = [
    {
      quote: "I couldn’t be happier with the website he built for me. As a small business owner, having a professional and easy-to-use platform to showcase and sell my products made a huge difference. He understood exactly what I needed, offered smart solutions, and delivered everything on time. My sales have already improved thanks to the online store. Highly recommend!",
      author: "Amira Trabelsi",
      position: "Client"
    },
    {
      quote: "Adem is an exceptional teammate. His competence and brilliant intellect shine through in every task. Beyond that, his amiable nature makes working with him not just productive but also thoroughly enjoyable.",
      author: "Oussama Bourigua",
      position: "Mobile Developer"
    },
    {
      quote: "An exceptional Android Developer, Adem shines with his expertise in coding with Kotlin and Java, his knack for using Android Jetpack tools to build reliable apps, and his skill in making apps run smoothly by managing memory and threads effectively.",
      author: "Moez Ben Hassen",
      position: "Web Developer"
    },
    {
      quote: "A standout engineer, Adem demonstrates unique critical thinking and amazing prowess at problem-solving. His ability to approach challenges with a thoughtful and inventive mindset sets him apart.",
      author: "Ahmed Chennaoui",
      position: "Backend Engineer"
    },

  ];
  
  return (
    <section id="testimonials" className="section bg-black relative">
      {/* Purple gradient blob */}
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-purple/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="opacity-0"
        >
          <div className="flex items-center gap-3 mb-2">
            <Section className="h-6 w-6 text-purple" />
            <h2 className="text-3xl md:text-4xl font-bold heading-gradient">
              Word on the Street About Me
            </h2>
          </div>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl">
            Here's what colleagues and clients have to say about my work and collaboration style.
          </p>
          
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <Card className="bg-gray-900/50 border-purple/20 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-purple/20 transition-all duration-300 h-full">
                    <CardContent className="p-6 relative h-full">
                      {/* Large quote mark */}
                      <div className="absolute top-3 left-4 text-6xl text-purple/10 font-serif">"</div>
                      
                      <p className="text-gray-200 mb-4 italic relative z-10">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="mt-4">
                        <p className="text-purple font-semibold">{testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="absolute left-0 bg-purple/10 border-purple/30 text-white hover:bg-purple/30" />
              <CarouselNext className="absolute right-0 bg-purple/10 border-purple/30 text-white hover:bg-purple/30" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

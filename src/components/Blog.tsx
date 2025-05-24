
import { BookOpenText, Code, Microchip, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Sample blog post data with web and mobile development focus
const blogPosts = [
  {
    id: 1,
    title: 'Building Responsive Web Applications',
    excerpt: 'How to create websites that work seamlessly across all devices using modern CSS techniques.',
    date: 'May 18, 2025',
    category: 'Web Dev',
    readTime: '5 min read',
    icon: Laptop,
  },
  {
    id: 2,
    title: 'Modern JavaScript Frameworks Compared',
    excerpt: 'An in-depth look at React, Vue, and Angular - which one should you choose for your next project?',
    date: 'May 10, 2025',
    category: 'Frontend',
    readTime: '8 min read',
    icon: Code,
  },
  {
    id: 3,
    title: 'Getting Started with React Native',
    excerpt: 'A beginner\'s guide to building your first cross-platform mobile application with React Native.',
    date: 'May 2, 2025',
    category: 'Mobile',
    readTime: '6 min read',
    icon: Microchip,
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section bg-black relative">
      {/* Purple gradient background effects */}
      <div className="absolute top-40 right-20 w-[20rem] h-[20rem] bg-purple/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 left-10 w-[15rem] h-[15rem] bg-purple/20 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient inline-block">
            Blog
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing my thoughts and experiences with web development, mobile applications, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-gray-900 border-gray-800 hover:border-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple/20">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-purple px-3 py-1 rounded-full bg-purple/10 flex items-center">
                    <post.icon className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <CardTitle className="text-xl text-white hover:text-purple transition-colors">{post.title}</CardTitle>
                <CardDescription className="text-gray-400">{post.readTime}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="flex items-center text-purple hover:text-white hover:bg-purple/20">
                  <BookOpenText className="mr-2 h-4 w-4" /> Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-2 border-purple text-purple hover:bg-purple hover:text-white transition-colors purple-glow"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

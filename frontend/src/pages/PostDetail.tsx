import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";

const PostDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would fetch from backend
  const post = {
    id: id,
    title: "Youth Leadership Program 2024",
    category: "Education",
    author: "Admin Team",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&auto=format&fit=crop",
    content: `
      <p>We are excited to announce the launch of our Youth Leadership Program 2024. This comprehensive program is designed to empower the next generation of leaders through hands-on experience and mentorship.</p>
      
      <h2>Program Highlights</h2>
      <ul>
        <li>12-week intensive training</li>
        <li>One-on-one mentorship with industry leaders</li>
        <li>Real-world project experience</li>
        <li>Networking opportunities</li>
        <li>Certificate of completion</li>
      </ul>
      
      <h2>Who Should Apply?</h2>
      <p>This program is perfect for young individuals aged 16-25 who are passionate about making a difference in their communities. Whether you're interested in social entrepreneurship, community organizing, or nonprofit leadership, this program will provide you with the skills and connections you need.</p>
      
      <h2>Application Process</h2>
      <p>Applications are now open and will be accepted on a rolling basis until all spots are filled. The program starts on April 1st, 2024.</p>
      
      <p>Don't miss this opportunity to develop your leadership potential and connect with like-minded peers!</p>
    `
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/articles">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft size={16} />
            Back to Articles
          </Button>
        </Link>

        <Card className="border-border/50 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          
          <CardContent className="pt-8">
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-accent" />
                <span>{post.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-accent" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-accent" />
                <span>{post.date}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-primary mb-6">{post.title}</h1>
            
            <div 
              className="prose prose-lg max-w-none text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8'
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostDetail;
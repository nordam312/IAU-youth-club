import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Announcements", "Events", "News", "Updates"];
  
  const posts = [
    { id: 1, title: "Upcoming Youth Summit 2024", category: "Announcements", excerpt: "Join us for our annual youth summit...", date: "2024-03-20", author: "Admin Team" },
    { id: 2, title: "Weekly Club Meeting", category: "Events", excerpt: "Don't miss this week's activities...", date: "2024-03-18", author: "Admin Team" },
    { id: 3, title: "New Members Welcome", category: "News", excerpt: "Welcoming our new members this month...", date: "2024-03-15", author: "Admin Team" },
    { id: 4, title: "Club Rules Update", category: "Updates", excerpt: "Important changes to club guidelines...", date: "2024-03-12", author: "Admin Team" },
    { id: 5, title: "Volunteer Opportunity", category: "Announcements", excerpt: "Help make a difference in our community...", date: "2024-03-08", author: "Admin Team" },
    { id: 6, title: "Success Stories", category: "News", excerpt: "Celebrating our members' achievements...", date: "2024-03-05", author: "Admin Team" },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Posts</h1>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-accent font-medium">{post.category}</span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{post.title}</h3>
                <p className="text-muted-foreground mb-2">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground mb-4">By {post.author}</p>
                <Link to={`/posts/${post.id}`}>
                  <Button variant="ghost" className="gap-2 px-0">
                    Read More <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
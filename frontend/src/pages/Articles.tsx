import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Sports", "Culture", "Education", "Community", "Technology"];
  
  const articles = [
    { id: 1, title: "Youth Leadership Program 2024", category: "Education", excerpt: "Empowering the next generation...", date: "2024-03-15" },
    { id: 2, title: "Sports Tournament Success", category: "Sports", excerpt: "Our team achieved remarkable victories...", date: "2024-03-10" },
    { id: 3, title: "Cultural Festival Highlights", category: "Culture", excerpt: "Celebrating diversity and heritage...", date: "2024-03-05" },
    { id: 4, title: "Tech Workshop Series", category: "Technology", excerpt: "Learning modern programming skills...", date: "2024-02-28" },
    { id: 5, title: "Community Service Day", category: "Community", excerpt: "Making a difference together...", date: "2024-02-20" },
    { id: 6, title: "Basketball Championship", category: "Sports", excerpt: "Victory in the regional finals...", date: "2024-02-15" },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Articles</h1>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search articles..."
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow border-border/50">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-accent font-medium">{article.category}</span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{article.title}</h3>
                <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                <Link to={`/articles/${article.id}`}>
                  <Button variant="ghost" className="gap-2 px-0">
                    Read More <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const featuredArticles = [
    { id: 1, title: "Youth Leadership Program 2024", category: "Education", excerpt: "Empowering the next generation of leaders..." },
    { id: 2, title: "Sports Tournament Success", category: "Sports", excerpt: "Our team achieved remarkable victories..." },
    { id: 3, title: "Cultural Festival Highlights", category: "Culture", excerpt: "Celebrating diversity and heritage..." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJoc2woMjggMzAlIDQ1JSAvIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9zdmc+')] opacity-40"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-primary animate-fade-in">
              Welcome to Youth Club
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Empowering young minds, building future leaders, creating lasting impact
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/articles">
                <Button size="lg" className="gap-2">
                  Explore Articles <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline">Join Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <Users className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="text-3xl font-bold text-primary">500+</h3>
                <p className="text-muted-foreground">Active Members</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <Award className="mx-auto mb-3 text-accent" size={40} />
                <h3 className="text-3xl font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Achievements</p>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="text-3xl font-bold text-primary">100+</h3>
                <p className="text-muted-foreground">Events Hosted</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow border-border/50">
                <CardContent className="pt-6">
                  <span className="text-sm text-accent font-medium">{article.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">{article.title}</h3>
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
          <div className="text-center mt-8">
            <Link to="/articles">
              <Button variant="outline" size="lg">View All Articles</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

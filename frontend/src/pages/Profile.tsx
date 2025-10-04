import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Mail, Calendar, Edit, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const userArticles = [
    { id: 1, title: "My First Article", date: "2024-03-15", status: "Published" },
    { id: 2, title: "Tech Innovation Ideas", date: "2024-03-10", status: "Draft" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-8">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="md:col-span-1 border-border/50">
            <CardContent className="pt-6 text-center">
              <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <User size={48} className="text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">John Doe</h2>
              <span className="text-sm text-accent font-medium">Admin</span>
              <p className="text-xs text-muted-foreground mt-1">Can create Posts & Articles</p>
              <Button variant="outline" className="w-full mt-4 gap-2">
                <Edit size={16} /> Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="md:col-span-2 border-border/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Profile Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Member Since</p>
                    <p className="text-foreground">January 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="text-muted-foreground" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Published Articles</p>
                    <p className="text-foreground">12 articles</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* My Content */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">My Content</h2>
            <div className="flex gap-2">
              <Button variant="outline">Create Post</Button>
              <Button>Write Article</Button>
            </div>
          </div>

          <div className="space-y-4">
            {userArticles.map((article) => (
              <Card key={article.id} className="border-border/50 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{article.title}</h3>
                      <p className="text-sm text-muted-foreground">{article.date}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        article.status === "Published" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {article.status}
                      </span>
                      <Link to={`/admin/articles/${article.id}/edit`}>
                        <Button variant="ghost" size="sm">
                          <Edit size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

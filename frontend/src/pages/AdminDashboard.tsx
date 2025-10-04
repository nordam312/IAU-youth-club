import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileText, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const pendingArticles = [
    { id: 1, title: "New Sports Event", author: "Jane Smith", date: "2024-03-20" },
    { id: 2, title: "Cultural Workshop", author: "Mike Johnson", date: "2024-03-19" },
  ];

  const recentUsers = [
    { id: 1, name: "Sarah Ahmed", role: "Author", joined: "2024-03-18" },
    { id: 2, name: "Tom Wilson", role: "Regular User", joined: "2024-03-17" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                  <h3 className="text-3xl font-bold text-primary">248</h3>
                </div>
                <Users className="text-primary" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Published Articles</p>
                  <h3 className="text-3xl font-bold text-primary">58</h3>
                </div>
                <FileText className="text-accent" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Achievements</p>
                  <h3 className="text-3xl font-bold text-primary">12</h3>
                </div>
                <Award className="text-primary" size={32} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending Review</p>
                  <h3 className="text-3xl font-bold text-primary">3</h3>
                </div>
                <TrendingUp className="text-accent" size={32} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pending Articles */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Pending Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingArticles.map((article) => (
                  <div key={article.id} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">{article.title}</h4>
                      <p className="text-sm text-muted-foreground">by {article.author} • {article.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="default">Approve</Button>
                      <Button size="sm" variant="outline">Reject</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Users */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Recent Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-foreground">{user.name}</h4>
                      <p className="text-sm text-muted-foreground">{user.role} • Joined {user.joined}</p>
                    </div>
                    <Button size="sm" variant="outline">Manage</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <Link to="/admin/users">
            <Button variant="outline">Manage Users</Button>
          </Link>
          <Link to="/admin/articles">
            <Button variant="outline">Manage Articles</Button>
          </Link>
          <Link to="/admin/categories">
            <Button variant="outline">Manage Categories</Button>
          </Link>
          <Link to="/admin/achievements">
            <Button variant="outline">Manage Achievements</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

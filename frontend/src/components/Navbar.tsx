import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/youthClubLogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Youth Club" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-primary">Youth Club</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/articles" className="text-foreground hover:text-primary transition-colors">Articles</Link>
            <Link to="/posts" className="text-foreground hover:text-primary transition-colors">Posts</Link>
            <Link to="/profile" className="text-foreground hover:text-primary transition-colors">Profile</Link>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link to="/" className="block py-2 text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/articles" className="block py-2 text-foreground hover:text-primary transition-colors">Articles</Link>
            <Link to="/posts" className="block py-2 text-foreground hover:text-primary transition-colors">Posts</Link>
            <Link to="/profile" className="block py-2 text-foreground hover:text-primary transition-colors">Profile</Link>
            <Link to="/login">
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

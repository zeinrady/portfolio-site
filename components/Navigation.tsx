import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { id: "experience", label: "Experience", path: "/experience" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "skills", label: "Skills", path: "/skills" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-8">
          <Link to="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
            Zein Rady
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={isActive(item.path) ? "default" : "ghost"}
                asChild
                className="transition-smooth"
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
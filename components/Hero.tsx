import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with space gradient */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Animated stars/particles effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Zein Rady
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Aerospace Engineering Student
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specializing in Astrodynamics & Space Applications • Rocket Propulsion • Structural Design
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary group"
          >
            <Link to="/projects">
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Link>
          </Button>
          
          <div className="flex gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:radyzein2003@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:(949)501-6098" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call
              </a>
            </Button>
          </div>
        </div>

        {/* Education highlight */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-2">Currently Studying</h3>
          <p className="text-primary">B.S. Aerospace Engineering</p>
          <p className="text-muted-foreground">University of California, Irvine • 2024-2027</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
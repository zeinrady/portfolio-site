import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Plane, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Proxima Rocket Design",
      organization: "Rocket Propulsion Laboratory @ UCSD",
      role: "Lead Design Engineer",
      duration: "Oct 2024 - June 2025",
      icon: Rocket,
      description: "Leading multidisciplinary team in designing high-powered rocket from scratch with focus on aerodynamic optimization and structural integrity.",
      achievements: [
        "Led complete rocket design process using SolidWorks CAD modeling",
        "Performed aerodynamic simulations using OpenRocket",
        "Conducted iterative design optimization for maximum altitude performance",
        "Manufactured components using 3D printing technology",
        "Successfully launched with positive test results"
      ],
      technologies: ["SolidWorks", "OpenRocket", "3D Printing", "Materials Research", "Aerodynamics"],
      status: "Completed",
      impact: "Gaining hands-on experience in rocket propulsion and structural assessment",
      // Placeholder image for this project; replace with a real photo
      image: "/placeholder.jpg"
    },
    {
      title: "Wildfire Response Drone",
      organization: "VFS/DBVF Club @ UCSD",
      role: "Embedded Team Member",
      duration: "Nov 2024 - June 2025",
      icon: Plane,
      description: "Contributing to autonomous drone system design for wildfire emergency response scenarios with focus on electrical systems integration.",
      achievements: [
        "Designed and integrated electrical systems including batteries and power distribution",
        "Configured flight electronics (Pixhawk 4, GPS, telemetry systems)",
        "Optimized motor and ESC calibration for wildfire-response scenarios",
        "Collaborated with structural and software teams for system integration",
        "Applied vibration-resistance techniques for improved reliability"
      ],
      technologies: ["Pixhawk 4", "GPS Systems", "Telemetry", "ESCs", "Power Management"],
      status: "Completed",
      impact: "Developing autonomous flight systems for emergency response applications",
      image: "/placeholder.jpg"
    },
    {
      title: "Bottle Rocket Competition",
      organization: "Educational Outreach",
      role: "Mentor",
      duration: "2024",
      icon: Users,
      description: "Mentoring students in rocket design principles and competition preparation, fostering STEM education and engineering thinking.",
      achievements: [
        "Guided students through rocket design fundamentals",
        "Taught aerodynamics and propulsion concepts",
        "Supervised hands-on construction and testing",
        "Promoted STEM education and engineering problem-solving"
      ],
      technologies: ["Physics", "Aerodynamics", "Teaching", "Project Management"],
      status: "Completed",
      impact: "Inspiring next generation of engineers through hands-on education",
      image: "/placeholder.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on engineering projects spanning rocket propulsion, autonomous systems, and STEM education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="bg-card-gradient border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02] group h-full flex flex-col"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {project.status}
                      </Badge>
                      <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-primary">{project.organization}</p>
                    <p className="text-muted-foreground">{project.role} • {project.duration}</p>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.slice(0, 3).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-3">
                      <strong>Impact:</strong> {project.impact}
                    </div>
                    {/* Display a placeholder image instead of a learn more button */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} photo`}
                        className="w-full rounded-lg"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
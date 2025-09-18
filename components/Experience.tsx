import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, BookOpen, Megaphone } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Lead Structural Designer",
      company: "Freelance Engineering Project",
      icon: Building,
      // Provide actual date range instead of a relative label
      duration: "May 2024 – Aug 2024",
      // Placeholder images for this project; replace with real photos when available
      images: ["/placeholder.jpg"],
      description: "Led structural design of custom freestanding bleacher structures and modular platforms.",
      achievements: [
        "Designed 6 custom structures supporting 5,000 lbs each (30,000 lbs total capacity)",
        "Created modular treehouse-style viewing platform around palm trees",
        "Engineered 6-foot deck with integrated bar structure",
        "Conducted FEA simulations for stress, strain, and displacement analysis",
        "Collaborated with contractors and architects for technical requirements"
      ],
      skills: ["SolidWorks", "FEA Analysis", "Structural Engineering", "CAD Design"]
    },
    {
      title: "Behavior Technician",
      company: "Nyansa Learning Corporation",
      icon: Users,
      // Replace "Current" with an actual date range
      duration: "Mar 2023 – Present",
      description: "Supporting children with special needs in developing essential daily living skills.",
      achievements: [
        "Supported children in developing independence in home, school, and community settings",
        "Assisted in improving communication and speech patterns through structured practice",
        "Provided academic support in mathematics and core subjects",
        "Adapted lessons to meet individual learning needs and goals"
      ],
      skills: ["Communication", "Adaptability", "Teaching", "Patience"]
    },
    {
      title: "Tutor",
      company: "Berktree Learning Center",
      icon: BookOpen,
      // Replace "Previous" with an actual date range
      duration: "Jan 2022 – Dec 2022",
      description: "Provided personalized tutoring services across multiple STEM subjects.",
      achievements: [
        "Tutored students in English, Calculus, Geometry, and Algebra",
        "Developed tailored lesson plans using advanced teaching methodologies",
        "Mentored students academically and personally for better engagement",
        "Created growth-focused learning environments"
      ],
      skills: ["Mathematics", "Teaching", "Mentoring", "Curriculum Development"]
    },
    {
      title: "Social Media Head",
      company: "Youngfield USA",
      icon: Megaphone,
      // Replace "Previous" with an actual date range
      duration: "Jan 2021 – Dec 2021",
      description: "Developed and executed strategic social media campaigns for brand growth.",
      achievements: [
        "Increased brand visibility across Instagram, Facebook, and TikTok",
        "Collaborated on new clothing collection designs and brand aesthetics",
        "Coordinated social media campaigns, giveaways, and influencer partnerships",
        "Contributed to successful product launches and sales growth"
      ],
      skills: ["Social Media Marketing", "Brand Strategy", "Content Creation", "Collaboration"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From structural engineering to education, building diverse skills across multiple domains
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card key={index} className="bg-card-gradient border-border hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                        <Badge variant="secondary" className="w-fit">{exp.duration}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    {/* Render project images if provided */}
                    {exp.images && exp.images.length > 0 && (
                      <div className="flex flex-wrap gap-4 pt-4">
                        {exp.images.map((imgSrc, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={imgSrc}
                            alt={`${exp.title} image ${imgIndex + 1}`}
                            className="w-full sm:w-64 rounded-md border"
                          />
                        ))}
                      </div>
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

export default Experience;
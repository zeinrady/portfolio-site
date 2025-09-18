import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Users,
  GraduationCap,
  Briefcase,
  Award,
  Mail,
  Phone
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "MatLab", level: 30 },
        { name: "C", level: 30 }
      ]
    },
    {
      title: "Software",
      icon: Briefcase,
      skills: [
        { name: "Microsoft Office", level: 50 },
        { name: "SolidWorks", level: 50, certified: true }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 90 },
        { name: "Problem-Solving", level: 88 },
        { name: "Leadership", level: 85 },
        { name: "Adaptability", level: 85 },
        { name: "Attention to Detail", level: 88 },
        { name: "Time Management", level: 85 },
        { name: "Critical Thinking", level: 88 },
        { name: "Emotional Intelligence", level: 80 },
        { name: "Conflict Resolution", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      name: "SolidWorks CAD Design Associate",
      issuer: "Dassault Systèmes",
      date: "July 2024",
      verified: true
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical competencies developed through hands-on projects and professional experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-card-gradient border-border hover:shadow-card transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 border border-primary/20 rounded-lg">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{skill.name}</span>
                            {skill.certified && (
                              <Award className="h-3 w-3 text-primary" />
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <Card className="bg-card-gradient border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {certifications.map((cert, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                    {cert.verified && (
                      <Badge variant="secondary" className="text-xs">Verified</Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-card-gradient border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm">B.S. Aerospace Engineering</h4>
                <p className="text-xs text-muted-foreground">University of California, Irvine</p>
                <p className="text-xs text-muted-foreground">Sep 2024 - Jun 2027</p>
                <Badge variant="outline" className="text-xs mt-1">Astrodynamics & Space Applications</Badge>
              </div>
              <div>
                <h4 className="font-semibold text-sm">Associates Degree</h4>
                <p className="text-xs text-muted-foreground">Irvine Valley College</p>
                <p className="text-xs text-muted-foreground">Aug 2021 - June 2024</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <Badge variant="outline" className="text-xs">Mathematics</Badge>
                  <Badge variant="outline" className="text-xs">Physics</Badge>
                  <Badge variant="outline" className="text-xs">Natural Sciences</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="bg-card-gradient border-border text-center">
          <CardHeader>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Let's Connect</CardTitle>
            </div>
            <p className="text-muted-foreground">
              Open to opportunities in aerospace engineering, rocket propulsion, and structural design
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 justify-center">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:radyzein2003@gmail.com" className="text-sm hover:text-primary transition-colors">
                  radyzein2003@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:(949)501-6098" className="text-sm hover:text-primary transition-colors">
                  (949) 501-6098
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
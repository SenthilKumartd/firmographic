import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Michael Anderson",
      role: "CEO & Founder",
      bio: "15+ years experience in business intelligence and data analytics.",
      initial: "MA",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      bio: "Expert in enterprise data systems and scalable architecture.",
      initial: "SJ",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "David Martinez",
      role: "Data Science Lead",
      bio: "Specialized in predictive analytics and machine learning models.",
      initial: "DM",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      name: "Jennifer Wong",
      role: "Product Manager",
      bio: "Passionate about creating intuitive data platforms for business users.",
      initial: "JW",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Meet Our Team</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            The experts behind our comprehensive firmographic data platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-60 bg-slate-100 flex items-center justify-center">
                <div className={`w-32 h-32 rounded-full ${member.bgColor} flex items-center justify-center`}>
                  <span className={`${member.textColor} text-4xl font-bold`}>{member.initial}</span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold text-secondary">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-2">
                  <a href="#" className="text-slate-400 hover:text-blue-500">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-blue-500">
                    <Twitter size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

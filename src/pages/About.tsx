import { Card } from "../components/ui/Card";
import { Stethoscope, Heart, Users, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, label: "Patients Served", value: "50,000+" },
    { icon: Heart, label: "Success Rate", value: "98%" },
    { icon: Award, label: "Awards Won", value: "12" },
    { icon: Stethoscope, label: "Years of Service", value: "20+" },
  ];

  const teamIntro = [
    {
      title: "Expert Doctors",
      description: "Board-certified specialists with decades of experience",
      image: "/images/about/docteam.jpeg",
    },
    {
      title: "Modern Facility",
      description: "State-of-the-art equipment and comfortable environment",
      image: "/images/about/hospital.jpeg",
    },
    {
      title: "24/7 Support",
      description: "Emergency care and patient support around the clock",
      image: "/images/about/support.jpeg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Teach2Give Clinic</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Established in 2005, we are a leading healthcare provider committed to excellence, 
          compassion, and innovation in patient care.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To deliver personalized, high-quality medical care that improves the health 
            and well-being of every patient we serve.
          </p>
        </Card>
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the most trusted and innovative healthcare partner in our community, 
            setting the standard for patient-centered care.
          </p>
        </Card>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {teamIntro.map((item, i) => (
            <Card
              key={i}
              className="p-6 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/50"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

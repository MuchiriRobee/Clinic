import { Card } from "../ui/Card";
import { Stethoscope, Heart, Baby, Brain } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Checkup", desc: "Routine health exams and screenings" },
  { icon: Heart, title: "Cardiology", desc: "Heart health and cardiovascular care" },
  { icon: Baby, title: "Pediatrics", desc: "Child healthcare from birth to adolescence" },
  { icon: Brain, title: "Neurology", desc: "Brain and nervous system specialists" },
];

export const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="text-center hover:shadow-xl transition">
              <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
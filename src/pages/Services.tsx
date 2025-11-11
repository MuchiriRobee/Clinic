import { Card } from "../components/ui/Card";
import { 
  Stethoscope, Heart, Baby, Brain, Eye, Bone, 
  Activity, Thermometer, Syringe, Microscope 
} from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Medicine", desc: "Routine checkups, diagnostics, and preventive care" },
  { icon: Heart, title: "Cardiology", desc: "Heart screenings, ECG, and cardiovascular treatment" },
  { icon: Baby, title: "Pediatrics", desc: "Child wellness, vaccinations, and growth monitoring" },
  { icon: Brain, title: "Neurology", desc: "Headaches, seizures, stroke recovery, and brain health" },
  { icon: Eye, title: "Ophthalmology", desc: "Eye exams, vision correction, and cataract surgery" },
  { icon: Bone, title: "Orthopedics", desc: "Joint pain, fractures, and sports injury treatment" },
  { icon: Activity, title: "Physiotherapy", desc: "Rehab, mobility training, and pain management" },
  { icon: Thermometer, title: "Emergency Care", desc: "24/7 urgent care for accidents and critical conditions" },
  { icon: Syringe, title: "Vaccinations", desc: "Flu shots, travel vaccines, and immunization programs" },
  { icon: Microscope, title: "Laboratory", desc: "Blood tests, imaging, and diagnostic services" },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive healthcare solutions tailored to your needs, delivered with expertise and care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Card key={i} className="hover:shadow-xl transition-shadow h-full">
            <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-700 mb-6">
          Need a service not listed? <strong>We offer customized care plans.</strong>
        </p>
        <a href="/contact">
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-green-500 transition">
            Book Consultation
          </button>
        </a>
      </div>
    </div>
  );
}
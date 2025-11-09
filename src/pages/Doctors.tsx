import { Card } from "../components/ui/Card";
import { Mail, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";


interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  education: string;
  email: string;
  phone: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Liz Mwikali",
    specialty: "Cardiologist",
    experience: "15+ years",
    education: "MD, Karatina Medical School",
    email: "lizmwikali@gmail.com",
    phone: "+254 712 345 678",
    image: "/images/doctors/doc1.jpeg"
  },
  {
    name: "Dr. Luke Obwoge",
    specialty: "Pediatrician",
    experience: "12+ years",
    education: "MD, KCA University",
    email: "obwogzluka@gmail.com",
    phone: "+254 723 121 232",
    image: "/images/doctors/doc3M.jpeg"

  },
  {
    name: "Dr. Joy Njoki",
    specialty: "Neurologist",
    experience: "18+ years",
    education: "MD, PhD, CUEA",
    email: "joynjoks@gmail.com",
    phone: "+254 756 545 434",
    image: "/images/doctors/doc2F.jpeg"
  },
  {
    name: "Dr. Robin Njoroge",
    specialty: "Orthopedic Surgeon",
    experience: "20+ years",
    education: "MD, KMTC",
    email: "njorowauber@gmail.com",
    phone: "+254 743 372 172",
    image: "/images/doctors/doc4M.jpeg"
  },
];

export default function Doctors() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Expert Doctors</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our board-certified physicians bring decades of experience and genuine care to every patient.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {doctors.map((doc, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
                            {/* Doctor Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={doc.image}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/50"
                />
              </div>
              
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold text-gray-800">{doc.name}</h3>
                <p className="text-primary font-medium text-lg">{doc.specialty}</p>
                <p className="text-sm text-gray-600 mt-1">{doc.experience} • {doc.education}</p>

                <div className="mt-6 space-y-3">
                  <p className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4" />
                    <a href={`mailto:${doc.email}`} className="hover:text-primary">{doc.email}</a>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    <a href={`tel:${doc.phone}`} className="hover:text-primary">{doc.phone}</a>
                  </p>
                </div>
            <Link to="/contact">
                <button className="mt-6 w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
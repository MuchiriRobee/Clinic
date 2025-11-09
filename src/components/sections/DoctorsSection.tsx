// src/components/sections/DoctorsSection.tsx
import { Card } from "../ui/Card";

const doctors = [
  {
    name: "Dr. Liz Mwikali",
    specialty: "Cardiologist",
    exp: "15+ years",
    image: "/images/doctors/doc1.jpeg", // 👈 path to image
  },
  {
    name: "Dr. Luke Obwoge",
    specialty: "Pediatrician",
    exp: "12+ years",
    image: "/images/doctors/doc3M.jpeg",
  },
  {
    name: "Dr. Joy Njoki",
    specialty: "Neurologist",
    exp: "18+ years",
    image: "/images/doctors/doc2F.jpeg",
  },
];

export const DoctorsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Doctors</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <Card
              key={i}
              className="text-center p-6 shadow-lg rounded-2xl bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Doctor Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={doc.image}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/50"
                />
              </div>

              {/* Doctor Details */}
              <h3 className="text-xl font-semibold text-gray-800">{doc.name}</h3>
              <p className="text-primary font-medium">{doc.specialty}</p>
              <p className="text-sm text-gray-600">{doc.exp} experience</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

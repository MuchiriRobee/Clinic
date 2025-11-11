import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-white"
      style={{
        backgroundImage: "url('/images/hero/hospitalbeds.jpg')", 
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative container mx-auto px-4 text-center">
<h1 className="text-4xl md:text-6xl font-bold mb-6 rainbow-text">
  Welcome to Teach2Give Clinic
</h1>
<p className="text-xl mb-8 max-w-2xl mx-auto rainbow-text-slow">
  Providing compassionate, high-quality healthcare for you and your family.
</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button className="hover:bg-green-500">Book Appointment</Button>
          </Link>

          <Link to="/about">
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/20 hover:-translate-y-0.5   hover:text-blue-800"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
<footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Teach2Give Clinic</h3>
            <p className="text-gray-400">
              Your trusted healthcare partner.
              Dedicated to deliver personalized, high-quality medical care that improves the health 
            and well-being of every patient we serve.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "About", "Services", "Doctors", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-primary">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-primary" />
                              <a
                                  href="https://www.google.com/maps?q=Dekut,+Kimathi,+Nyeri,+Kenya"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline"
                              >
                                  Dekut, Kimathi, Nyeri, Kenya
                              </a>
                          </p>

              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href={`tel:+254 743 371 171`} className="hover:text-primary">+254 743 371 171</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <a href={`mailto:info@teach2giveclinic.com`} className="hover:text-primary">info@teach2giveclinic.com</a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Mon - Fri: 8AM - 6PM | Sat: 9AM - 2PM
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          © {new Date().getFullYear()} Teach2Give Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
// src/components/layout/Navbar.tsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import AuthModal from "./AuthModal";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary" onClick={closeMenu}>
              Teach2Give Clinic
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Admin Icon */}
              <button
                onClick={isAuthenticated ? () => navigate("/admin") : openAuthModal}
                className="p-2 rounded-full hover:bg-gray-100 transition"
                aria-label="Admin panel"
              >
                <User className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black/50" onClick={closeMenu}>
            <div
              className="fixed inset-x-0 top-16 bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="container mx-auto px-4 py-6">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg transition ${
                          location.pathname === item.path
                            ? "bg-primary text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        closeMenu();
                        isAuthenticated ? navigate("/admin") : openAuthModal();
                      }}
                      className="w-full text-left py-3 px-4 text-lg font-medium rounded-lg hover:bg-gray-100 flex items-center gap-2"
                    >
                      <User className="w-5 h-5" />
                      Admin
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {showAuthModal && <AuthModal onClose={closeAuthModal} />}
    </>
  );
}
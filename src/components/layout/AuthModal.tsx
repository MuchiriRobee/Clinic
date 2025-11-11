// src/components/layout/AuthModal.tsx
import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type Mode = "login" | "register";

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [mode, setMode] = useState<Mode>("login");
  const { login } = useAuth();
  const navigate = useNavigate();

  // Login Form
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  // Register Form
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirm, setShowRegConfirm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === "Admin" && loginData.password === "Admin123") {
      login();
      toast.success("Welcome back, Admin!");
      onClose();
      navigate("/admin"); // ← AUTO REDIRECT
    } else {
      toast.error("Invalid credentials.");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password, confirmPassword } = registerData;

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Account created! You can now log in.");
    setMode("login");
    setRegisterData({ email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            {mode === "login" ? "Admin Login" : "Create Admin Account"}
          </h2>

          {/* Tabs */}
          <div className="flex mb-6 border-b">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 text-center font-medium transition ${
                mode === "login"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 py-2 text-center font-medium transition ${
                mode === "register"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500"
              }`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {mode === "login" && (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
              >
                Login
              </button>
              <p className="text-xs text-center text-gray-500">
                Hint: Admin / Admin123
              </p>
            </form>
          )}

          {/* Register Form */}
          {mode === "register" && (
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <div className="relative">
                <input
                  type={showRegPassword ? "text" : "password"}
                  placeholder="Password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  className="w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRegPassword(!showRegPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showRegPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showRegConfirm ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={registerData.confirmPassword}
                  onChange={(e) =>
                    setRegisterData({ ...registerData, confirmPassword: e.target.value })
                  }
                  className="w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowRegConfirm(!showRegConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showRegConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
              >
                Create Account
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
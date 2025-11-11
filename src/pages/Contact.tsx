import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please enter your name, email and message before sending.");
      return;
    }

    // Success toast
    toast.success(
      <div>
        <p className="font-semibold">Message Sent!</p>
        <p className="text-sm text-gray-600">
          Thanks, <strong>{form.name}</strong> ({form.email}). We’ll get back to you soon!
        </p>
      </div>
    );
    const newMessage = {
  id: Date.now().toString(),
  name: form.name,
  email: form.email,
  message: form.message,
  timestamp: new Date().toISOString(),
};

const existing = JSON.parse(localStorage.getItem("contactMessages") || "[]");
existing.push(newMessage);
localStorage.setItem("contactMessages", JSON.stringify(existing));
    // Reset form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <Input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mb-4"
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mb-4"
        />
        
          <Input
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-4 border rounded-lg mb-6 h-32"
          />
        
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
}

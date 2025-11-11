// src/pages/AdminPage.tsx
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { LogOut, Trash2, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function AdminPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);

  // Load messages from localStorage
  const loadMessages = () => {
    const stored = localStorage.getItem("contactMessages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  // Delete single message
  const deleteMessage = (id: string) => {
    toast(
      <div className="flex flex-col gap-2">
        <p>Delete this message?</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              const updated = messages.filter((m) => m.id !== id);
              localStorage.setItem("contactMessages", JSON.stringify(updated));
              setMessages(updated);
              toast.dismiss();
              toast.success("Message deleted");
            }}
            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>,
      { duration: 10000 }
    );
  };

  // Delete all messages
  const deleteAllMessages = () => {
    if (messages.length === 0) {
      toast.info("No messages to delete");
      return;
    }

    toast(
      <div className="flex flex-col gap-2">
        <p>Delete <strong>all {messages.length}</strong> messages?</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              localStorage.removeItem("contactMessages");
              setMessages([]);
              toast.dismiss();
              toast.success("All messages deleted");
            }}
            className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
          >
            Delete All
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>,
      { duration: 10000 }
    );
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-2">
          <button
            onClick={deleteAllMessages}
            disabled={messages.length === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              messages.length === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            <Trash className="w-4 h-4" />
            Delete All
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Contact Messages ({messages.length})
          </h2>
        </div>

        {messages.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No messages yet.</p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-lg">{msg.name}</p>
                      <button
                        onClick={() => deleteMessage(msg.id)}
                        className="text-red-600 hover:text-red-800 transition"
                        aria-label="Delete message"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600">{msg.email}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.timestamp).toLocaleString()}
                    </p>
                    <p className="mt-3 text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
      <div>
        <label className="block mb-1">Username</label>
        <input
          type="text"
          value={username}         // ✅ controlled input
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border px-2 py-1"
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          type="email"
          value={email}            // ✅ controlled input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-2 py-1"
        />
      </div>
      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}         // ✅ controlled input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-2 py-1"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
import { useState } from "react";

export default function Login({ navigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isActive = email.length > 0 && password.length > 0;

  const handleLogin = () => {
    if (isActive) {
      navigate("account", { name: "Marry Doe", email: email || "Marry@Gmail.Com" });
    }
  };

  return (
    <div className="phone-frame">
      <div className="auth-inner">
        <h1 className="auth-title">Signin to your<br />PopX account</h1>
        <p className="auth-sub">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

        <div className="field-group">
          <span className="field-label">Email Address</span>
          <input
            className="field-input"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field-group">
          <span className="field-label">Password</span>
          <input
            className="field-input"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className={`btn-login ${isActive ? "active" : ""}`}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

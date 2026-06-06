import { useState } from "react";

export default function Register({ navigate }) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = () => {
    navigate("account", { name: form.fullName || "Marry Doe", email: form.email || "Marry@Gmail.Com" });
  };

  return (
    <div className="phone-frame">
      <div className="auth-inner">
        <h1 className="auth-title">Create your<br />PopX account</h1>

        <div className="register-form">
          <div className="field-group">
            <span className="field-label">Full Name*</span>
            <input className="field-input" placeholder="Marry Doe" value={form.fullName} onChange={update("fullName")} />
          </div>

          <div className="field-group">
            <span className="field-label">Phone number*</span>
            <input className="field-input" placeholder="Marry Doe" value={form.phone} onChange={update("phone")} />
          </div>

          <div className="field-group">
            <span className="field-label">Email address*</span>
            <input className="field-input" type="email" placeholder="Marry Doe" value={form.email} onChange={update("email")} />
          </div>

          <div className="field-group">
            <span className="field-label">Password *</span>
            <input className="field-input" type="password" placeholder="Marry Doe" value={form.password} onChange={update("password")} />
          </div>

          <div className="field-group">
            <span className="field-label">Company name</span>
            <input className="field-input" placeholder="Marry Doe" value={form.company} onChange={update("company")} />
          </div>

          <p style={{ fontSize: "13px", color: "#1a1a1a", marginBottom: "10px" }}>
            Are you an Agency?*
          </p>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={update("isAgency")}
              />
              Yes
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={update("isAgency")}
              />
              No
            </label>
          </div>

          <div className="spacer" />

          <button className="btn-primary" onClick={handleSubmit}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

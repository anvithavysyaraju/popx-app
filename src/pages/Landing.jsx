export default function Landing({ navigate }) {
  return (
    <div className="phone-frame">
      <div className="landing-inner">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-sub">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
        <button className="btn-primary" onClick={() => navigate("register")}>
          Create Account
        </button>
        <button className="btn-secondary" onClick={() => navigate("login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

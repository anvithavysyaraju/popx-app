import { useState } from "react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountSettings from "./pages/AccountSettings";

export default function App() {
  const [page, setPage] = useState("landing");
  const [userData, setUserData] = useState(null);

  const navigate = (p, data) => {
    if (data) setUserData(data);
    setPage(p);
  };

  return (
    <div className="app-wrapper">
      {page === "landing" && <Landing navigate={navigate} />}
      {page === "login" && <Login navigate={navigate} />}
      {page === "register" && <Register navigate={navigate} />}
      {page === "account" && <AccountSettings navigate={navigate} userData={userData} />}
    </div>
  );
}

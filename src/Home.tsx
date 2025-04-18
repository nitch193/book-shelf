import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import BooksGrid from "./BooksGrid";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();
  // const handleLogin = () => {
  //   // Simulate login
  //   setIsAuthenticated(true);
  //   localStorage.setItem("token", "your_token"); // Store token
  //   navigate("/"); // Redirect to dashboard
  // };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  //   localStorage.removeItem("token"); // Remove token
  //   navigate("/login"); // Redirect to login
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/" element={isAuthenticated ? <BooksGrid /> : <Login />} />
      </Routes>
    </>
  );
};
export default Home;

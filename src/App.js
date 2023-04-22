import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      console.log(currentUser);
      navigate("/signup");
    }
  }, []);
  console.log(currentUser);

  return (
    <div className="App" style={{ background: 'black' }}>
      {currentUser ? <Navbar /> : ""}
      <Routes>
        <Route
          exact
          path="/"
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path="/signup"
          element={<Signup setCurrentUser={setCurrentUser} />}
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

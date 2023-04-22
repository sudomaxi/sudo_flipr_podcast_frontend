import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const ProtectedRoute = () => {
    if (!currentUser) {
      return <Navigate to="/signup" />;
    }
  };
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

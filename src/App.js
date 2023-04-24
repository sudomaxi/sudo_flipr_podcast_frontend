import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import Favourites from "./pages/Favourites";
import Video from "./components/Video";
import video from "./assets/video_1.mp4";


function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      console.log(currentUser);
      navigate("/signup");
    }
  }, []);
  // console.log(currentUser);

  return (
    <div className="App">
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
          exact
          path="/video-play/:id/:lastwatch"
          element={
            // <ProtectedRoute>
            <Video />
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
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/player" element={<Video url={video} />} />
      </Routes>
    </div>
  );
}

export default App;

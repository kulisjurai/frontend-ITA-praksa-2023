import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GeneralContext } from "./context/GeneralContext";
import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Feed from "./pages/feed/Feed";
import Profile from "./pages/profile/Profile";
import Videos from "./pages/Videos/Videos";
import Photos from "./pages/Photos/Photos";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import "./App.css";

function App() {
  const { user } = useContext(GeneralContext);

  return (
    <div className="App">
      <BrowserRouter>
        {user && <Navbar />}
        <Routes>
          <Route path="/" element={user ? <Feed /> : <Login />} />
          <Route path="/profile" element={user ? <Profile /> : <Login />} />
          <Route path="/photos" element={user ? <Photos /> : <Login />} />
          <Route path="/videos" element={user ? <Videos /> : <Login />} />
          <Route path="/login" element={!user ? <Login /> : <Feed />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

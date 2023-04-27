import Signup from "./pages/sugnup/Signup";
import Login from "./pages/login/Login";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}

export default App;

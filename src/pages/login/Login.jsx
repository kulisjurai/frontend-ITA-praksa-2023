import React from "react";
import "./Login.css";

export default function Login() {
  const displayEventAction = () => {
    console.log("yeee, react is cool!!!");
  };
  return (
    <div onClick={displayEventAction} className="background">
      <h1>This is Login component</h1>
    </div>
  );
}

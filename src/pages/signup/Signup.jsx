import React, {useState} from "react";
import "./Signup.css";

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
    return (
    <><div className="background-signup">
      <h1>Sign up</h1>
      <form className="signup-form" onSubmit = {handleSubmit}>
        <label for="name">First name: </label>
        <input value={name} onChange={(e) => setName.target.value} type="text" placeholder="First name" id="name" name="name"></input>
        
        <label for="lastname">Last name: </label>
        <input value={lastname} onChange={(e) => setLastName.target.value} type="text" placeholder="Last name" id="lastname" name="lastname" />
        
        <label for="email">E-mail: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="example@gmail.com" id="email" name="email" />
        
        <label for="password">Password: </label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
        
        <button type="submit">Sign up</button>
    </form>
    </div></>
    
  );
}

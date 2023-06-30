import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import "./Signin.css";
import { loginUser, useProfileState, useProfileDispatch } from '../../contexts';

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useProfileDispatch();
  const { loading, errorMessage } = useProfileState();
  const handleSignin = async (e) => {
    e.preventDefault()
    try {
      let response = await loginUser(dispatch, { email, password });
      console.log("You are logged in!")
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />



      <button type="submit" className="continue-button" onClick={handleSignin}>
        Continue
      </button>

      <p className="terms-and-conditions">
        By continuing, you have read and agree to our{" "}
        <a href="/terms">Terms and Conditions</a> and{" "}
        <a href="/privacy">Privacy Statement</a>.
      </p>
    </div>
  );
};

export default Signin;
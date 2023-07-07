import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import "./Signin.css";
import { loginUser, useProfileState, useProfileDispatch } from '../../contexts';

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useProfileDispatch();
  const { loading, errorMessage,  authenticated} = useProfileState();
  const handleSignin = async (e) => {
    e.preventDefault()
    try {
       await loginUser(dispatch, { email, password });
      
    } catch (error) {
      console.error(error)
    }
  };
  console.log(authenticated)
  if(authenticated){
    navigate('/')
  }

  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div class="alert alert-danger" role="alert">
       {errorMessage}
      </div>
      

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
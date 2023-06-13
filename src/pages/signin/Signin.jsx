import "./Signin.css"

const Signin = () => {
  return (
    <div className="login-container">
      <h1>Sign in</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
     
    

      <button type="submit" className="continue-button">
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
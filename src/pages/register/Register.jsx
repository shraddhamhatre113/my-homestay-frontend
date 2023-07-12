import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Register.css";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailListEmail, setEmailListEmail] = useState("");
  const [emailListLoading, setEmailListLoading] = useState(false);
  const [emailListErrorMessage, setEmailListErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage("");

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage("");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      setErrorMessage("Please enter a valid first name.");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      setErrorMessage("Please enter a valid last name.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid(password)) {
      setErrorMessage("Please enter a valid password.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Password and Confirm Password should match.");
      return;
    }

    setLoading(true);
    try {
      await axios.post(
        "http://localhost:4040/api/signup",
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Registration successful!");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("An error occurred during registration.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailListEmailChange = (e) => {
    setEmailListEmail(e.target.value);
  };

  const handleEmailListSubmit = async (e) => {
    e.preventDefault();

    // Reset error message
    setEmailListErrorMessage("");

    if (!emailListEmail) {
      setEmailListErrorMessage("Please enter a valid email address.");
      return;
    }

    setEmailListLoading(true);
    try {
      await axios.post("http://localhost:8080/users/subscribe", {
        email,
      });
      console.log("Subscription successful!");
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("An error occurred during subscription.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page container">
      <div className="register-form col-6">
        <h2 style={{ fontFamily: "Montserrat" }}>Sign Up</h2>
        <p style={{ fontFamily: "Montserrat" }}>
          Login or create a new bookMe.com account
        </p>
        {errorMessage && (
          <p className="error-message" style={{ fontFamily: "Montserrat" }}>
            {errorMessage}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="First Name"
              style={{ fontFamily: "Montserrat" }}
            />
            {firstName && !/^[a-zA-Z\s]+$/.test(firstName) && (
              <p className="error-message" style={{ fontFamily: "Montserrat" }}>
                Please enter a valid first name.
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Last Name"
              style={{ fontFamily: "Montserrat" }}
            />
            {lastName && !/^[a-zA-Z\s]+$/.test(lastName) && (
              <p className="error-message" style={{ fontFamily: "Montserrat" }}>
                Please enter a valid last name.
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              style={{ fontFamily: "Montserrat" }}
            />
            {email && !/\S+@\S+\.\S+/.test(email) && (
              <p className="error-message" style={{ fontFamily: "Montserrat" }}>
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className="form-group">
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                style={{ fontFamily: "Montserrat" }}
              />
              <i
                className={`password-toggle ${
                  showPassword ? "fa fa-eye-slash" : "fa fa-eye"
                }`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
            {password && !isPasswordValid(password) && (
              <p className="error-message" style={{ fontFamily: "Montserrat" }}>
                Please enter a valid password (at least 8 characters long).
              </p>
            )}
          </div>
          <div className="form-group">
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirm Password"
                style={{ fontFamily: "Montserrat" }}
              />
              <i
                className={`password-toggle ${
                  showPassword ? "fa fa-eye-slash" : "fa fa-eye"
                }`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: "#FF9900",
              color: "#fff",
              fontFamily: "Montserrat",
              borderRadius: "0",
            }}
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
      <div className="email-list-form col-6">
        <p style={{ fontFamily: "Montserrat" }}>Subscribe to our Newsletter</p>
        <p style={{ fontFamily: "Montserrat" }}>
          Join our mailing list for the latest product updates
        </p>
        {emailListErrorMessage && (
          <p className="error-message" style={{ fontFamily: "Montserrat" }}>
            {emailListErrorMessage}
          </p>
        )}
        <form onSubmit={handleEmailListSubmit}>
          <div className="form-group">
            <input
              type="email"
              value={emailListEmail}
              onChange={handleEmailListEmailChange}
              placeholder="Email"
              style={{ fontFamily: "Montserrat" }}
            />
            {emailListEmail && !/\S+@\S+\.\S+/.test(emailListEmail) && (
              <p className="error-message" style={{ fontFamily: "Montserrat" }}>
                Please enter a valid email address.
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={emailListLoading}
            style={{
              backgroundColor: "#FF9900",
              color: "#fff",
              fontFamily: "Montserrat",
              borderRadius: "0",
            }}
          >
            {emailListLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

// import  {useState} from 'react'
// import axios from 'axios'
// import "./Register.css"

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("")
//   const [username, setUsername] = useState("")

//   const handleSignup = async(e) => {
//     e.preventDefault()

//   try {
//     const response = await axios.post("http://localhost:8080/users/signup", { username, email, password });
//     console.log(response.data)
//     console.log("You are signed up successfully!")
//   } catch (error) {
//     console.error(error)
//   }
// };

//   return (
//     <div className="login-container ">
//       <h1>Sign up</h1>

//       <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
//       <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

//       <button type="submit" className="continue-button" onClick={handleSignup}>
//         Register
//       </button>
//       </div>
//   );

// }

// export default Register

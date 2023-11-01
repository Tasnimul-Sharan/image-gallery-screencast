import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link} from "react-router-dom";


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    // Your registration logic here
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    // Proceed with registration logic
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 

  const handleGoogleSignIn = async () => {
    console.log("Google Sign-In clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl text-slate-800 font-semibold mb-4 text-center">
          Register
        </h1>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-lg pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-0 right-0 mt-3 mr-4"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400" />
              ) : (
                <FaEye className="text-gray-400" />
              )}
            </button>
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border rounded-lg pr-10"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
           <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-0  right-0 mt-3 mr-4"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400" />
              ) : (
                <FaEye className="text-gray-400" />
              )}
            </button>
          </div>
          <div className="mb-4">
            <button
              type="button"
              onClick={handleRegister}
              className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600">
          Already have an account?{" "}

          <Link className="text-blue-700" to="/login">        
          <button
            type="button"
         
            className="text-blue-500 hover:underline"
          >
            Login Now
          </button>
         </Link>

        </p>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

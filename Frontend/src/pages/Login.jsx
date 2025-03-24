import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Navigate} from "react-router-dom";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();  // ✅ Move useDispatch inside the component

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true); // Start loading
  
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Ensures loading for 2 seconds
        await login(dispatch, { email, password }); // Call actual login function
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Stop loading after login attempt
      }
    }
  };
  

  console.log(user.currentUser);

  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex flex-col md:flex-row items-center justify-evenly p-6 md:p-12 text-gray-300">
        {/* Floating Image */}
        <motion.img
  src="/hero.png"
  alt="Login page"
  className="w-[300px] md:w-[400px]"
  animate={{ y: [0, -20, 0] }} // Moves up & down
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
/>;

        {/* Login Box */}
        <div className="h-auto md:h-[450px] w-full max-w-[450px] bg-[#e9eb77] rounded-lg shadow-lg flex flex-col items-center justify-center p-6">
        <motion.h2
  className="text-2xl font-bold text-gray-800 mb-6"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  Welcome Back!
</motion.h2>

          {/* Email Input */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-700 p-4 w-full rounded-lg shadow-md outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-300 pl-12"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
              📧
            </span>
          </div>

          {/* Password Input */}
          <div className="relative w-full mb-6">
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white text-gray-700 p-4 w-full rounded-lg shadow-md outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-300 pl-12 pr-12"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
              🔒
            </span>
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl cursor-pointer"
              onClick={() => {
                const input = document.getElementById("password");
                input.type = input.type === "password" ? "text" : "password";
              }}
            >
              👁️
            </span>
          </div>

          {/* Submit Button */}
          <button
    className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 w-full text-lg"
    onClick={handleLogin}
    disabled={loading} // Prevents multiple clicks
  >
    {loading ? 'Loading...' : 'Login'}
  </button>

  {user.currentUser && <Navigate to="/myparcels" replace />}  

  {error && (
    <span className="text-red-500 mt-2">
      Please use correct email and password.
    </span>
  )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  return (
    <div>
      <Navbar />

      <div className="h-[80vh] flex flex-col md:flex-row items-center justify-evenly p-6 md:p-12 text-gray-300">
        {/* Floating Image */}
        <img
          src="/hero.png"
          alt="Login page"
          className="w-[300px] md:w-[400px]"
        />

        {/* Login Box */}
        <div className="h-auto md:h-[450px] w-full max-w-[450px] bg-[#e9eb77] rounded-lg shadow-lg flex flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Welcome Back!</h2>

          {/* Email Input */}
          <div className="relative w-full mb-4">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-white text-gray-700 p-4 w-full rounded-lg shadow-md outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-300 pl-12"
            />
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
              📧
            </span>
          </div>

          {/* Password Input with Show/Hide Feature */}
          <div className="relative w-full mb-6">
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
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
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 w-full text-lg">
            Login
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;

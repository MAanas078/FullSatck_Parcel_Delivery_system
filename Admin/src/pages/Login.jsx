import Footer from "../components/Footer";

function Login() {
  return (
    <div>
      <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-gray-300">
        <div className="relative">
          <h2 className="text-[#d9d9d9] font-semibold text-[35px] transition-transform duration-500 ease-in-out transform hover:rotate-y-180 hover:scale-105">
            SendIT Admin
          </h2>
          <img src="/hero.png" alt="Hero illustration" />
        </div>
        <div className="h-[450px] w-[450px] bg-[#E9EB77] rounded-md flex flex-col items-center justify-start pt-[50px] gap-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] outline-none rounded-md mt-[8%]"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="flex items-center bg-[#fff] p-[20px] w-[350px] outline-none rounded-md mt-[20px]"
          />

          <button
            className="bg-[#1e1e1e] cursor-pointer text-white p-[20px] w-[350px] rounded-md 
  hover:text-[#E9EB77] hover:bg-[#333] hover:scale-105 hover:shadow-lg 
  transition-all duration-300 ease-in-out transform mt-[10%]"
          >
            Login
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Parcel() {
  return (
    <div className="flex felx-col iitems-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-[80vh] w-[60vw] rounded-md">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer " />
        </Link>

        <div className="flex justify-between">
          <div className="flex-1">
            <ul className="m-10 text-[#444]">
              <li className="m-3">From:101 Port St, Delhi, India</li>
              <li className="m-3">Weight: 300g</li>
              <li className="m-3">Date: 15/02/2025</li>
              <li className="m-3">Sender:James</li>
              <li className="m-3">To: 102 Port St, Mumbai, India</li>
              <li className="m-3">Cost:$200</li>
              <li className="m-3">Recipient:Alex Rob</li>
              <li className="m-3">Track ID:172345</li>
              <button className="bg-[#555] text-white w-[150px] cursor-pointer p-[10px] mt-[30px] hover:text-[#FF0000] rounded-md ">
                Pending
              </button>
            </ul>
          </div>
          <div className="flex-1">
            <ul className="mr-10 mt-[40px] text-[#444] ">
              <li className="m-3">Sender Email: james@gmail.com</li>
              <li className="m-3">Recipient Email:alexrob@gmail.com</li>
            </ul>
            <textarea
              name=""
              cols={15}
              rows={7}
              className="w-full bg-gray-100 max-w-[400px] h-[200px] mt-[20px] p-4 text-[#555] border-2 border-gray-300 rounded-lg 
             focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none 
             transition-all duration-300 placeholder-gray-400 resize-none shadow-md"
              placeholder="Leave a feedback"
              id=""
            />

            <button
              className="bg-blue-500 mr-[50%] text-white w-[150px] cursor-pointer p-[10px] mt-[20px] rounded-md 
                   hover:text-[#fff] hover:bg-big-blue-600 hover:scale-105 hover:shadow-lg
                   transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parcel;

import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa"; // Importing icons

function Myparcels() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="relative flex items-end justify-end mr-[10%] mt-[5%] font-semibold cursor-pointer">
        {/* Profile Section */}
        <div
          className="flex items-center text-white space-x-3"
          onClick={handleOpen}
        >
          <FaBars className="text-xl" /> {/* Menu Button */}
          <div className="flex items-center space-x-2">
            <FaUser className="text-lg" /> {/* Profile Icon */}
            <span className="text-white font-semibold">James Robert</span>{" "}
            {/* Username */}
          </div>
        </div>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute top-[50px] right-0 h-[200px] w-[250px] bg-[#e9de77] z-[999] shadow-xl rounded-lg p-3">
            <ul className="flex flex-col items-center justify-center text-[#555]">
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                All Parcels
              </li>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Statements
              </li>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-col mr-[10%] ml-[10%]">
        <h2 className="text-[18px] text-[#d9d9d9] p-[20px] ">My Parcels</h2>

        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Delhi, India</li>
              <li>Weight: 300g</li>
              <li>Date:15/03/2025</li>
              <li>Sender:James</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Mumbai, India</span>
            <button
              className="bg-[#555] text-black w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Delhi, India</li>
              <li>Weight: 300g</li>
              <li>Date:01/03/2025</li>
              <li>Sender:Alex Doe</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Jaipur, India</span>
            <button
              className=" text-[#fff] bg-[#21b134] w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Delivered
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Agra, India</li>
              <li>Weight: 300g</li>
              <li>Date:15/02/2025</li>
              <li>Sender:Mitchel Rob</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Mumbai, India</span>
            <button
              className="bg-[#555] text-black w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Delhi, India</li>
              <li>Weight: 300g</li>
              <li>Date:12/02/2025</li>
              <li>Sender:James</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Mumbai, India</span>
            <button
              className="bg-[#555] text-[#FF0000] w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#FF0000] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Rejected
            </button>
            <span className="text-[#FF0000] text-[18px]">Wrong Address....</span>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Jaipur, India</li>
              <li>Weight: 300g</li>
              <li>Date:15/01/2025</li>
              <li>Sender:James</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Mumbai, India</span>
            <button
              className="bg-[#555] text-black w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Delhi, India</li>
              <li>Weight: 300g</li>
              <li>Date:13/01/2025</li>
              <li>Sender:Robert</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Agra, India</span>
            <button
              className=" text-[#fff] bg-[#21b134] w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Delivered
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Delhi, India</li>
              <li>Weight: 300g</li>
              <li>Date:15/03/2025</li>
              <li>Sender:James</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Mumbai, India</span>
            <button
              className="bg-[#555] text-[#FF0000] w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#FF0000] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Rejected
            </button>
            <span className="text-[#FF0000] text-[18px]">Wrong Address....</span>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Mumbai, India</li>
              <li>Weight: 300g</li>
              <li>Date:03/03/2025</li>
              <li>Sender:James</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Delhi, India</span>
            <button
              className=" text-[#fff] bg-[#21b134] w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Delivered
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Agra, India</li>
              <li>Weight: 500g</li>
              <li>Date:05/03/2025</li>
              <li>Sender:Abraham</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Mumbai, India</span>
            <button
              className="bg-[#555] text-black w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Pending
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Mumbai, India</li>
              <li>Weight: 200g</li>
              <li>Date:08/03/2025</li>
              <li>Sender:Alex</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Chandigarh, India</span>
            <button
              className=" text-[#fff] bg-[#21b134] w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Delivered
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-[#d9d9d9] text-black h-[150px] w-[70vw] m-[20px] p-[20px] font-semibold cursor-pointer">
          <div>
            <ul>
              <li>From: Delhi, India</li>
              <li>Weight: 300g</li>
              <li>Date:10/03/2025</li>
              <li>Sender:Roger</li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>To: Rajisthan, India</span>
            <button
              className=" text-[#fff] bg-[#21b134] w-[100px] cursor-pointer p-[5px] 
                    hover:bg-[#777] hover:text-[#fff] hover:scale-105 
                    transition-all duration-200 rounded-md shadow-md mt-[18px]"
            >
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myparcels;

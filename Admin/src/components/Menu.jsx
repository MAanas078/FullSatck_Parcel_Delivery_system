import { Link } from "react-router-dom";
import {
  FaBox,
  FaHome,
  FaClipboardList,
  FaUsers,
  FaUser,
  FaCog,
  FaHdd,
  FaClipboard,
  FaCalendarAlt,
  FaElementor,
  FaChartBar,
} from "react-icons/fa";

function Menu() {
  return (
    <div className="h-[100vh] shadow-xl">
      <ul className="flex flex-col items-center justify-center mt-[20px]">
        <Link to="/">
          <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
            <FaHome className="mr-[15px]" />
            Home
          </li>
        </Link>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
          <FaUser className="mr-[15px]" />
          Profile
        </li>

        <hr className="h-[18px]" />

        <Link to="/parcels">
          <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
            <FaBox className="mr-[15px]" />
            Parcels
          </li>
        </Link>
        <Link to="/users">
          <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
            <FaUsers className="mr-[15px]" />
            Users
          </li>
        </Link>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
          <FaClipboardList className="mr-[15px]" />
          Orders
        </li>

        <hr className="h-[18px]" />

        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
          <FaElementor className="mr-[15px]" />
          Elements
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
          <FaCog className="mr-[15px]" />
          Settings
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
          <FaHdd className="mr-[15px]" />
          Backups
        </li>

        <hr className="h-[18px]" />

        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
          <FaChartBar className="mr-[15px]" />
          Chats
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
          <FaClipboard className="mr-[15px]" />
          All Logs
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[20px] hover:text-[#E9EB77] cursor pointer mt-[20px]">
          <FaCalendarAlt className="mr-[15px]" />
          Calender
        </li>
      </ul>
    </div>
  );
}

export default Menu;

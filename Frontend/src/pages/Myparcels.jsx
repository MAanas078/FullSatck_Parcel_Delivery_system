import moment from "moment";
import { useEffect, useState } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { logOut } from "../redux/userRedux";

const MyParcels = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getParcels = async () => {
      if (!user.currentUser?.email) return;
      try {
        const res = await publicRequest.post("/parcels/me", {
          email: user.currentUser.email,
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcels();
  }, [user.currentUser?.email]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (userOpen) setUserOpen(false);
  };

  const toggleUser = () => {
    setUserOpen(!userOpen);
    if (menuOpen) setMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-900 text-white">
      {/* Top Bar */}
      <div className="relative flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
        <div className="text-2xl cursor-pointer hover:text-gray-400 transition-all duration-300" onClick={toggleMenu}>
          <FaBars />
        </div>
        <div>
          <span className="flex items-center text-white font-semibold cursor-pointer" onClick={toggleUser}>
            <FaUser className="mr-2" />
            {user.currentUser?.fullname || "User"}
          </span>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 w-[250px] h-full bg-gray-800 text-white shadow-lg z-50 p-5 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <ul className="space-y-4">
          <Link to="/allparcels"><li className="hover:text-yellow-400 cursor-pointer transition-all duration-300">All Parcels</li></Link>
          <li className="hover:text-green-400 cursor-pointer transition-all duration-300">Statements</li>
          <li className="hover:text-red-400 cursor-pointer transition-all duration-300" onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      {/* Profile Dropdown */}
      <div className={`absolute top-[60px] right-4 w-[240px] h-[200px] bg-gradient-to-r from-gray-800 to-black text-white z-50 shadow-2xl rounded-lg transition-all duration-300 ${userOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center justify-center mt-[10px]">
          <Link to="/allparcels"><li className="hover:text-yellow-400 my-2 cursor-pointer transition-all duration-300 hover:scale-105">All Parcels</li></Link>
          <li className="hover:text-green-400 my-2 cursor-pointer transition-all duration-300 hover:scale-105">Statements</li>
          <li className="hover:text-red-400 my-2 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-110" onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      {/* Parcels List */}
      <div className="flex justify-center px-[5%] mt-5">
        <div className="min-h-[90vh] max-w-[90%] md:w-[60vw] rounded-md overflow-auto">
          <h2 className="text-[18px] text-[#D9D9D9] p-[20px] rounded-md">My Parcels</h2>
          {data.length > 0 ? (
            data.map((parcel, index) => (
              <Link key={index} to={`/parcel/${parcel._id}`}>
                <div className={`grid grid-cols-2 gap-4 items-center h-[150px]  m-[20px] p-[20px] rounded-lg shadow-lg cursor-pointer bg-[#1F2937] text-white hover:shadow-2xl transition-all duration-300`}>
                  <div className="mt-[-10px]">
                    <ul className="text-lg font-semibold text-[#6B7280]">
                      <li>From: {parcel.from}</li>
                      <li>Sender: {parcel.sendername}</li>
                      <li>Weight: {parcel.weight} kg</li>
                      <li>Date: {moment(parcel.date).format("MMMM D, YYYY [at] h:mm A")}</li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-bold text-[#6B7280]">To: {parcel.to}</span>
                    <button className={`w-[120px] py-2 mt-4 rounded-md text-lg font-medium ${parcel.status === 1 ? "bg-yellow-500 text-white" : "bg-green-600 text-white"} hover:opacity-80 transition-all`}>
                      {parcel.status === 1 ? "Pending" : "Delivered"}
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-white">No parcels found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyParcels;

import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { publicRequest } from "../requestMethods";

function Parcels() {
  const [rows, setRows] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchParcels = async () => {
      if (!user.currentUser?.email) return; // Ensure user is logged in

      try {
        const res = await publicRequest.get("/parcels", {
          params: { email: user.currentUser.email }, // Fetch only user-specific parcels
        });

        setRows(
          res.data.map((parcel, index) => ({
            id: index + 1,
            senderName: parcel.sendername,
            recipientName: parcel.recipientname,
            from: parcel.from,
            to: parcel.to,
            weight: parcel.weight,
            cost: parcel.cost,
          }))
        );
      } catch (error) {
        console.error("Error fetching parcels:", error);
      }
    };

    fetchParcels();
  }, [user.currentUser?.email]); // Dependency on user email

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "senderName", headerName: "Sender Name", width: 150 },
    { field: "recipientName", headerName: "Recipient Name", width: 150 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
    { field: "weight", headerName: "Weight (gm)", type: "number", width: 130 },
    { field: "cost", headerName: "Cost ($)", type: "number", width: 100 },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between p-[10px]">
          <span className="text-[18px] text-[#444]">All Parcels</span>
          <span className="text-lg font-semibold">
            {user.currentUser?.fullname || "User"}
          </span>
        </div>
        <div className="p-3">
          <DataGrid rows={rows} columns={columns} checkboxSelection autoHeight />
        </div>
      </div>
    </div>
  );
}

export default Parcels;

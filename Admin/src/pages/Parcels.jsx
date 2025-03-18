import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods"; // Adjust path if needed


function Parcels() {
  const [data, setData] = useState([]);
  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "sendername", headerName: "Sender Name", width: 150 },
    { field: "recipientname", headerName: "Recipient Name", width: 150 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
    { field: "weight", headerName: "Weight (kg)", type: "number", width: 130 },
    { field: "cost", headerName: "Cost ($)", type: "number", width: 100 },

    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => {
        return (
          <Link to={`/parcel/${params.row._id}`}>
            <button className="bg-teal-500 text-white cursor-pointer w-[70px] px-2 py-1 rounded transition-all duration-300 hover:bg-teal-700 hover:scale-105">
              Edit
            </button>
          </Link>
        );
      },
    },

    // Delete Parcel
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <FaTrash
            className="text-red-600 hover:text-red-800 transition-all duration-300 cursor-pointer m-2 "
            onClick={() => handleDelete(params.row._id)}
          />
        );
      },
    },
  ];

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.get("/parcels");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getParcels();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/parcels/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-[30px] bg-[#d9d9d9] p-[20px] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[20px] font-semibold transition-all duration-300 hover:text-[#333]">
          All Parcels
        </h1>
        <Link to="/newparcel">
          <button className="bg-[#1e1e1e] text-white px-4 py-2 cursor-pointer hover:bg-[#333] hover:text-[#E9EB77] transition-all duration-300 rounded transform hover:scale-105 active:scale-95">
            New Parcel
          </button>
        </Link>
      </div>

      {/* DataGrid with Hover */}
      <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
        <DataGrid
          rows={data}
          getRowId={(row) => row._id}
          columns={columns}
          className="hover:cursor-pointer"
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default Parcels;

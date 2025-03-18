import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods"; // Adjust path if needed

function Users() {
  const [data, setData] = useState([]);

  const columns = [
    { field: "_id", headerName: "ID", width: 70 },
    { field: "fullname", headerName: "Full Name", width: 180 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "age", headerName: "Age", type: "number", width: 100 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "address", headerName: "Address", width: 220 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => {
        return (
          
            <FaTrash className="text-red-600 hover:text-red-800 transition-all duration-300 cursor-pointer m-2"
            onClick={() => handleDelete(params.row._id)} />
          
        );
      },
    },
  ];

  useEffect(() =>{
    const getUsers = async() =>{
      try { const res = await publicRequest.get("/users");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getUsers();
  } ,[])


  //for delete

const handleDelete = async(id) =>{
  try {
    await publicRequest(`/users${id}`)
    window.location.reload();
    
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className="m-[30px] bg-[#d9d9d9] p-[20px] rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[20px] font-semibold transition-all duration-300 hover:text-[#333]">
          All Users
        </h1>
       <Link to="/newuser">
       <button className="bg-[#1e1e1e] text-white px-4 py-2 cursor-pointer hover:bg-[#333] hover:text-[#E9EB77] transition-all duration-300 rounded transform hover:scale-105 active:scale-95">
          New User
        </button>
       </Link>
      </div>

      {/* DataGrid with Hover */}
      <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row._id}
          className="hover:cursor-pointer"
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default Users;

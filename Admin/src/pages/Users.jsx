import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Users() {
  const rows = [
    {
      id: 1,
      fullName: "John Doe",
      email: "john.doe@example.com",
      age: 28,
      country: "USA",
      address: "123 Main St, New York, NY",
      status: "Active",
    },
    {
      id: 2,
      fullName: "Emma Brown",
      email: "emma.brown@example.com",
      age: 32,
      country: "UK",
      address: "45 Queen St, London",
      status: "Inactive",
    },
    {
      id: 3,
      fullName: "Liam Wilson",
      email: "liam.wilson@example.com",
      age: 25,
      country: "Canada",
      address: "78 Maple Ave, Toronto",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Olivia Taylor",
      email: "olivia.taylor@example.com",
      age: 29,
      country: "Australia",
      address: "22 Harbour Rd, Sydney",
      status: "Pending",
    },
    {
      id: 5,
      fullName: "James White",
      email: "james.white@example.com",
      age: 35,
      country: "Germany",
      address: "56 Berliner Str, Berlin",
      status: "Active",
    },
    {
      id: 6,
      fullName: "Sophia Lee",
      email: "sophia.lee@example.com",
      age: 27,
      country: "India",
      address: "10 MG Road, Mumbai",
      status: "Inactive",
    },
    {
      id: 7,
      fullName: "Daniel Martinez",
      email: "daniel.martinez@example.com",
      age: 31,
      country: "Mexico",
      address: "99 Av. Reforma, Mexico City",
      status: "Active",
    },
    {
      id: 8,
      fullName: "Mia Clark",
      email: "mia.clark@example.com",
      age: 26,
      country: "France",
      address: "12 Rue de Paris, Paris",
      status: "Pending",
    },
    {
      id: 9,
      fullName: "William Anderson",
      email: "william.anderson@example.com",
      age: 30,
      country: "Japan",
      address: "8 Shibuya, Tokyo",
      status: "Active",
    },
    {
      id: 10,
      fullName: "Lucas King",
      email: "lucas.king@example.com",
      age: 24,
      country: "Brazil",
      address: "15 Av. Paulista, São Paulo",
      status: "Inactive",
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "fullName", headerName: "Full Name", width: 180 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "age", headerName: "Age", type: "number", width: 100 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "address", headerName: "Address", width: 220 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: () => {
        return (
          <button className="text-red-600 hover:text-red-800 transition-all duration-300 cursor-pointer">
            <FaTrash size={18} />
          </button>
        );
      },
    },
  ];

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
          rows={rows}
          columns={columns}
          className="hover:cursor-pointer"
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default Users;

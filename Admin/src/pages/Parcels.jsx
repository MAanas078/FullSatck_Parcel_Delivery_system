import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";

function Parcels() {
  const rows = [
    {
      id: 1,
      senderName: "John Doe",
      recipientName: "Alice Smith",
      from: "New York",
      to: "Los Angeles",
      weight: 2.5,
      cost: 15.99,
    },
    {
      id: 2,
      senderName: "Emma Brown",
      recipientName: "Liam Wilson",
      from: "Chicago",
      to: "Houston",
      weight: 5.2,
      cost: 25.5,
    },
    {
      id: 3,
      senderName: "Michael Johnson",
      recipientName: "Olivia Taylor",
      from: "San Francisco",
      to: "Seattle",
      weight: 3.8,
      cost: 18.75,
    },
    {
      id: 4,
      senderName: "Sophia Lee",
      recipientName: "James White",
      from: "Boston",
      to: "Miami",
      weight: 4.5,
      cost: 22.3,
    },
    {
      id: 5,
      senderName: "Daniel Martinez",
      recipientName: "Charlotte Davis",
      from: "Denver",
      to: "Phoenix",
      weight: 6.1,
      cost: 29.4,
    },
    {
      id: 6,
      senderName: "Ava Thomas",
      recipientName: "Ethan Harris",
      from: "Las Vegas",
      to: "Dallas",
      weight: 2.9,
      cost: 16.8,
    },
    {
      id: 7,
      senderName: "William Anderson",
      recipientName: "Mia Clark",
      from: "Philadelphia",
      to: "Atlanta",
      weight: 3.2,
      cost: 19.5,
    },
    {
      id: 8,
      senderName: "Isabella Wright",
      recipientName: "Benjamin Hall",
      from: "Detroit",
      to: "San Diego",
      weight: 4.7,
      cost: 23.9,
    },
    {
      id: 9,
      senderName: "Lucas King",
      recipientName: "Amelia Young",
      from: "Seattle",
      to: "New Orleans",
      weight: 5.6,
      cost: 27.75,
    },
    {
      id: 10,
      senderName: "Mason Scott",
      recipientName: "Harper Adams",
      from: "Portland",
      to: "Minneapolis",
      weight: 3.9,
      cost: 21.1,
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "senderName", headerName: "Sender Name", width: 150 },
    { field: "recipientName", headerName: "Recipient Name", width: 150 },
    { field: "from", headerName: "From", width: 120 },
    { field: "to", headerName: "To", width: 120 },
    { field: "weight", headerName: "Weight (kg)", type: "number", width: 130 },
    { field: "cost", headerName: "Cost ($)", type: "number", width: 100 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => {
        return (
          <button className="bg-teal-500 text-white cursor-pointer w-[70px] px-2 py-1 rounded transition-all duration-300 hover:bg-teal-700 hover:scale-105">
            Edit
          </button>
        );
      },
    },

    // Delete Parcel
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
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
          All Parcels
        </h1>
        <button className="bg-[#1e1e1e] text-white px-4 py-2 cursor-pointer hover:bg-[#333] hover:text-[#E9EB77] transition-all duration-300 rounded transform hover:scale-105 active:scale-95">
          New Parcel
        </button>
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

export default Parcels;

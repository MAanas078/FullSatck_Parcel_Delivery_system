import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

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
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#444] text-[18px] m-2 cursor-pointer " />
        </Link>

        <div className="flex justify-between p-[10px] ">
          <span className="text-[18px] text-[#444]">All Parcels</span>
          <span className="font-semibold text-[#444]">James</span>
        </div>
        <div className="p-3">
          <DataGrid rows={rows} columns={columns} checkboxSelection />
        </div>
      </div>
    </div>
  );
}

export default Parcels;

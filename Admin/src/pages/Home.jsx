import { HiArrowSmallUp, HiArrowLongDown } from "react-icons/hi2";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
function Home() {
  const [parcels, setParcels] = useState([]);
  const [users, setUsers] = useState([]);

  const UsersCount = users.length;
  const deliveredCount = parcels.filter((parcel) => parcel.status === 3).length;
  const pendingCount = parcels.filter((parcel) => parcel.status === 1).length;

  //data fetching for parcels
  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.get("/parcels");
        setParcels(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getParcels();
  }, []);

  //data fetching for users

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/Users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <div className="flex items-center">
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Users</h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">{UsersCount}</span>
          </div>
        </div>
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Delivered Parcels</h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">{deliveredCount}</span>
          </div>
        </div>
        <div className="flex flex-col text-[#d9d9d9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Pending Parcels</h1>
            <div className="flex items-center mt-[20px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">{pendingCount}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-[450px] w-[500px] text-[#fff]">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: pendingCount, label: "Pending Parcels" },
                  { id: 1, value: deliveredCount, label: "Delivered Parcels" },
                  { id: 2, value: UsersCount, label: "Users" },
                ],
                innerRadius: 20,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -45,
                endAngle: 245,
                cx: 150,
                cy: 150,
              },
            ]}
          />
        </div>
        <div className="h-[350px] w-[300px] shadow-lg p-[20px]">
          <h2 className="flex px-[20px] text-[#fff]">Recent Users</h2>
          <ol className="flex font-semibold flex-col justify-end px-[20px] mt-[10px] text-[#d9d9d9]">
            {users
              .slice(-5)
              .reverse()
              .map((user, index) => (
                <li key={user._id}>
                  {index + 1}. {user.fullname}
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;

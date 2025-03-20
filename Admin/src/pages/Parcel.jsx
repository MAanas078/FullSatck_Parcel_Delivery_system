import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
function Parcel() {
  const [parcel, setParcel] = useState({});
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  useEffect(() => {
    const getParcel = async () => {
      try {
        const res = await publicRequest.get("/parcels/find/" + parcelId);
        setParcel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcel();
  }, [parcelId]);

  const habdleUpdate = async () =>{
    try {
      await publicRequest.put(`/parcels/${parcelId}`, inputs)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="m-[30px] bg-[#fff] p-[20px] ">
      <h2 className="font-semibold"> Edit Parcel</h2>
      <div className="flex flex-wrap">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">From</label>
            <input
              type="text"
              placeholder={parcel.from}
              name="from"
              onChange={handleChange}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">To</label>
            <input
              type="text"
              name="to"
              onChange={handleChange}
              placeholder={parcel.to}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Sender Name</label>
            <input
              type="text"
              name="sendername"
              onChange={handleChange}
              placeholder={parcel.sendername}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Recipient Name</label>
            <input
              type="text"
              name="recipientname"
              onChange={handleChange}
              placeholder={parcel.recipientname}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Sender Email</label>
            <input
              type="text"
              name="senderemail"
              onChange={handleChange}
              placeholder={parcel.senderemail}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Recipient Email</label>
            <input
              type="text"
              name="recipientemail"
              onChange={handleChange}
              placeholder={parcel.recipientemail}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>
        </div>

        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Weight</label>
            <input
              type="number"
              name="weight"
              onChange={handleChange}
              placeholder={parcel.weight}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Cost</label>
            <input
              type="number"
              name="cost"
              onChange={handleChange}
              placeholder={parcel.cost}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              placeholder={parcel.date}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Note</label>
            <textarea
            type="text"
            name="note"
              onChange={handleChange}
              placeholder={parcel.note}
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>
          <button
            className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] rounded-md 
  hover:text-[#E9EB77] hover:bg-[#333] hover:scale-105 hover:shadow-lg 
  transition-all duration-300 ease-in-out transform"
  onClick={habdleUpdate}
          >
            Update
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold ">Feedback</h2>
          <span>Parcel Recived in Good Condition..</span>
          {parcel.status === 1 || parcel.status === 0 ? <span className="text-red-500 text-[18px]">Pending</span> : <span className="text-green-500 text-[18px]">Delivered</span>}
        </div>
      </div>
    </div>
  );
}

export default Parcel;

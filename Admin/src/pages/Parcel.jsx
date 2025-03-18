
function Parcel() {
   
    


  return (
    <div className="m-[30px] bg-[#fff] p-[20px] ">
      <h2 className="font-semibold">Parcel</h2>
      <div className="flex flex-wrap">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">From</label>
            <input
              type="text"
              placeholder="Ontario, USA"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">To</label>
            <input
              type="text"
              placeholder="New York, USA"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Sender Name</label>
            <input
              type="text"
              placeholder="James"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Recipient Name</label>
            <input
              type="text"
              placeholder="Alex"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Sender Email</label>
            <input
              type="text"
              placeholder="James@gmail.com"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Recipient Email</label>
            <input
              type="text"
              placeholder="Alex@gmail.com"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>
        </div>

        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Weight</label>
            <input
              type="number"
              placeholder="200gm"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Cost</label>
            <input
              type="number"
              placeholder="$100"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Date</label>
            <input
              type="date"
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <label className="text-gray-700 font-medium">Note</label>
            <textarea
              placeholder="Something About Your Parcel...."
              className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>
          <button
            className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] rounded-md 
  hover:text-[#E9EB77] hover:bg-[#333] hover:scale-105 hover:shadow-lg 
  transition-all duration-300 ease-in-out transform"
        
          >
            Update
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold ">Feedback</h2>
          <span>Parcel Recived in Good Condition..</span>
          <span className="text-green-500 text-[18px]">Delivered</span>
        </div>
      </div>
    </div>
  );
}

export default Parcel;

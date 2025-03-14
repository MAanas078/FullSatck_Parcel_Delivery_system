function NewUser() {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New User</h2>

      <div className="flex flex-col my-[20px]">
        <label className="text-gray-700 font-medium">Full Name</label>
        <input
          type="text"
          placeholder="James Ton"
          className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label className="text-gray-700 font-medium">Email</label>
        <input
          type="text"
          placeholder="James@gmail.com"
          className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label className="text-gray-700 font-medium">Age</label>
        <input
          type="Number"
          placeholder="20"
          className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label className="text-gray-700 font-medium">Country</label>
        <input
          type="text"
          placeholder="India"
          className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label className="text-gray-700 font-medium">Address</label>
        <input
          type="text"
          placeholder="Delhi-01234"
          className="border-2 border-gray-600 rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
        />
      </div>
      <button
        className="bg-[#1e1e1e] cursor-pointer text-white p-[10px] w-[300px] rounded-md 
  hover:text-[#E9EB77] hover:bg-[#333] hover:scale-105 hover:shadow-lg 
  transition-all duration-300 ease-in-out transform"
      >
        Create
      </button>
    </div>
  );
}

export default NewUser;

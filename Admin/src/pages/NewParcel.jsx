import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewParcel = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    try {
      await publicRequest.post("/parcels", inputs);

      // Clear the input fields
      setInputs({});

      // Show success toast
      toast.success(
        "Parcel has been successfully posted and emails have been sent to the Sender and Recipient!"
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to post the parcel. Please try again.");
    }
  };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New Parcel</h2>

      {/* Flex Container with Fix */}
      <div className="flex flex-wrap md:flex-nowrap gap-6">
        {/* Left Section */}
        <div className="m-[20px] flex flex-col gap-y-5">
          {[
            { label: "From", name: "from", placeholder: "Antorio, USA" },
            { label: "To", name: "to", placeholder: "Saint Mary, USA" },
            { label: "Sender Name", name: "sendername", placeholder: "James Doe" },
            { label: "Recipient Name", name: "recipientname", placeholder: "Alex" },
            { label: "Sender Email", name: "senderemail", placeholder: "jamesdoe@gmail.com", type: "email" },
            { label: "Recipient Email", name: "recipientemail", placeholder: "alex@gmail.com", type: "email" },
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-700 font-medium">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={inputs[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="border-2 border-[#555] rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
                required
              />
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="m-[20px] flex flex-col gap-y-5">
          {[
            { label: "Weight", name: "weight", placeholder: "20g", type: "number" },
            { label: "Cost", name: "cost", placeholder: "$50", type: "number" },
            { label: "Date", name: "date", placeholder: "25/06/2024", type: "date" },
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-700 font-medium">{field.label}</label>
              <input
                type={field.type || "text"}
                name={field.name}
                value={inputs[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="border-2 border-[#555] rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
              />
            </div>
          ))}

          {/* Note Field */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Note</label>
            <textarea
              name="note"
              value={inputs.note || ""}
              onChange={handleChange}
              placeholder="Perishable goods"
              className="border-2 border-[#555] rounded-md p-3 w-[300px] focus:ring-2 focus:ring-gray-500 transition-all"
            />
          </div>

          {/* Button */}
          <button
            className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[300px] rounded-md 
              hover:text-[#E9EB77] hover:bg-[#333] hover:scale-105 hover:shadow-lg 
              transition-all duration-300 ease-in-out transform"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewParcel;

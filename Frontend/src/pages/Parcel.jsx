import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Parcel() {
  const location = useLocation();
  const [parcel, setParcel] = useState({});
  const [feedback, setFeedback] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const parcelId = location.pathname.split("/")[2];

  useEffect(() => {
    const getParcel = async () => {
      try {
        const res = await publicRequest.get("/parcels/find/" + parcelId);
        setParcel(res.data);
      } catch (error) {
        console.error("Error fetching parcel:", error);
        toast.error("Failed to fetch parcel details.");
      }
    };

    getParcel();
  }, [parcelId]);

  const handleSubmit = () => {
    if (feedback.trim() === "") {
      toast.warn("Feedback cannot be empty!");
      return;
    }

    setShowPopup(true);
    toast.success("Feedback submitted successfully!");

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    setFeedback("");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="bg-white h-[80vh] w-[60vw] rounded-md relative p-5 shadow-lg">
        <Link to="/myparcels">
          <FaArrowLeft className="text-gray-600 text-lg cursor-pointer absolute top-4 left-4" />
        </Link>

        <div className="flex justify-between mt-10">
          <div className="w-1/2 p-5">
            <ul className="text-gray-700">
              <li className="mb-3">From: {parcel.from}</li>
              <li className="mb-3">Weight: {parcel.weight}gm</li>
              <li>Date: {moment(parcel.date).format("MMMM D, YYYY [at] h:mm A")}</li>
              <li className="mb-3">Sender: {parcel.sendername}</li>
              <li className="mb-3">To: {parcel.to}</li>
              <li className="mb-3">Cost: {parcel.cost}$</li>
              <li className="mb-3">Recipient: {parcel.recipientname}</li>
              <li className="mb-3">TrackID: {parcel._id}</li>
              <li className="mb-3">Note: {parcel.note}</li>
              <button
                className={`w-[120px] py-2 mt-4 rounded-md text-lg font-medium 
                  ${parcel.status === 1 
                  ? "bg-yellow-500 text-white" 
                  : "bg-green-600 text-white"} 
                  hover:opacity-80 transition-all`}
              >
                {parcel.status === 1 ? "Pending" : "Delivered"}
              </button>
            </ul>
          </div>
          <div className="w-1/2 p-5">
            <ul className="text-gray-700">
              <li className="mb-3">Sender Email: {parcel.senderemail || "N/A"}</li>
              <li className="mb-3">Recipient Email: {parcel.recipientemail || "N/A"}</li>
            </ul>
            <div className="flex justify-center items-center w-full">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                cols={15}
                rows={5}
                className="w-full bg-gray-100 max-w-[400px] h-[150px] mt-5 p-4 text-gray-600 
                  border-2 border-gray-300 rounded-lg focus:border-blue-500 
                  focus:ring-2 focus:ring-blue-300 outline-none transition-all 
                  duration-300 placeholder-gray-400 resize-none shadow-md"
                placeholder="Leave a feedback"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white w-full mt-4 p-2 rounded-md 
                   hover:bg-blue-600 hover:scale-105 hover:shadow-lg
                   transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Parcel;

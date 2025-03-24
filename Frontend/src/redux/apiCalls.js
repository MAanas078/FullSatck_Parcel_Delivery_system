import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log("📤 Sending login request with:", user);

    const res = await publicRequest.post("/auth/login", user, { withCredentials: true });

    console.log("✅ Login successful:", res.data);

    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.error("❌ Login failed:", error.response?.data || error.message);

    // More detailed error handling
    if (error.response) {
      if (error.response.status === 401) {
        console.error("🚨 Unauthorized: User not found or wrong password.");
      } else if (error.response.status === 500) {
        console.error("🔥 Internal Server Error");
      }
    }

    dispatch(loginFailure(error.response?.data || "Login failed"));
  }
};

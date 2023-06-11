import axios from "axios";

const BASE_URL = "https://localhost:7265/api/user";

const rentApi = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
});

const plannedEvents = async () => {
  try {
    const response = await rentApi.get("/planned-events");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export { plannedEvents };

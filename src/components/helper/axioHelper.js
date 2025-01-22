import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";

const CAR_API = API_URL + "/cars";

const CAR_BOOKING_API = API_URL + "/booking";

export const addCar = async (carObj) => {
  const { data } = await axios.post(CAR_API, carObj);
  return data;
};

export const getAllCars = async () => {
  try {
    const { data } = await axios.get(CAR_API);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCar = async (_id) => {
  const { data } = await axios.delete(CAR_API + "/" + _id);
  return data;
};

//book car

export const bookCar = async (bookingInfo) => {
  try {
    const { data } = await axios.post(CAR_BOOKING_API, bookingInfo);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

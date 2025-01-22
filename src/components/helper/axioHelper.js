import axios from "axios";

const CAR_API = process.env.REACT_APP_API_URL + "/cars";

const CAR_BOOKING_API = process.env.REACT_APP_API_URL + "/booking";

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

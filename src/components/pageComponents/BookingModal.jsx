import React, { useState } from "react";
import { CarCard } from "./CarCard";
import { BookingForm } from "../formComponents/BookingForm";
import { bookCar } from "../helper/axioHelper";
import { toast } from "react-toastify";

export const BookingModal = ({ car }) => {
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
      carId: car._id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await bookCar(formValue);
    window.my_modal_4.close();
    toast[status](message);
  };

  return (
    <form className='modal-box w-11/12 max-w-5xl' onSubmit={handleSubmit}>
      <div className='border-b-[1px] pb-2 '>
        <h3 className=' text-[30px] font-light text-gray-400'>Rent A Car Now!</h3>
      </div>
      <div
        className='grid grid-cols-1
    md:grid-cols-2 p-5'
      >
        <div>
          <CarCard car={car} />
        </div>
        <div>
          <BookingForm handleChange={handleChange} />
          <div className='flex justify-end gap-5'>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              type='button'
              onClick={() => {
                window.my_modal_4.close();
              }}
            >
              Close
            </button>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
              type='submit'
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

import React, { useState } from "react";
import { BookingModal } from "./BookingModal";
import { CarCard } from "./CarCard";

export const CarsList = ({ carsList }) => {
  const [selectedCar, setSelectedCar] = useState([]);

  console.log(carsList);
  return (
    <div className='py-12 sm:py-20 mx-auto max-w-7xl px-6 lg:px-8' id='cars'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {carsList &&
          carsList.map((car, index) => (
            <div
              key={index}
              onClick={() => {
                window.my_modal_4.showModal();
                setSelectedCar(car);
              }}
            >
              <CarCard car={car} />
            </div>
          ))}
        <dialog id='my_modal_4' className='modal'>
          <BookingModal car={selectedCar} />
        </dialog>
      </div>
    </div>
  );
};

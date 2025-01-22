import React, { useState } from "react";
import { storeLocations } from "../../constants";

export const BookingForm = ({ handleChange }) => {
  const [storeLocation, setStoreLocation] = useState(storeLocations);

  const today = new Date();

  return (
    <div>
      <div className='flex flex-col w-full mb-5'>
        <label className='text-gray-400'>PickUp Location</label>
        <select
          className='select select-bordered w-full max-w-lg'
          name='location'
          onChange={handleChange}
          required
        >
          <option disabled>PickUp Location?</option>
          {storeLocation && storeLocation.map((loc, index) => <option key={index}>{loc}</option>)}
        </select>
      </div>
      <div className='flex flec-col gap-5 mb-5'>
        <div className='flex flex-col w-full'>
          <label className='text-gray-400'>Pick Up Date</label>
          <input
            type='date'
            min={today}
            onChange={handleChange}
            required
            placeholder='Type here'
            name='pickUpDate'
            className='input input-bordered w-full max-w-lg'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label className='text-gray-400'>Drop Off Date</label>
          <input
            type='date'
            onChange={handleChange}
            required
            placeholder='Type here'
            name='dropOffDate'
            className='input input-bordered w-full max-w-lg'
          />
        </div>
      </div>
      <div className='flex gap-5 '>
        <div className='flex flex-col w-full mb-5'>
          <label className='text-gray-400'>Pick Up Time</label>
          <input
            type='time'
            onChange={handleChange}
            required
            name='pickUpTime'
            placeholder='Type here'
            className='input input-bordered w-full max-w-lg'
          />
        </div>
        <div className='flex flex-col w-full mb-5'>
          <label className='text-gray-400'>Drop Off Time</label>
          <input
            type='time'
            name='dropOffTime'
            onChange={handleChange}
            required
            placeholder='Type here'
            className='input input-bordered w-full max-w-lg'
          />
        </div>
      </div>

      <div className='flex flex-col w-full mb-5'>
        <label className='text-gray-400'>Name</label>
        <input
          type='text'
          placeholder='John Doe'
          onChange={handleChange}
          required
          name='name'
          className='input input-bordered w-full max-w-lg'
        />
      </div>
      <div className='flex flex-col w-full mb-5'>
        <label className='text-gray-400'>Email</label>
        <input
          type='email'
          placeholder='Johndoe@email.com'
          onChange={handleChange}
          required
          name='email'
          className='input input-bordered w-full max-w-lg'
        />
      </div>
      <div className='flex flex-col w-full mb-5'>
        <label className='text-gray-400'>Contact Number</label>
        <input
          type='number'
          placeholder='0489898989'
          onChange={handleChange}
          required
          name='contactNumber'
          className='input input-bordered w-full max-w-lg'
        />
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";

export const CarsFilterOptions = ({ cars, setCarBrand }) => {
  const [brandList, setBrandList] = useState();
  const BrandSet = new Set();

  useEffect(() => {
    if (cars) {
      filterCarList();
    }
  }, [cars]);
  console.log(cars);

  //get list of brand
  const filterCarList = () => {
    cars?.forEach((element) => {
      BrandSet.add(element.manufacture);
    });
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div
      className='mx-auto max-w-7xl px-6 lg:px-8 mt-10 flex items-center justify-between'
      id='cars'
    >
      <div>
        <h2 className='text-[30px] font-bold'>Cars Catalog</h2>
        <h2>Explore our cars you might likes</h2>
      </div>
      <div className='flex gap-5 '>
        <select
          className='select select-bordered w-full max-w-xs border-none '
          // onChange={(e) => orderCarList(e.target.value)}
        >
          <option defaultValue='Price'>Price</option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className='select select-bordered w-full md:block max-w-xs hidden border-none'
          onChange={(e) => setCarBrand(e.target.value)}
        >
          <option defaultValue='Manufactural'>Manufactural</option>
          {brandList && brandList.map((brand, index) => <option key={index}>{brand}</option>)}
        </select>
      </div>
    </div>
  );
};

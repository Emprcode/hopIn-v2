import React from "react";
import { RootLayout } from "../../components/layout/RootLayout";
import {
  Achievement,
  CarsFilterOptions,
  CarsList,
  Feature,
  GetStarted,
  Hero,
  Testomonial,
} from "../../components/pageComponents";
import { Link } from "react-router-dom";

const LandingPage = ({ cars, setCarBrand, orderCarList }) => {
  return (
    <RootLayout>
      <Hero />
      {/* <SearchInput /> */}
      <CarsFilterOptions cars={cars} setCarBrand={setCarBrand} orderCarList={orderCarList} />
      <CarsList carsList={cars} />
      <div className='flex justify-center '>
        <Link to='/cars'>
          <button
            className='`p-2 mt-2` bg-indigo-500 text-white
          px-4 rounded-full
          hover:scale-105 transition-all '
          >
            Explore More Cars
          </button>
        </Link>
      </div>
      <Feature />
      <Achievement />
      <Testomonial />
      <GetStarted />
    </RootLayout>
  );
};

export default LandingPage;

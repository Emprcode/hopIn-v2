import { RootLayout } from "../../components/layout/RootLayout";
import { CarsFilterOptions, CarsList, ServiceComponent } from "../../components/pageComponents";

const Cars = ({ cars, carsList, setCarBrand, orderCarList }) => {
  return (
    <RootLayout>
      <div className='bg-gray-50 py-24 sm:py-25'>
        <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
          <h2 className='text-center text-base/7 font-semibold text-indigo-600'>All Cars</h2>
          <p className='mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl'>
            Everything you need to get on road
          </p>
        </div>
        <CarsFilterOptions cars={cars} setCarBrand={setCarBrand} />
        <CarsList carsList={cars} />
        <ServiceComponent />
      </div>
    </RootLayout>
  );
};

export default Cars;

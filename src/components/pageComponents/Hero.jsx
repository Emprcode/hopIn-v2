import { car } from "../../assets";

export const Hero = () => {
  return (
    <div className='overflow-hidden bg-white py-20 sm:py-20'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8  lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <h2 className='text-base font-semibold leading-7 text-indigo-600'>Easy Rental</h2>
              <p className='mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                Find, Book or Rent a car - quickly and easily
              </p>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Streamline your car rental experience with our effortless booking process.
              </p>
              <a href='#cars'>
                <button
                  className='p-2 mt-5 bg-indigo-500 text-white
            px-4 rounded-full
            hover:scale-105 transition-all'
                >
                  Explore Cars
                </button>
              </a>
            </div>
          </div>
          <div>
            <img
              alt='car'
              src={car}
              width={2432}
              height={1442}
              className='w-full sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

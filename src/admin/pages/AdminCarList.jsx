import { useEffect, useState } from "react";
import { deleteCar, getAllCars } from "../../components/helper/axioHelper";
import { RootLayout } from "../../components/layout/RootLayout";
import { AdminHeader } from "../layout/AdminHeader";
import { AdminLayout } from "../layout/AdminLayout";

const AdminCarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    const { status, message, result } = await getAllCars();
    status === "success" && setCars(result);
  };

  const handleOnDelete = async (_id) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      const result = await deleteCar(_id);
      console.log(result);
    }
  };
  return (
    <AdminLayout>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            All Cars
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <div className="bg-white px-5 py-5 lg:px-30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              {/* <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  All Cars
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Learn how to grow your business with our expert advice.
                </p>
              </div> */}

              <ul role="list" className="divide-y divide-gray-100">
                {cars.map((car, i) => (
                  <li key={i} className="flex justify-between gap-x-6 py-5">
                    <div className="flex flex-wrap min-w-0 gap-x-4">
                      <img
                        alt="car"
                        src={car.image}
                        width={210}
                        height={180}
                        className=" flex-none rounded-full bg-gray-50"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {car.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          $ {car.price}.00
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <button
                        className="p-2 mt-5 bg-red-500 text-white
            px-4 rounded-full
            hover:scale-105 transition-all "
                        onClick={() => handleOnDelete(car._id)}
                      >
                        Delete
                      </button>{" "}
                      <p className="text-sm leading-6 text-gray-900">
                        {car.seat}
                      </p>
                      {car ? (
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Last seen <time dateTime={car.mpg}>{car.gear}</time>
                        </p>
                      ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-xs leading-5 text-gray-500">
                            Online
                          </p>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AdminCarList;

import { PhotoIcon } from "@heroicons/react/24/solid";
import { RootLayout } from "../../components/layout/RootLayout";
import { useState } from "react";
import { addCar } from "../../components/helper/axioHelper";
import { toast } from "react-toastify";
import { AdminHeader } from "../layout/AdminHeader";
import { AdminLayout } from "../layout/AdminLayout";

const AddCar = () => {
  const [carData, setCarData] = useState({});

  //   const inputs = [
  //     {
  //       name: "name",
  //       type: "text",
  //       label: "User Name",
  //       placeholder: "Jack",
  //       required: true,
  //     },
  //     {
  //       name: "email",
  //       type: "email",
  //       label: "Email",
  //       placeholder: "Jack@gmail.com",
  //       required: true,
  //     },
  //     {
  //       name: "password",
  //       type: "password",
  //       label: "Password",
  //       placeholder: "*****",
  //       required: true,
  //     },
  //     {
  //       name: "confirmPassword",
  //       type: "password",
  //       label: "Confirm Password",
  //       placeholder: "*****",
  //       required: true,
  //     },
  //   ];

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  console.log(carData);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { status, message } = await addCar(carData);
    toast[status](message);
  };
  return (
    <AdminLayout>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Add Car
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <div className="flex min-h-full flex-1 flex-col justify-center px-20 py-12 lg:px-30">
            <form onSubmit={handleOnSubmit}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  {/* <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Add New Car
                  </h2> */}
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Please add the car below
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Car Name
                      </label>
                      <div className="mt-2">
                        <input
                          autoComplete="given-name"
                          name="name"
                          type="text"
                          onChange={handleOnChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2">
                        <input
                          name="price"
                          type="text"
                          onChange={handleOnChange}
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    {/* <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="manufacture"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Manufacture
                      </label>
                      <div className="mt-2">
                        <select
                          name="manufacture"
                          onChange={handleOnChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option defaultValue="select">Select</option>
                          <option>Toyota</option>
                          <option>Mazda</option>
                          <option>Kia</option>
                          <option>Lexus</option>
                          <option>Hyundai</option>
                          <option>Honda</option>
                          <option>Mercedes</option>
                          <option>Audi</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="gear"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Gear
                      </label>
                      <div className="mt-2">
                        <select
                          name="gear"
                          onChange={handleOnChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option defaultValue="select">Select</option>
                          <option>Manual</option>
                          <option>Auto</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Type
                      </label>
                      <div className="mt-2">
                        <select
                          name="type"
                          onChange={handleOnChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option defaultValue="select">Select</option>
                          <option>Petrol</option>
                          <option>Deisel</option>
                          <option>Hybrid</option>
                        </select>
                      </div>
                    </div>

                    {/* <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Seat
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> */}

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="mpg"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        MPG
                      </label>
                      <div className="mt-2">
                        <input
                          name="mpg"
                          type="number"
                          onChange={handleOnChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="seat"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Seat
                      </label>
                      <div className="mt-2">
                        <input
                          name="seat"
                          type="number"
                          onChange={handleOnChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Image
                      </label>
                      <div className="mt-2">
                        <input
                          name="image"
                          type="text"
                          onChange={handleOnChange}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    {/* <div className="col-span-full">
                  <label
                    htmlFor="car-image"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Image
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        aria-hidden="true"
                        className="mx-auto h-12 w-12 text-gray-300"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="image"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Car
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </AdminLayout>
  );
};

export default AddCar;

import { car1 } from "../../assets";

export const GetStarted = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 rounded-lg py-22 sm:py-40 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              We stand as your trusted partner. Our dedication to Quality,
              Innovation and Customer satisfaction set us apart.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="transform scale-x-[-1]">
            <img
              src={car1}
              alt="car"
              width={600}
              height={800}
              className="w-full object-cover align-middle "
            />
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
};

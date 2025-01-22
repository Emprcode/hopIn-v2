import React from "react";

export const ServiceComponent = () => {
  return (
    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
              User friendly
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Our car rental service is designed to be user-friendly, offering a
              seamless and hassle-free experience from booking to return.
            </p>
          </div>
          <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
            <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
              <img
                className="size-full object-cover object-top"
                src="https://img.freepik.com/free-vector/online-activism-abstract-concept-vector-illustration-internet-activism-digital-communication-social-media-posting-information-delivery-target-audience-hashtag-marketing-abstract-metaphor_335657-1924.jpg?semt=ais_hybrid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
      </div>
      <div className="relative max-lg:row-start-1">
        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
              Performance
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Our service currently caters to thousands of satisfied customers,
              and as demand continues to grow, we are constantly adapting to
              meet the needs of an expanding user base.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
            <img
              className="w-full max-lg:max-w-xs"
              src="https://img.freepik.com/free-vector/successful-businessman-running-up-career-stairs-rising-arrow-star_335657-3299.jpg?semt=ais_hybrid"
              alt=""
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
      </div>
      <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
        <div className="absolute inset-px rounded-lg bg-white"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
          <div className="px-8 pt-8 sm:px-10 sm:pt-10">
            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
              Security
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              we prioritize security by implementing advanced encryption, secure
              payment systems, and continuous monitoring to ensure the safety
              and privacy of our users.
            </p>
          </div>
          <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
            <img
              className="h-[min(152px,40cqw)] object-cover object-center"
              src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
              alt=""
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
      </div>
      <div className="relative lg:row-span-2">
        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
          <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
            <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
              Latest Technology
            </p>
            <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
              Our latest cars feature advanced navigation, autonomous driving,
              and seamless smartphone integration, while our 24/7 customer
              support ensures you receive expert assistance whenever needed.
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center px-8 mt-5 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2 ">
            <img
              className="w-full max-lg:max-w-xs size-full object-cover object-top rounded"
              src="https://img.freepik.com/free-photo/car-headlight-buildings-reflecting-headlight-car_181624-44601.jpg?semt=ais_hybrid"
              alt=""
            />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
      </div>
    </div>
  );
};

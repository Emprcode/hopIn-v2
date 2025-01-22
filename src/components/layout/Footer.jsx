import React from "react";
import { footerLinks } from "../../constants";
import { Link } from "react-router-dom";
import { logo } from "../../assets";

export const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="transform scale-x-[-1]">
            <img src={logo} alt="logo" width={120} height={100} />
          </div>

          <p className="text-base text-gray-700">
            {" "}
            HopIn 2023 <br /> All rights reserved
          </p>
        </div>
        <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
          {footerLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-6 text-base min-w-[170px]"
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} to={item.url} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@HopIn 2023. All rights reserved. </p>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <Link to="/" className="text-gray-500">
            Privacy policy
          </Link>
          <Link to="/" className="px-5 text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

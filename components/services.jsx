import { ovo } from "@/app/fonts";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        What I Offer
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>My Services</h2>
      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}
      >
        Experienced Project Manager and Certified PMP® professional with over 7
        years of proven expertise in managing, operating, and maintaining
        educational and governmental buildings.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            className={`border border-gray-400 rounded-lg px-8 py-12 hover:boxShadowBlack cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 `}
            key={index}
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className={`text-lg my-4 text-gray-700`}>{title}</h3>
            <p className={`text-sm text-gray-600 leading-5`}>{description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

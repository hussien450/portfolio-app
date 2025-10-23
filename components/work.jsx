import { ovo } from "@/app/fonts";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Work() {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        My portfolio
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>
        My latest work
      </h2>
      <p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 ${ovo.className}`}
      >
        Welcome to my Project Manager portfolio! Explore a collection of
        projects showcasing my expertise in Project Managing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
        {workData.map((Project, index) => (
          <div
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${Project.bgImage})` }}
          >
            <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{Project.title}</h2>
                <p className="text-sm text-gray-700">{Project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition duration-300">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
            <a href="/" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-[#fcf4ff] duration-500">Show More <Image className="w-4" src={assets.right_arrow_bold} alt=" right arrow bold" /></a>
    </div>
  );
}

export default Work;

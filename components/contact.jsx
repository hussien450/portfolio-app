import { ovo } from "../app/fonts";
import { assets } from "../assets/assets";
import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>
        Contact Me
      </h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>Get in touch</h2>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div className="flex-1">
          <h3 className="text-2xl mb-4">Let's talk</h3>
          <p className="text-gray-600 mb-6">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image src={assets.mail_icon} alt="email" className="w-6" />
              <p>ahmed.abdelrazek.pro@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={assets.call_icon} alt="call" className="w-6" />
              <p>+966591113271</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-400 rounded-lg p-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-400 rounded-lg p-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="border border-gray-400 rounded-lg p-3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-black text-white rounded-lg p-3 cursor-pointer"
            >
              Send Message
              <Image src={assets.right_arrow_white} alt="arrow" className="w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

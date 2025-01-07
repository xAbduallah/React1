import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="w-1/2 m-11">
      <div className="text-center font-bold text-5xl bg-gradient-to-r from-[#00DAFD] to-[#C148FA] text-transparent bg-clip-text mb-12">
        Contact Us
      </div>
      <div className="p-6 bg-[#01293D] rounded-lg">
        <form className="space-y-6 max-w-5xl mx-auto">
          <div>
            <label htmlFor="name" className="block font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

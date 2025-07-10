"use client";

import React, { useState,useEffect} from "react";
import { Metadata } from "next"
export const metadata:Metadata={
  title:{
    absolute:"PupCart-Careers Apply Page"
  }
}

export default function ApplicationForm() {
  useEffect(() => {
    document.title = "PupCart - Apply Page";
  }, [])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", resume: "" }); // Clear form
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-primary">Apply Now</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="John"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary 0"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="Email"
            required
            placeholder="abc123@gmail.com"
            className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            required
            placeholder="1234567890"
            className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-gray-700">Resume Link</label>
          <input
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            type="url"
            required
            placeholder="https://your-resume.com"
            className="w-full mt-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-xl hover:bg-primary transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

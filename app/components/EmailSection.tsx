"use client";
import React, { FormEvent, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import axios from "axios";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const data = {
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };

    const response = await axios.post("api/send", data);

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };
  return (
    <div id="connect" className=" md:grid md:grid-cols-2 gap-10">
      <div className="flex flex-col gap-3">
        <h5 className="text-2xl font-bold text-white">Let's Connect</h5>
        <p className="text-[#ADB7BE]">
          I'm currently looking for new opportunities and would love a chance to
          connect. My inbox is always open - don't be shy!{" "}
        </p>
        <div className="flex text-white gap-5 mb-7 mt-2">
          <Link href={"https://github.com/JoshRosenfeld10"} target="_blank">
            <GitHubIcon fontSize="large" className=" scale-[1.20]" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/josh-rosenfeld-992355268/"}
            target="_blank"
            className="text-xl"
          >
            <LinkedInIcon fontSize="large" className="scale-[1.40]" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-white text-xl">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="email@domain.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className=" bg-gradient-to-r from-primary-500 to-secondary-500 hover:brightness-[.85] text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-150 ease-linear"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EmailSection;

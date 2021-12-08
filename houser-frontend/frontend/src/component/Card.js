import React from "react";
import "../../src/App.css";

export default function Card() {
  return (
    <div>
      <section className="pb-20 bg-gray-300 -mt-24" id="about-section">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>{" "}
                  </div>
                  <h6 className="text-xl font-semibold">Awarded Agency</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    {" "}
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>{" "}
                  </div>
                  <h6 className="text-xl font-semibold">Free Revisions</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    {" "}
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>{" "}
                  </div>
                  <h6 className="text-xl font-semibold">Verified Company</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    {" "}
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>{" "}
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {" "}
                Working with us is a pleasure{" "}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                {" "}
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.{" "}
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-8 text-gray-700">
                {" "}
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.{" "}
              </p>{" "}
              <a
                href="https://github.com/abhinavs/cookie"
                className="font-bold text-gray-500 px-8 py-4 rounded-md bg-gray-50 hover:bg-gray-400 hover:text-gray-50"
              >
                Check Cookie!
              </a>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600 transform -rotate-4 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
                <img
                  alt="..."
                  src="https://www.become.co/blog/wp-content/uploads/2019/03/iStock-584498720-1-1-1024x576.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  {" "}
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    {" "}
                    Top Notch Services{" "}
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    {" "}
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.{" "}
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

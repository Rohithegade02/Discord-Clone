import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <div>
      <Header />
      <div className="bg-discord_blue pb-8 md:pb-0">
        <div className="p-7 py-9 h-screen md:h-[83vh] md:flex relative">
          <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
            <h1 className="text-5xl text-white font-black">
              IMAGINE A PLACE...
            </h1>
            <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </h2>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6 ">
              <button className="bg-white w-60 font-medium flex  items-center justify-center rounded-full p-4 text-md  hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition:duration-200 ease-in-out">
                <DownloadIcon className="w-6 mr-2" />
                Download for Windows
              </button>
              <button className="bg-gray-900 text-white  w-72  font-medium flex items-center justify-center rounded-full p-4 hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition:duration-200 ease-in-out">
                Open Discord in your browser
              </button>
            </div>
          </div>
          <div className="flex-grow">
            <img
              src="https://techcrunch.com/wp-content/uploads/2020/11/discord1.jpg?w=990&crop=1"
              alt=""
              className="h-50 w-50 object-contain "
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/60b52e696344a86a0e0f6167/1632181036775-E7V3NH5731FABW90TZNG/DISCORD_IAP_SC01_CHARACTERS.png"
              alt=""
              className="h-50 w-50 object-contain hidden "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

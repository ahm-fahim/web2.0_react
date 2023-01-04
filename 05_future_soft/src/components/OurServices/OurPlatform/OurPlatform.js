import React from "react";
import {
    CircleStackIcon,
    Cog6ToothIcon,
    CubeIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const OurPlatform = () => {
    return (
        <div className="md:grid grid-cols-3 gap-4 mt-10 mb-10">
            <div className="bg-yellow-300 p-5 rounded-lg drop-shadow-md mt-5">
                <CircleStackIcon className="w-20 bg-indigo-300  text-white p-4 mb-2 rounded-lg "></CircleStackIcon>

                <h1 className="text-2xl font-bold">Software Development</h1>
                <p className="text-xl text-gray-600 mt-5">
                    We can develop any kind of software solution to automate
                    your business operations according to your requirements. Our
                    strength is to develop customized software.
                </p>
            </div>
            <div className="bg-cyan-200 p-5 rounded-lg drop-shadow-md mt-5">
                <GlobeAltIcon className="w-20 bg-green-300  text-white p-4 mb-2 rounded-lg "></GlobeAltIcon>

                <h1 className="text-2xl font-bold">Website Development</h1>
                <p className="text-xl text-gray-600 mt-5">
                    A website can represent your business identity we can
                    develop it according to the motive of your business.
                </p>
            </div>
            <div className="bg-purple-200 p-5 rounded-lg drop-shadow-md mt-5">
                <DevicePhoneMobileIcon className="w-20 bg-blue-300  text-white p-4 mb-2 rounded-lg "></DevicePhoneMobileIcon>

                <h1 className="text-2xl font-bold">Mobile App Development</h1>
                <p className="text-xl text-gray-600 mt-5">
                    Bdtask develops both Android and iOS application to make
                    your business operation more Convenient and flexible.
                </p>
            </div>
            <div className="bg-red-200 p-5 rounded-lg drop-shadow-md mt-5">
                <CubeIcon className="w-20 bg-cyan-300  text-white p-4 mb-2 rounded-lg "></CubeIcon>

                <h1 className="text-2xl font-bold">Graphics Design</h1>
                <p className="text-xl text-gray-600 mt-5">
                    We have readymade eCommerce software solutions as well as
                    develop the eCommerce solution based on your demand.
                </p>
            </div>
            <div className="bg-green-200 p-5 rounded-lg drop-shadow-md mt-5">
                <ShoppingCartIcon className="w-20 bg-yellow-300  text-white p-4 mb-2 rounded-lg "></ShoppingCartIcon>

                <h1 className="text-2xl font-bold">Bloging and E-commerce</h1>
                <p className="text-xl text-gray-600 mt-5">
                    We can develop an SEO-friendly content management system to
                    publish blogs, articles, online news, and so on.
                </p>
            </div>
            <div className="bg-orange-200 p-5 rounded-lg drop-shadow-md mt-5">
                <Cog6ToothIcon className="w-20 bg-purple-300  text-white p-4 mb-2 rounded-lg "></Cog6ToothIcon>

                <h1 className="text-2xl font-bold">
                    Custom Software Development
                </h1>
                <button className="text-xl mt-5 bg-green-600 px-10 py-2 text-white rounded-md flex items-center">
                    Submit Request{" "}
                    <div className="bg-cyan-300 w-10 h-10 rounded-full animate-ping right-10 mx-[-20px]"></div>
                </button>
            </div>
        </div>
    );
};

export default OurPlatform;

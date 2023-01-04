import React from "react";
import {
    CubeIcon,
    HandRaisedIcon,
    ShoppingCartIcon,
    AcademicCapIcon,
    BuildingLibraryIcon,
    PaperAirplaneIcon,
    PlusIcon,
} from "@heroicons/react/24/solid";

const Industry = () => {
    return (
        <div className="md:grid grid-cols-5 gap-6">
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <HandRaisedIcon className="w-20 m-auto bg-red-300  text-white p-4 mb-2 rounded-lg " ></HandRaisedIcon>
                <h1 className="text-xl tracking-widest">Healthcare</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <ShoppingCartIcon className="w-20 m-auto bg-yellow-300  text-white p-4 mb-2 rounded-lg " ></ShoppingCartIcon>
                <h1 className="text-xl tracking-widest">E-Commerce</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <CubeIcon className="w-20 m-auto bg-purple-300  text-white p-4 mb-2 rounded-lg " ></CubeIcon>
                <h1 className="text-xl tracking-widest">Automative</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <AcademicCapIcon className="w-20 m-auto bg-green-300  text-white p-4 mb-2 rounded-lg " ></AcademicCapIcon>
                <h1 className="text-xl tracking-widest">Education</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <BuildingLibraryIcon className="w-20 m-auto bg-blue-300  text-white p-4 mb-2 rounded-lg " ></BuildingLibraryIcon>
                <h1 className="text-xl tracking-widest">Real State</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <HandRaisedIcon className="w-20 m-auto bg-indigo-300  text-white p-4 mb-2 rounded-lg " ></HandRaisedIcon>
                <h1 className="text-xl tracking-widest">Hospitality</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <BuildingLibraryIcon className="w-20 m-auto bg-lime-300  text-white p-4 mb-2 rounded-lg " ></BuildingLibraryIcon>
                <h1 className="text-xl tracking-widest">Pharmacy</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <CubeIcon className="w-20 m-auto bg-orange-300  text-white p-4 mb-2 rounded-lg " ></CubeIcon>
                <h1 className="text-xl tracking-widest">UI/Ux</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <PaperAirplaneIcon className="w-20 m-auto bg-cyan-300  text-white p-4 mb-2 rounded-lg " ></PaperAirplaneIcon>
                <h1 className="text-xl tracking-widest">Aviation</h1>
            </div>
            <div className="hover:bg-green-200 duration-700 bg-white py-10 rounded-md mt-2 drop-shadow-lg text-center">
                <PlusIcon className="w-20 m-auto bg-amber-300  text-white p-4 mb-2 rounded-lg " ></PlusIcon>
                <h1 className="text-xl tracking-widest">Many More</h1>
            </div>
        </div>
    );
};

export default Industry;

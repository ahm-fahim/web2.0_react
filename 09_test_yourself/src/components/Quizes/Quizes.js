import React from "react";
import { Link } from "react-router-dom";

const Quizes = ({ items }) => {
    console.log(items);
    const { name, logo } = items;
    return (
        <div className="bg-gradient-to-r from-purple-400 to-blue-500 drop-shadow text-center p-4 rounded-md mt-5 mb-5">
            <img src={logo} alt="" className=" h-40 m-auto" />
            <h3 className="text-2xl">{name}</h3>
            <button className="bg-gradient-to-l from-purple-500 to-blue-500 text-white px-5 rounded-md drop-shadow-md p-1">
                Take Quiz
            </button>
        </div>
    );
};

export default Quizes;

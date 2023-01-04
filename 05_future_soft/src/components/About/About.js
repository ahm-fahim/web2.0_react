import React from "react";
import "./About.css";
import team from "../../images/team.png";

const About = () => {
    return (
        <div className="bg-white md:grid grid-cols-2 items-center">
            <div className="p-10">
                <h3 className="text-xl text-green-600 font-mono">Who We Are</h3>
                <h1 className="text-4xl font-bold mt-3">
                    We are From Another Space to Automate the World
                </h1>
                <p className="text-xl text-gray-600 mt-10">
                    Future Soft. works in multiple areas including software
                    development, website development, customized software
                    solution, mobile app development, theme design, and
                    development. Our dream is to continue your journey with
                    success.
                </p>
                <button className=" mt-5 bg-green-600 px-10 pt-5 pb-5 text-xl rounded-lg  text-white">
                    More About Us
                </button>
            </div>
            <div className=" p-10">
                <img className="border-b-2 border-green-600" src={team} alt="" />
            </div>
        </div>
    );
};

export default About;

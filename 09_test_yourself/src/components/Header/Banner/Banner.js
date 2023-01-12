import React from "react";
import ThinkImgo from "../../../images/thinkMan.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="md:grid md:grid-cols-2 items-center text-center justify-items-center gap-10 p-10">
                <div>
                    <h1 className="text-5xl font-thin">
                        <span className="font-bold">
                            When you think{" "}
                        </span>
                        and say{" "}
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 m-2 before:bg-purple-500 relative inline-block mt-4">
                            <span className="relative text-white">“I Can”</span>
                        </span> confidence and happiness will fill your entire being.
                    </h1>
                </div>
                <div className="flex justify-center">
                    <img
                        className="h-96 animate-bounce "
                        src={ThinkImgo}
                        alt=""
                    />
                </div>
            </div>
            <div className="text-center flex justify-center mt-[-100px] md:mt-0">
                <Link
                    className="bg-purple-700 px-8 p-2 text-white rounded-md"
                    to="/quiz"
                >
                    Take Your Test{" "}
                </Link>
                <span className="animate-ping inline-flex rounded-full h-5 w-5 bg-sky-500"></span>
            </div>
        </div>
    );
};

export default Banner;

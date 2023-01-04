import React from "react";
import cover from "../../../images/cover.png";

const Banner = () => {
    return (
        <div className="md:grid grid-cols-2 gap-4 justify-center items-center p-10">
            <div>
                <h1 className="text-4xl font-sans">
                    <span className="font-bold">
                        <span className="animate-pulse text-green-600">
                            Best Software Development
                        </span>{" "}
                        Company
                    </span>{" "}
                    <span className="font-thin">
                        To Architect The Dream For
                    </span>{" "}
                    <span className="font-bold text-green-600">
                        Next Generation
                    </span>
                </h1>
                <p className="text-xl font-mono mt-10">
                    Future Soft. has a global reputation for up to scratch
                    customer experience which marks us as one of the best
                    software development companies in the world.
                </p>
            </div>
            <div>
                <img src={cover} alt="" />
                <div className="bg-green-600 text-white w-40 text-center items-center rounded-lg shadow-lg p-4  animate-bounce mt-[-96px]">
                    <span className="text-5xl">10+</span>
                    <br />
                    <span className="text-xl font-mono">
                        years of experience
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;

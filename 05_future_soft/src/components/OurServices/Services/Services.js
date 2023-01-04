import React from 'react';
import Industry from '../Industry/Industry';

const Services = () => {
    return (
        <div className="bg-green-50 p-10">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold">
                    Service <span className="font-thin">we offer</span>{" "}
                </h1>
                <p className="text-lg text-gray-600 mt-5 tracking-widest">
                    We are providing 9 core services in digital market place.
                    All services are featured, <br /> outstanding and
                    innovative. These featured are below.
                </p>
            </div>

            <div className="text-center p-10">
                <h1 className="font-bold text-4xl ">
                    Industry{" "}
                    <span className="text-green-600 animate-pulse">
                        We Serve
                    </span>
                </h1>
                <p className="text-xl text-gray-600 mt-5 tracking-widest">
                    Bridge Your Business with the Virtual World
                </p>
            </div>

            <div>
                <Industry></Industry>
            </div>
        </div>
    );
};

export default Services;
import React from 'react';
import OurPlatform from '../OurPlatform/OurPlatform';

const Platform = () => {
    return (
        <div className='p-10 pt-20 md:bg-white mt-10 rounded-lg drop-shadow-lg'>
            <div className='text-center'>
                <h1 className="text-4xl font-bold">
                    Share Your Demand to <br />{" "}
                    <span className="text-green-600 animate-pulse">
                        Design Any Customized
                    </span>{" "}
                    Software
                </h1>
                <p className="text-xl tracking-widest mt-5 text-gray-600">
                    Future Soft. focuses on the exact requirements of the
                    clients. We design and develop the best and most advanced
                    software for all types of businesses.
                </p>
            </div>
            <div>
                <OurPlatform></OurPlatform>
            </div>
        </div>
    );
};

export default Platform;
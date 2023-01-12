import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizes from "../components/Quizes/Quizes";

const Quiz = () => {
    const data = useLoaderData([]);
    return (
        <div>
            <h1 className="text-6xl text-center pt-10 text-gray-700">
                Testing leads to failure,{" "}
                <span className="text-purple-700">and failure leads</span> to
                understanding
            </h1>
            <div className="md:grid grid-cols-4 gap-4 pt-10">
                {data.data.map((items) => (
                    <Quizes key={items.id} items={items} />
                ))}
            </div>
        </div>
    );
};

export default Quiz;

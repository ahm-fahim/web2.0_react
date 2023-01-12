import React from "react";

const Questions = ({ questionSheet }) => {
    const { question, options, correctAnswer } = questionSheet;

    const selectedAns = (e) => {
        const userAns = e.target.value;
        if (userAns === correctAnswer) {
            alert("correct ans");
        } else {
            console.log("wrong!");
        }
    };
    return (
        <div>
            <h1 className="text-3xl text-purple-700">{question.slice(" ")}</h1>
            <div className="md:grid grid-cols-2 gap-4">
                <input
                    onClick={selectedAns}
                    className={`text-xl text-gray-500 ring-1 rounded-md mt-3 p-2`}
                    value={options[0]}
                    readOnly
                />
                <input
                    onClick={selectedAns}
                    className={`text-xl text-gray-500 ring-1 rounded-md mt-3 p-2`}
                    value={options[1]}
                    readOnly
                />
                <input
                    onClick={selectedAns}
                    className={`text-xl text-gray-500 ring-1 rounded-md mt-3 p-2`}
                    value={options[2]}
                    readOnly
                />
                <input
                    onClick={selectedAns}
                    className={`text-xl text-gray-500 ring-1 rounded-md mt-3 p-2`}
                    value={options[3]}
                    readOnly
                />
            </div>
        </div>
    );
};

export default Questions;

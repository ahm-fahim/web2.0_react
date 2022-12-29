import React from "react";
import { add, divide, multi, sub } from "../../utilities/calculator";
import "./calculation.css"

const Calculation = () => {
    const num1 = 10,
        num2 = 12;
    const addResult = add(num1, num2);
    const subResult = sub(num1, num2);
    const multiResult = multi(num1, num2);
    const divideResult = divide(num1, num2);

    return (
        <div className="background">
            <h3>Calculation</h3>
            <p>
                Add Result: <span> {addResult}</span>
            </p>
            <p>
                Sub Result: <span> {subResult}</span>
            </p>
            <p>
                Multi Result: <span> {multiResult}</span>
            </p>
            <p>
                Divide Result: <span>{divideResult}</span>
            </p>
        </div>
    );
};

export default Calculation;

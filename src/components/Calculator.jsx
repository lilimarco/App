import React from "react";
import {add, multiply, subtract, divide} from "../math.js"

function Calculator() {
    return (
        <div className="section">
            <p className="section-title">Calculator</p>
            <ul className="calculator-list">
                <li>1 + 2 = {add(1, 2)}</li>
                <li>2 × 3 = {multiply(2, 3)}</li>
                <li>7 − 2 = {subtract(7, 2)}</li>
                <li>5 ÷ 2 = {divide(5, 2)}</li>
            </ul>
        </div>
    );
}

export default Calculator;
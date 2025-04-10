"use client";

import { useState } from "react"; // react hook that adds a state to a function component which will store and update calculator display
import { evaluate } from "mathjs";

export default function Calculator() {
    //display: stores current input/output on the screen, setDisplay: updates the display, useState("0"): intitializes the display to 0
    const [display, setDisplay] = useState("");
    const [history, setHistory] = useState<{ equation: string; result: string }[]>([]);

    //function handles when user clicks on a button
    const handleClick = async (value: string) => {

        //= is to evaluate the equation
        if (value === "=") {
            try {

                const result = eval(display).toString();
                setDisplay(evaluate(display).toString());

                //fetch request to call the post method while sending the equation from display and result
                await fetch("/api/saveEquation", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ equation: display, result }),
                });

                setHistory([...history, { equation: display, result }]);
            } catch {
                setDisplay("Error");
            }
            //C is to clear display
        } else if (value === "C") {
            setDisplay("");
            //this will append any other clicks and display it on the screen
        } else {
            setDisplay(display + value)
        }
    };

    return (

        //flex flex-col uses flexbox and sets a column layout; items-center: centers items horizontall; p-4: adds padding for spacing
        <div className="flex flex-col items-center p-4">
            <div className="border-4 border-red-300 rounded-xl p-6 shadow-lg bg-white">
                {/*text-2xl: sets large fontsize; mb-2 adds margin-bottom for spacing*/}
                <div className="w-64 bg-gray-800 text-white text-right p-2 text-2xl mb-2">{display}</div>

                {/*contains all the buttons; has an array of buttons and loops through each button to generate a button in line 39*/}
                {/*grid: uses css grid to arrange buttons; grid-cols-4: creates 4 columns; gap-2: adds spacing between the buttons*/}
                <div className="grid grid-cols-4 gap-2">
                    {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((btn) => (
                        <button key={btn} className="p-4 bg-blue-500 text-white rounded" onClick={() => handleClick(btn)}>
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
            {/* w-64: sets the width to 64 units; bg-gray: dark gray background; text-white: Makes text white; text-right aligns the text to the right; p-2: adds padding inside*/}


            {/*History*/}
            <div className="mt-4 w-64 bg-gray-100 p-2">
                <h3 className="text-lg font-bold text-blue-500"> History:</h3>
                {history.map((entry, index) => (
                    <div key={index} className="text-gray-800">
                        {entry.equation} = {entry.result}
                    </div>

                ))}
            </div>

        </div>
    );

};//end method
"use client";

import Plot from "react-plotly.js";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function Graph() {
    const [expression, setExpression] = useState("x^2");

    const xVals = Array.from({ length: 100 }, (_, i) => i - 50);

    // Function to sanitize and validate the expression
    const sanitizeExpression = (expression: string, x: number) => {
        // Trim the expression to remove leading/trailing spaces
        let cleanedExpression = expression.trim();

        // Ensure that the expression is not empty
        if (cleanedExpression === "") {
            return null; // Return null if the expression is empty
        }

        // Ensure that the expression does not end with an operator
        if (/[+\-*/^]$/.test(cleanedExpression)) {
            console.warn(`Expression ends with an operator: ${cleanedExpression}`);
            return null; // Return null if the expression ends with an operator
        }

        // Ensure that the expression does not contain invalid characters
        if (/[^\d\+\-\*\/\^().x\s]/.test(cleanedExpression)) {
            console.warn(`Invalid characters detected: ${cleanedExpression}`);
            return null; // Return null if the expression contains invalid characters
        }

        // Replace 'x' with the current x value (in parentheses for safe evaluation)
        cleanedExpression = cleanedExpression.replace(/x/g, `(${x})`);

        return cleanedExpression;
    };

    const yVals = xVals.map((x) => {
        try {
            const cleanedExpression = sanitizeExpression(expression, x);

            // If the expression is invalid, return NaN to avoid rendering errors
            if (!cleanedExpression) {
                return NaN;
            }

            // Evaluate the cleaned expression
            return evaluate(cleanedExpression);
        } catch (error) {
            console.error("Error evaluating expression:", error);
            return NaN; // Return NaN if there's an evaluation error
        }
    });

    return (
        <div className="p-4 bg-white rounded shadow mt-6 w-full max-w-lg border border-red-600">
            <input
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="w-full p-2 border rounded mb-4 text-blue-600"
                placeholder="Enter equation"
            />
            <Plot
                data={[
                    {
                        x: xVals,
                        y: yVals,
                        type: "scatter",
                        mode: "lines+points",
                        marker: { color: "blue" },
                    },
                ]}
                //adjust the size of the plot object to fit the square container it was in
                layout={{
                    title: `Graph of y = ${expression}`,
                    autosize: true,
                    width: undefined,
                    height: 400,
                    margin: { t: 40, b: 40, l: 40, r: 20 },
                }}
                useResizeHandler={true}
                style={{ width: "100%. height:100%" }}
                config={{ responsive: true }}
            />
        </div>
    );
}

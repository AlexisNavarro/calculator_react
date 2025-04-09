"use client";

import Graph from "../components/Graph";

export default function GraphPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-blue-500">Graph Plotting</h1>
            <Graph />
        </main>
    );
}
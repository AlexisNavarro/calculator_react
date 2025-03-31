import Image from "next/image";
import Calculator from "./components/calculator";


export default function Home() {
  return (
    <main className = "flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb4 text-blue-500">calculator</h1>
    <Calculator/>
    </main>
  );
}
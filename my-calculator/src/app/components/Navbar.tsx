import Link from "next/link";

//Navbar that will have links to access graph functionality
export default function Navbar(){
    return(
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
            <div className="flex justify-between items-center max-w-7x1 mx-auto">
                <h1 className="text-xl font-bold">My Calculator</h1>
                <div className="space-x-4">
                    <Link href = "/" className="hover:underline">Home</Link>
                    <Link href= "/history" className="hover:underline">History</Link>
                </div>
            </div>
        </nav>
    );
}
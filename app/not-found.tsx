import Link from "next/link";
import { Home } from "lucide-react";
import Navbar from "./Navbar/Navbar";


export default function NotFound() {
  return (
    <>
    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h1 className="text-6xl font-bold text-black mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-6">Oops! Page not found</p>
        <div className="mb-8">
          <p className="text-gray-600">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-black bg-white border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300 shadow-lg"
        >
          <Home className="w-5 h-5 mr-2" />
          Go Home
        </Link>
      </div>
    </div>
  
    </>
  );
}

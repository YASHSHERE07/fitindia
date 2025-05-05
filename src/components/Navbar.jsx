import { FiBookOpen, FiGift } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="relative overflow-hidden z-10 ">
      {/* Decorative background element */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-rose-600/20 to-purple-600/20 rounded-full blur-3xl" />

      <header className="bg-zinc-950/95 backdrop-blur-md border-b border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Outer container: stacks vertically on mobile, horizontally on larger screens */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-4 sm:py-0">
            {/* Logo */}
            <div className="flex-shrink-0 text-center sm:text-left">
              <Link
                to="/"
                className="flex flex-col items-center sm:items-start gap-1"
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent uppercase">
                  Daily Diet Fit
                </h1>
                <span className="text-xs font-medium text-gray-400/80 tracking-wider">
                  NUTRITION OPTIMIZED
                </span>
              </Link>
            </div>

            {/* Product and Meal Plan Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link
                to="/products"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600/30 to-purple-600/30 hover:from-rose-600/40 hover:to-purple-600/40 transition-all group"
              >
                <FiBookOpen className="w-5 h-5 text-rose-400 group-hover:text-purple-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Products
                </span>
              </Link>

              <Link
                to="/get-started"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600/30 to-purple-600/30 hover:from-rose-600/40 hover:to-purple-600/40 transition-all group"
              >
                <FiGift className="w-5 h-5 text-purple-400 group-hover:text-rose-400 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  7 Day Free Meal Plan
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

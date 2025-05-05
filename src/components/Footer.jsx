import React from "react";
import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiMail,
  FiHeart,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 bg-gradient-to-br from-zinc-950 to-zinc-900 text-gray-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🥗</span>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-400  bg-clip-text text-transparent">
                Daily Diet Fit
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-lg">
              Precision nutrition plans for sustainable health, weight
              management, and peak performance. Science-backed meal planning
              tailored to you.
            </p>
            <div className="flex space-x-5">
              {[
                {
                  icon: <FiInstagram className="w-5 h-5" />,
                  color: "from-purple-600 to-pink-600",
                },

                {
                  icon: <FiYoutube className="w-5 h-5" />,
                  color: "from-red-600 to-red-400",
                },
                {
                  icon: <FiFacebook className="w-5 h-5" />,
                  color: "from-blue-600 to-blue-400",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white hover:scale-110 transition-transform`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-4 h-4 bg-gradient-to-r from-rose-400 to-purple-400  rounded-full mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Custom Plans", path: "/get-started" },
                { name: "Products", path: "/products" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-teal-300 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-4 h-4 bg-gradient-to-r from-rose-400 to-purple-400  rounded-full mr-3"></span>
              Stay Updated
            </h4>

            <div className="mb-8">
              <p className="text-gray-400 mb-4">
                Join our community for exclusive content and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-l-full py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-gradient-to-r from-rose-700 to-purple-700  hover:from-green-500 hover:to-emerald-400 text-white font-medium py-3 px-6 rounded-r-full transition-all flex items-center">
                  <FiMail className="mr-2" />
                </button>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-medium mb-3 flex items-center">
                <FiHeart className="text-rose-400 mr-2" />
                Contact Us
              </h5>
              <a
                href="mailto:support@dailydietfit.com"
                className="text-gray-400 hover:text-teal-300 transition-colors"
              >
                support@dailydietfit.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2025 ZenMacros. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/disclaimer"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
          {/* Logo or Title */}
          <div className="text-xl font-bold">MOVIE EXPLORER</div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-sm">
            <li>
              <Link to={"/"} className="hover:text-gray-400">
                Home
              </Link>
            </li>

            <li>
              <Link to={"/Catalogue"} className="hover:text-gray-400">
                Catalogue
              </Link>
            </li>

            <li>
              <Link to={"/OurProcess"} className="hover:text-gray-400">
                Our Process
              </Link>
            </li>
            <li>
              <Link to={"/AboutUs"} className="hover:text-gray-400">
                About Us
              </Link>
            </li>
          </ul>

          {/* Social Media Icons (use emoji or replace with icons) */}
          <div className="flex space-x-4 text-lg">
            <a
              target="_blank"
              href="https://github.com/shikha-kashab/MovieExplorer"
              aria-label="Instagram"
              className="hover:text-pink-400">
              <GitHubIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

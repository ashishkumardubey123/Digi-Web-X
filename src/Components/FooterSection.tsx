"use client";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";
import Link from "next/link";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500"></div>
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Digi<span className="text-purple-500">Webx</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Transforming ideas into digital reality. We build high-performance
              websites and data-driven marketing strategies for modern
              businesses.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                "Web Development",
                "SEO Optimization",
                "Social Media Marketing",
                ,
                "Content Strategy",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/Services"
                    className="flex items-center group hover:text-purple-400 transition-colors text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-[2px] bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
         <div>
                    <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                    <ul className="space-y-4">
                       <li>
                            <Link href="/" className="hover:text-purple-400 transition-colors text-sm">Home</Link>
                        </li>
                        <li>
                            <Link href="/About" className="hover:text-purple-400 transition-colors text-sm">About Us</Link>
                        </li>
                        <li>
                             <Link href="/Services" className="hover:text-purple-400 transition-colors text-sm">services</Link>
                        </li>
                        <li>
                             <Link href="/contact" className="hover:text-purple-400 transition-colors text-sm">Contact</Link>
                        </li>
                         <li>
                             <Link href="#" className="hover:text-purple-400 transition-colors text-sm">Portfolio</Link>
                        </li>
                    </ul>
                </div>
          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-800 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:ad201054@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors text-sm"
                  >
                    ad201054@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-800 text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+919302300834"
                    className="text-white hover:text-purple-400 transition-colors text-sm"
                  >
                    +91 9302300834
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-800 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                    Location
                  </p>
                  <span className="text-white text-sm">
                    Online / Remote Agency
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DigiWebx Agency. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

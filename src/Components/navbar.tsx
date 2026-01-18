"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import MobileBottomContactBar from "./MobileContactButtons";
import {
  MessageCircle,
  Phone,
  PhoneCallIcon,
  TextAlignEnd,
  TextAlignJustify,
} from "lucide-react";
import { IconBrandWhatsappFilled } from "@tabler/icons-react";

const Navbar = () => {
  const pathname = usePathname();

  const [navbar, setNavbar] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/Services" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/contact" }, // ✅ lowercase
  ];

  return (
    <nav
      className={`
     fixed  top-0 inset-x-0 z-[100]

    border
    ${
      isSticky
        ? " transition-all duration-500 ease-out md:translate-y-3 md:w-3/4 lg:w-4/5 mx-auto md:rounded-3xl backdrop-blur-xl shadow-4xl border-gray-400"
        : "w-full bg-transparent border-transparent  "
    }
  `}
      style={
        isSticky
          ? {
              background:
                "linear-gradient(143.6deg, rgba(29, 78, 216, 0) 20.79%, rgba(29, 78, 216, 0.28) 40.92%, rgba(29, 78, 216, 0) 70.35%)",
            }
          : {
              background: "transparent",
            }
      }
    >
      <div className="px-4 mx-auto lg:max-w-7xl md:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* LEFT — LOGO */}
          <Link href="/" className="flex gap-1  items-center">
            <Image
              className=" object-contain  rounded-full"
              src="/Nav-logo.png"
              alt="logo"
              width={80}
              height={50}
            />
            <span className="font-satoshi  text-lg font-bold text-purple-950 ">
              {" "}
              Digi-WebX{" "}
            </span>
          </Link>

          {/* CENTER — MENU */}
          <ul className="hidden md:flex items-center font-satoshi gap-10 absolute left-1/2 -translate-x-1/2">
            {menu.map((item) => {
              const active = pathname === item.path;
              return (
                <Link key={item.name} href={item.path}>
                  <li
                    className={`
                      relative text-lg font-medium hover:text-violet-600   cursor-pointer transition
                      ${active ? "text-purple-500" : "  "}
                    `}
                  >
                    {item.name}
                    <span
                      className={`
                        absolute -bottom-1 left-0 h-[2px] bg-purple-500 transition-all duration-300
                        ${active ? "w-full" : "w-0 hover:w-full"}
                      `}
                    />
                  </li>
                </Link>
              );
            })}
          </ul>

          {/* RIGHT — CTA BUTTON */}
          {/* RIGHT — CTA BUTTON */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:9302300834"
              className="
      group relative
      flex items-center gap-3
      px-5 py-2.5 rounded-2xl

      bg-white/40 backdrop-blur-lg
      border border-white/40

      text-purple-900 font-semibold
      shadow-lg shadow-purple-500/10

      transition-all duration-300
      hover:bg-white/60
      hover:shadow-xl hover:shadow-purple-500/20
      hover:-translate-y-0.5
      active:scale-[0.98]
    "
            >
              {/* Phone Icon */}
              <PhoneCallIcon className="w-5 h-5 text-purple-700" />

              {/* Phone Number */}
              <span className="text-sm tracking-wide">
                +91&nbsp;93023&nbsp;00834
              </span>
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <TextAlignEnd color="#8b0d9c" />
              ) : (
                <TextAlignJustify color="#8b0d9c" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {/* MOBILE MENU */}
        <div
          className={`
    md:hidden overflow-hidden transition-all duration-500 ease-out
    ${navbar ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
  `}
        >
          <ul className="mt-4 flex flex-col gap-4 bg-black/90 backdrop-blur-xl p-6 rounded-xl shadow-lg">
            {menu.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setNavbar(false)}
              >
                <li
                  className={`
            text-lg text-center font-medium
            ${pathname === item.path ? "text-purple-500" : "text-white"}
          `}
                >
                  {item.name}
                </li>
              </Link>
            ))}

            {/* 🔻 MOBILE CONTACT BUTTONS */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-center text-gray-300 text-sm mb-4 font-medium">
                Or connect with us instantly
              </p>

              <div className="grid grid-cols-2 gap-4">
                {/* 💬 WhatsApp */}
                <a
                  href="https://wa.me/+919302300834"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setNavbar(false)}
                  className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl
                     bg-white border border-gray-200
                     text-gray-700 font-semibold
                     hover:border-green-500 hover:text-green-600
                     hover:bg-green-50
                     hover:shadow-lg hover:shadow-green-500/10
                     hover:-translate-y-0.5
                     transition-all duration-300 group"
                >
                  <IconBrandWhatsappFilled className="w-5 h-5 group-hover:scale-110 transition-transform color=[rgba(0,104,76,1)] duration-300" />
                  <span>WhatsApp</span>
                </a>

                {/* 📞 Call */}
                <a
                  href="tel:9302300834"
                  onClick={() => setNavbar(false)}
                  className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl
                     bg-white border border-gray-200
                     text-gray-700 font-semibold
                     hover:border-purple-500 hover:text-purple-600
                     hover:bg-purple-50
                     hover:shadow-lg hover:shadow-purple-500/10
                     hover:-translate-y-0.5
                     transition-all duration-300 group"
                >
                  <PhoneCallIcon className="w-5 h-5 color=[rgba(108,38,113,1)] group-hover:scale-110 transition-transform duration-300" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

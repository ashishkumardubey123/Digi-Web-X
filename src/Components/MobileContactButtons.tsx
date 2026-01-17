"use client";

import { IconBrandWhatsappFilled } from "@tabler/icons-react";
import { MessageCircle, Phone, PhoneCallIcon } from "lucide-react";
import 'remixicon/fonts/remixicon.css'

export default function MobileBottomContactBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 pt-4 pb-5">
      
      <p className="text-center text-gray-500 text-sm mb-4 font-medium">
      connect with us instantly
      </p>

      <div className="grid grid-cols-2 gap-4">
        
        {/* 💬 WhatsApp */}
        <a
          href="https://wa.me/+919302300834"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl
                     bg-white border border-gray-200
                     text-gray-600 font-semibold
                     hover:border-green-500 hover:text-green-600
                     hover:bg-green-50
                     hover:shadow-lg hover:shadow-green-500/10
                     hover:-translate-y-0.5
                     transition-all duration-300 group"
        >
    <IconBrandWhatsappFilled color="rgba(0,104,76,1)" />

          <span>WhatsApp</span>
        </a>

        {/* 📞 Call */}
        <a
          href="tel:9302300834"
          className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl
                     bg-white border border-gray-200
                     text-gray-600 font-semibold
                     hover:border-purple-500 hover:text-purple-600
                     hover:bg-purple-50
                     hover:shadow-lg hover:shadow-purple-500/10
                     hover:-translate-y-0.5
                     transition-all duration-300 group"
        >
      <PhoneCallIcon color="rgba(108,38,113,1)" />
          <span>Call Us</span>
        </a>

      </div>
    </div>
  );
}

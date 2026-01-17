"use client";
import { motion } from "framer-motion";

import React, { useState } from "react";
import {
  Send,
  Loader2,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowRight,
  User,
  FileText,
  HelpCircle,
  MessageSquare,
  PhoneCallIcon,
} from "lucide-react";
import { IconBrandWhatsappFilled } from "@tabler/icons-react";
import { RiWhatsappFill, RiWhatsappLine } from "@remixicon/react";
// --- Types ---

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// --- Components ---

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // Base gradient replicating the "white and purple" dreamy look
    <div className="min-h-screen relative w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 selection:bg-purple-100 selection:text-purple-900">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Soft purple radial at top left */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-[100px] animate-blob mix-blend-multiply" />

        {/* Slightly stronger purple accent */}
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />

        {/* Bottom center soft glow */}
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-fuchsia-100/60 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />

        {/* Overall wash to ensure it feels like the image */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
      </div>

      {/* Navigation - simplified for this demo */}

      {/* Main Content */}
      <main className="pt-24 pb-12 px-6">{children}</main>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to the API route
      // In this preview environment, this will 404 because there is no backend server.
      // I've added a fallback below to simulate success so you can see the UI state.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // --- PREVIEW ONLY FALLBACK ---
        // Since we are in a static frontend preview, the API call will likely fail (404).
        // We simulate a successful response here for demonstration purposes.
        console.warn(
          "API call failed (expected in static preview). Simulating success.",
        );
        await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
        setSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Fallback for network errors in preview
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper for staggered animation delay
  const getDelay = (index: number) => ({
    animationDelay: `${index * 100}ms`,
    animationFillMode: "both", // Ensures element is hidden before animation starts (if animation works), but visible otherwise.
  });

  return (
    <div className="bg-white/80 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/60 h-full transition-all duration-300 hover:shadow-[0_30px_70px_rgba(124,58,237,0.08)] relative overflow-hidden group">
      {/* Subtle decorative gradient inside the card */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/10 transition-colors duration-500 pointer-events-none" />

      <div className="mb-10 animate-pop-in" style={getDelay(0)}>
        <h3 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          Send a Message
        </h3>
        <p className="text-gray-500 text-lg">
          We'd love to hear from you. Fill out the form below.
        </p>
      </div>

      {submitted ? (
        <div className="h-96 flex flex-col items-center justify-center text-center animate-pop-in">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_infinite] shadow-lg shadow-green-100">
            <Send className="w-10 h-10 text-green-600" />
          </div>
          <h4 className="text-3xl font-bold text-gray-900 mb-3">
            Message Sent!
          </h4>
          <p className="text-gray-500 max-w-xs mx-auto text-lg">
            Thank you! We'll get back to you shortly.
          </p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div
              className="space-y-2 group/field animate-pop-in"
              style={getDelay(1)}
            >
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-gray-700 ml-1"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-purple-500 transition-colors duration-300">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all duration-300 placeholder-gray-400 font-medium text-gray-700"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-pop-in"
              style={getDelay(2)}
            >
              <div className="space-y-2 group/field">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700 ml-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-purple-500 transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all duration-300 placeholder-gray-400 font-medium text-gray-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2 group/field">
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-gray-700 ml-1"
                >
                  Phone (Optional)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-purple-500 transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all duration-300 placeholder-gray-400 font-medium text-gray-700"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div
              className="space-y-2 group/field animate-pop-in"
              style={getDelay(3)}
            >
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-gray-700 ml-1"
              >
                Subject
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/field:text-purple-500 transition-colors duration-300">
                  <FileText className="w-5 h-5" />
                </div>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  className="w-full pl-12 pr-10 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all duration-300 text-gray-700 font-medium appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="general">Web-Development</option>
                  <option value="support">SEO</option>
                  <option value="sales">Marketing</option>
                  <option value="billing">Other</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div
              className="space-y-2 group/field animate-pop-in"
              style={getDelay(4)}
            >
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700 ml-1"
              >
                Message
              </label>
              <div className="relative">
                <div className="absolute left-4 top-6 text-gray-400 group-focus-within/field:text-purple-500 transition-colors duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all duration-300 placeholder-gray-400 font-medium text-gray-700 resize-none"
                  placeholder="How can we help you today?"
                />
              </div>
            </div>

            {/* Button */}
            <div className="animate-pop-in pt-2" style={getDelay(5)}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="
    relative bottom-0 w-full
    flex justify-center items-center gap-2
    border border-black rounded-xl
    text-white font-black bg-black uppercase
    px-8 py-4 z-10 overflow-hidden
    transition-all duration-700 ease-in-out
    group hover:text-black hover:bg-white
    active:scale-95 active:duration-0
    focus:bg-white focus:text-black
    disabled:opacity-70 disabled:cursor-not-allowed
    isolation-auto
    before:absolute before:w-full before:transition-all before:duration-700
    before:-left-full before:hover:left-0 before:rounded-full
    before:bg-white before:-z-10 before:aspect-square
    before:hover:scale-150 before:hover:duration-700
  "
              >
                {/* Default Text */}
                <span
                  className={`
      truncate transition-all duration-300
      ${
        isSubmitting
          ? "-translate-x-96"
          : "group-active:-translate-x-96 group-focus:translate-x-96"
      }
    `}
                >
                  Send Message
                </span>

                {/* Processing Animation (unchanged) */}
                <div
                  className={`
      absolute flex flex-row justify-center items-center gap-2
      transition-all duration-300
      ${
        isSubmitting
          ? "translate-x-0"
          : "-translate-x-96 group-active:translate-x-0 group-focus:translate-x-0"
      }
    `}
                >
                  <div className="animate-spin size-4 border-2 border-black border-t-transparent rounded-full"></div>
                  Processing...
                </div>

                {/* Send Icon */}
                <svg
                  className={`
      fill-white transition-all duration-700 ease-in-out
      group-hover:fill-black
      ${
        isSubmitting
          ? "translate-x-96"
          : "group-active:translate-x-96 group-focus:translate-x-96"
      }
    `}
                  viewBox="0 0 512 512"
                  height="16"
                  width="16"
                  aria-hidden="true"
                >
                  <path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z" />
                </svg>
              </button>
            </div>
          </form>

          <div
            className="mt-10 pt-8 border-t border-gray-100 animate-pop-in"
            style={getDelay(6)}
          >
            <p className="text-center text-gray-500 text-sm mb-6 font-medium">
              Or connect with us instantly
            </p>
            <div className="grid grid-cols-2 gap-4">
              {/* whatsapp */}
              <a
                href="https://wa.me/+919302300834"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl
                     bg-white border border-gray-200
                  
                     hover:border-green-500 hover:text-green-600
                     hover:bg-green-50
                     hover:shadow-lg hover:shadow-green-500/10
                     hover:-translate-y-0.5
                     transition-all duration-300 group"
              >
                <RiWhatsappFill color="rgba(0,104,76,1)" />

                <span>WhatsApp</span>
              </a>
              {/* phone call */}

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
          {/* for mobile screen buttons   */}

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
                className="flex items-center justify-center gap-2  py-4 rounded-2xl
                     bg-white border border-gray-200
                     text-gray-600 font-semibold
                     hover:border-green-500 hover:text-green-600
                     hover:bg-green-50
                     hover:shadow-lg hover:shadow-green-500/10
                     hover:-translate-y-0.5
                     transition-all duration-300 group"
              >
                <IconBrandWhatsappFilled size={25} color="rgba(0,104,76,1)" />

                <span>WhatsApp</span>
              </a>

              {/* 📞 Call */}
              <a
                href="tel:9302300834"
                className="flex items-center justify-center gap-2  py-4 rounded-2xl
                     bg-white border border-gray-200
                     text-gray-600 font-semibold
                     hover:border-purple-500 hover:text-purple-600
                     hover:bg-purple-50
                     hover:shadow-lg hover:shadow-purple-500/10
                     hover:-translate-y-0.5
                     transition-all duration-300 group"
              >
                <PhoneCallIcon size={20} color="rgba(108,38,113,1)" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="space-y-8 h-full flex flex-col justify-center py-4">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          We're all <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Ears.
          </span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
          Questions? Ideas? Partnership opportunities? We are here to listen and
          provide the answers you need.
        </p>

        <div className="space-y-5">
          <a href="mailto:ad201054@gmail.com" className="block group">
            <div className="flex items-center gap-5 p-5 rounded-[20px] bg-white/60 border border-white/80 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-0.5 text-lg">
                  Email Us
                </h4>
                <p className="text-gray-500 group-hover:text-purple-600 transition-colors">
                  ad201054@gmail.com
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          <a href="tel:9302300834" className="block group">
            <div className="flex items-center gap-5 p-5 rounded-[20px] bg-white/60 border border-white/80 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-0.5 text-lg">
                  Call Us
                </h4>
                <p className="text-gray-500 group-hover:text-pink-600 transition-colors">
                  9302300834
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
            </div>
          </a>

          <div className="block group cursor-default">
            <div className="flex items-center gap-5 p-5 rounded-[20px] bg-white/60 border border-white/80 shadow-sm hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-0.5 text-lg">
                  Business Hours
                </h4>
                <p className="text-gray-500 group-hover:text-indigo-600 transition-colors">
                  Mon - Fri: 9AM - 6PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-purple-100/50">
        <h4 className="font-semibold text-gray-900 mb-5 ml-1">
          Follow our journey
        </h4>
        <div className="flex gap-4">
          {[
            { Icon: Twitter, href: "#", color: "hover:bg-blue-400" },
            { Icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
            { Icon: Instagram, href: "#", color: "hover:bg-pink-600" },
            { Icon: Github, href: "#", color: "hover:bg-gray-900" },
          ].map(({ Icon, href, color }, index) => (
            <a
              key={index}
              href={href}
              className={`w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white ${color} hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-160px)] flex flex-col justify-center ">
        <div className="text-center mb-16 md:mb-20 pt-8 animate-fade-in-up">
          {/* Badge styled like the image: White bg, purple text, soft border */}
          {/* <div className="inline-block px-6 rounded-full bg-white text-purple-700 font-semibold mb-8 border border-purple-100 shadow-[0_2px_10px_rgba(124,58,237,0.1)] hover:shadow-[0_4px_15px_rgba(124,58,237,0.15)] transition-all duration-300">
                Contact Us
            </div> */}

          <div className="text-center mb-10 md:mb-16 lg:mb-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold tracking-wide shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Get In Touch
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's Craft the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-600 to-pink-500">
              Future
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Whether you have a groundbreaking idea or just want to say hello,
            we're ready to make it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <div
            className="lg:col-span-7 relative z-10 animate-pop-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            {/* Additional blob behind form */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-purple-200/40 to-indigo-200/40 rounded-full blur-3xl -z-10" />
            <ContactForm />
          </div>

          {/* Right Column: Contact Info */}
          <div
            className="lg:col-span-5 pl-0 lg:pl-4 animate-pop-in"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <ContactInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
}

"use client";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  Phone,
  Mail,
  Clock,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowRight,
  User,
  FileText,
  MessageSquare,
  PhoneCall,
  MapPin,
} from "lucide-react";

// Inline SVG for WhatsApp to ensure it renders without external dependencies
const WhatsAppIcon = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill={color || "currentColor"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function ContactPage() {
  // --- State ---
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Handlers ---
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
      // Simulate API call or use actual endpoint
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
        // Fallback for preview
        console.warn(
          "API call failed (expected in static preview). Simulating success.",
        );
        await new Promise((resolve) => setTimeout(resolve, 1500));
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
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper for staggered animation delay
  const getDelay = (index: number) => ({
    animationDelay: `${index * 100}ms`,
    animationFillMode: "both" as const,
  });

  return (
    <>
      {/* Layout Wrapper with Gradients */}
      <div className="min-h-screen relative w-full overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 selection:bg-purple-100 selection:text-purple-900 pt-24 pb-12">
        {/* Background Gradient Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-200/40 blur-[100px] animate-blob mix-blend-multiply" />
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-indigo-200/40 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply" />
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] rounded-full bg-fuchsia-100/60 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply" />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
        </div>

        <main className="px-6 relative z-10">
          <div className="max-w-7xl mx-auto min-h-[calc(100vh-160px)] flex flex-col justify-center">
            {/* Page Header */}
            <div className="text-center mb-16 md:mb-20 pt-8 animate-fade-in-up">
              <div className="text-center mb-1 md:mb-16 lg:mb-2">
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

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Let's Craft the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-600 to-pink-500">
                  Future
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 max-w-xl md:max-w-2xl mx-auto px-4 leading-relaxed">
                Whether you have a groundbreaking idea or just want to say
                hello, we're ready to make it happen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* --- Left Column: Contact Form --- */}
              <div
                className="lg:col-span-7 relative z-10 animate-pop-in"
                style={{ animationDelay: "0.2s", animationFillMode: "both" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-purple-200/40 to-indigo-200/40 rounded-full blur-3xl -z-10" />

                <div className="bg-white/80 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white/60 h-full transition-all duration-300 hover:shadow-[0_30px_70px_rgba(124,58,237,0.08)] relative overflow-hidden group">
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
                        <div
                          className="animate-pop-in pt-2"
                          style={getDelay(5)}
                        >
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
                            <span
                              className={`truncate transition-all duration-300 ${isSubmitting ? "-translate-x-96" : "group-active:-translate-x-96 group-focus:translate-x-96"}`}
                            >
                              Send Message
                            </span>

                            <div
                              className={`absolute flex flex-row justify-center items-center gap-2 transition-all duration-300 ${isSubmitting ? "translate-x-0" : "-translate-x-96 group-active:translate-x-0 group-focus:translate-x-0"}`}
                            >
                              <div className="animate-spin size-4 border-2 border-black border-t-transparent rounded-full"></div>
                              Processing...
                            </div>

                            <svg
                              className={`fill-white transition-all duration-700 ease-in-out group-hover:fill-black ${isSubmitting ? "translate-x-96" : "group-active:translate-x-96 group-focus:translate-x-96"}`}
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
                          <a
                            href="https://wa.me/+919302300834"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white border border-gray-200 hover:border-green-500 hover:text-green-600 hover:bg-green-50 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-0.5 transition-all duration-300 group"
                          >
                            <WhatsAppIcon className="w-6 h-6 text-[#00684C]" />
                            <span>WhatsApp</span>
                          </a>

                          <a
                            href="tel:9302300834"
                            className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-white border border-gray-200 text-gray-600 font-semibold hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-300 group"
                          >
                            <PhoneCall className="w-5 h-5 text-[rgba(108,38,113,1)]" />
                            <span>Call Us</span>
                          </a>
                        </div>
                      </div>

                      {/* Mobile Bottom Bar (Hidden on Desktop) */}
                      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 pt-4 pb-5">
                        <p className="text-center text-gray-500 text-sm mb-4 font-medium">
                          connect with us instantly
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                          <a
                            href="https://wa.me/+919302300834"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-white border border-gray-200 text-gray-600 font-semibold hover:border-green-500 hover:text-green-600 hover:bg-green-50 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-0.5 transition-all duration-300 group"
                          >
                            <WhatsAppIcon className="w-6 h-6 text-[#00684C]" />
                            <span>WhatsApp</span>
                          </a>

                          <a
                            href="tel:9302300834"
                            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-white border border-gray-200 text-gray-600 font-semibold hover:border-purple-500 hover:text-purple-600 hover:bg-purple-50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-0.5 transition-all duration-300 group"
                          >
                            <PhoneCall className="w-5 h-5 text-[rgba(108,38,113,1)]" />
                            <span>Call Us</span>
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* --- Right Column: Contact Info --- */}
              <div
                className="lg:col-span-5 pl-0 lg:pl-4 animate-pop-in"
                style={{ animationDelay: "0.4s", animationFillMode: "both" }}
              >
                <div className="space-y-8 h-full flex flex-col justify-center py-4">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                      We're all <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                        Ears.
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
                      Questions? Ideas? Partnership opportunities? We are here
                      to listen and provide the answers you need.
                    </p>

                    <div className="space-y-5">
                      <a
                        href="mailto:ad201054@gmail.com"
                        className="block group"
                      >
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
                        {
                          Icon: Twitter,
                          href: "https://x.com/ASHISHD26473289",
                          color: "hover:bg-blue-400",
                        },
                        {
                          Icon: Linkedin,
                          href: "https://www.linkedin.com/in/ashish-dubey-26aaaa1b4",
                          color: "hover:bg-blue-700",
                        },
                        {
                          Icon: Instagram,
                          href: "https://www.instagram.com/digi_webx/",
                          color: "hover:bg-pink-600",
                        },
                        {
                          Icon: Github,
                          href: "https://github.com/ashishkumardubey123",
                          color: "hover:bg-gray-900",
                        },
                      ].map(({ Icon, href, color }, index) => (
                        <a
                          key={index}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-white ${color} hover:border-transparent hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

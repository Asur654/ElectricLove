"use client";

import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";

const SupportPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white">
      <TopNav page="Support" />

      {/* Header */}
      <section className="mt-32 px-10 text-center">
        <h1 className="text-5xl font-bold">Support Center</h1>
        <div className="mx-auto mt-3 h-1 w-28 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
        <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
          We’re here to help. Find answers, get assistance, or reach out to our
          support team anytime.
        </p>
      </section>

      {/* Support Options */}
      <section className="mt-32 px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* FAQ */}
        <div
          className="bg-neutral-900 rounded-xl p-6 border border-neutral-800
          hover:border-emerald-400 transition-all duration-300
          hover:shadow-[0_0_25px_#10b98160]"
        >
          <FaQuestionCircle className="text-emerald-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">FAQs</h3>
          <p className="text-zinc-400 text-sm mb-4">
            Find quick answers to the most common questions about orders,
            shipping, returns, and warranties.
          </p>
          <button className="text-emerald-400 hover:underline">
            View FAQs →
          </button>
        </div>

        {/* Email Support */}
        <div
          className="bg-neutral-900 rounded-xl p-6 border border-neutral-800
          hover:border-emerald-400 transition-all duration-300
          hover:shadow-[0_0_25px_#10b98160]"
        >
          <FaEnvelope className="text-emerald-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-zinc-400 text-sm mb-4">
            Send us an email and our support team will get back to you within
            24 hours.
          </p>
          <p className="text-zinc-300 font-medium">
            support@electriclove.com
          </p>
        </div>

        {/* Phone Support */}
        <div
          className="bg-neutral-900 rounded-xl p-6 border border-neutral-800
          hover:border-emerald-400 transition-all duration-300
          hover:shadow-[0_0_25px_#10b98160]"
        >
          <FaPhoneAlt className="text-emerald-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
          <p className="text-zinc-400 text-sm mb-4">
            Prefer talking to a human? Call us during business hours.
          </p>
          <p className="text-zinc-300 font-medium">
            +91 98765 43210
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-32 px-10 max-w-4xl mx-auto">
        <div
          className="bg-neutral-900 rounded-xl p-8 border border-neutral-800
          hover:border-emerald-400 transition-all duration-300"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Contact Support
          </h2>

          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-neutral-950 border border-neutral-700 rounded-md px-4 py-3
              text-white placeholder:text-zinc-500
              focus:outline-none focus:border-emerald-400
              focus:shadow-[0_0_10px_rgba(16,185,129,0.4)]"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-neutral-950 border border-neutral-700 rounded-md px-4 py-3
              text-white placeholder:text-zinc-500
              focus:outline-none focus:border-emerald-400
              focus:shadow-[0_0_10px_rgba(16,185,129,0.4)]"
            />

            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="bg-neutral-950 border border-neutral-700 rounded-md px-4 py-3
              text-white placeholder:text-zinc-500 resize-none
              focus:outline-none focus:border-emerald-400
              focus:shadow-[0_0_10px_rgba(16,185,129,0.4)]"
            />

            <button
              type="submit"
              className="bg-white text-neutral-950 py-3 rounded-md font-semibold
              hover:bg-neutral-300 hover:scale-105 transition-all duration-300
              hover:shadow-[0_0_20px_rgba(225,225,225,0.6)]"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 px-10">
        <Footer />
      </footer>
    </div>
  );
};

export default SupportPage;

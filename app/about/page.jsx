"use client";

import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-white">
      <TopNav page="About Us" />

      {/* Hero Section */}
      <section className="mt-12 px-10 text-center">
        <h1 className="text-5xl font-bold text-white">
          About Electric Love
        </h1>
        <div className="mx-auto mt-3 h-1 w-28 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
        <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
          Powering your digital lifestyle with premium electronics,
          cutting-edge design, and uncompromising quality.
        </p>
      </section>

      {/* Story Section */}
      <section className="mt-32 px-10 max-w-6xl mx-auto">
        <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800
        hover:border-emerald-400 transition-all duration-300
        hover:shadow-[0_0_25px_#10b98140]">
          <h2 className="text-3xl font-semibold text-emerald-400 mb-4">
            Our Story
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Electric Love was born from a passion for technology and design.
            We believe electronics shouldn’t just perform well — they should
            feel exciting, look beautiful, and seamlessly integrate into your
            life.
            <br /><br />
            From premium headphones to powerful laptops and smart devices,
            every product we offer is hand-picked for quality, performance,
            and value.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mt-32 px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800
        hover:border-emerald-400 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-3">
            🚀 Our Mission
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            To deliver premium electronics that combine innovation,
            performance, and style — without inflated prices or compromises.
          </p>
        </div>

        <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800
        hover:border-emerald-400 transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-3">
            🌌 Our Vision
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            To become India’s most loved destination for modern electronics,
            where technology meets trust and design meets performance.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mt-32 px-10 text-center">
        <h2 className="text-4xl font-bold">What We Stand For</h2>
        <div className="mx-auto mt-3 h-1 w-24 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Premium Quality",
              desc: "Only products that meet our highest standards.",
            },
            {
              title: "Fair Pricing",
              desc: "No middlemen. No unnecessary markups.",
            },
            {
              title: "Fast Delivery",
              desc: "Quick, reliable shipping across India.",
            },
            {
              title: "Customer First",
              desc: "Your satisfaction drives everything we do.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-neutral-900 p-6 rounded-xl border border-neutral-800
              hover:border-emerald-400 transition-all duration-300
              hover:shadow-[0_0_20px_#10b98160]"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Feel the Power?
        </h2>
        <p className="text-zinc-400 mb-8">
          Discover electronics you’ll love — designed for modern life.
        </p>
        <button
          className="bg-white text-neutral-950 px-6 py-3 rounded-md font-semibold
          hover:bg-neutral-300 hover:scale-105 transition-all duration-300
          hover:shadow-[0_0_20px_rgba(225,225,225,0.6)]"
        >
          Explore Products
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-32 px-10">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;

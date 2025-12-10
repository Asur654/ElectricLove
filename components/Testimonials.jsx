"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import P1 from "@/public/images/profile1.jpeg";
import P2 from "@/public/images/profile2.jpeg";
import P3 from "@/public/images/profile3.jpeg";
import P4 from "@/public/images/profile4.jpeg";
import P5 from "@/public/images/profile5.jpeg";
import P6 from "@/public/images/profile6.jpeg";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Great service and quality products!",
    rating: 5,
    image: P1,
  },
  {
    name: "Jane Smith",
    feedback: "Fast shipping and excellent customer support.",
    rating: 4,
    image: P2,
  },
  {
    name: "Alice Johnson",
    feedback: "Highly recommend this store for all your electronic needs.",
    rating: 5,
    image: P3,
  },
  {
    name: "Bob Brown",
    feedback: "Good variety of products but a bit pricey.",
    rating: 3,
    image: P4,
  },
  {
    name: "Charlie Davis",
    feedback: "Loved the user experience and the product quality.",
    rating: 5,
    image: P5,
  },
  {
    name: "Eve White",
    feedback: "Had some issues with delivery, but overall satisfied.",
    rating: 4,
    image: P6,
  },
];

const TestimonialsCarousel = () => {
  return (
    <div className="w-full py-16 px-8 bg-neutral-900 flex flex-col items-center rounded-xl">

      <h1 className="text-3xl font-semibold text-white mb-8 text-center">
        What Our Customers Say
      </h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-6xl"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="
              bg-neutral-800 border border-neutral-700 
              rounded-xl p-6 h-64 flex flex-col items-center justify-between
              transition-all duration-300
              hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]
            ">
              <div className="flex items-center justify-center gap-6">
              <div className="bg-red-500 rounded-full w-24 h-24 border-4 border-emerald-500 overflow-hidden flex items-center justify-center">
                <Image src={t.image} alt={t.name} className="w-24 h-24 rounded-full object-cover " />
              </div>
              <h3 className="text-white text-xl font-semibold text-center">
                {t.name}
              </h3>
              </div>

              <p className="text-emerald-400 text-center text-sm">
                {"★".repeat(t.rating)}
                {"☆".repeat(5 - t.rating)}
              </p>

              <p className="text-zinc-400 text-sm text-center mt-2">
                {t.feedback}
              </p>

              <div className="mt-4 h-0.5 w-full bg-linear-to-r from-transparent via-emerald-400 to-transparent opacity-30"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsCarousel;

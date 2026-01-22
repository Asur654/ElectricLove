/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Featured from "@/components/Featured";
import WhyElove from "@/components/WhyElove";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";

const Home = () => {
  const items = [
    {
      title: "Laptops",
      image: "/images/Laptop.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Smartphones",
      image: "/images/Smartphone.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Projectors",
      image: "/images/Projector.png",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Smartwatches",
      image: "/images/Smartwatch.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "TWS Buds",
      image: "/images/TWS_Buds.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Headphones",
      image: "/images/Heaphone.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
  ];

  return (
    <div className="gap-6 flex flex-col w-full min-h-screen bg-neutral-950 px-10">
      <TopNav page="Home" />
      <section className="h-screen bg-neutral-950 px-10">
        <div className="flex items-center justify-between h-[80%]">
          <div>
            <p className="text-white text-2xl">Welcome to</p>
            <h1 className="font-bold text-emerald-400 text-8xl -ml-2">
              Electric Love
            </h1>
            <p className="text-white text-2xl font-semibold">
              Experience the Shock of Premium Electronics.
            </p>
            <div className="mt-4 flex gap-4">
              <button
                className="border border-white text-white hover:bg-neutral-800 px-4 py-2 rounded-md hover:scale-105 transition-transform duration-300
      hover:shadow-[0_0_20px_4px_rgba(110,231,183,0.6)]"
              >
                Shop the Future
              </button>
              <button
                className="bg-white text-neutral-950 hover:bg-neutral-300 px-4 py-2 rounded-md hover:scale-105 transition-transform duration-300
      hover:shadow-[0_0_20px_4px_rgba(225,225,225,0.6)]"
              >
                Explore New Arrival
              </button>
            </div>
          </div>
          <div className="h-full w-[55%] flex items-center justify-center">
            <DraggableCardContainer className="relative flex h-[600px] w-[800px] mx-auto items-center justify-center overflow-clip -ml-16 mt-4">
              <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                Pizza On Thy Roof . 😉
              </p>
              {items.map((item, key) => (
                <DraggableCardBody key={key} className={item.className}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="pointer-events-none relative z-10 h-80 w-80 top-0 object-cover"
                  />
                  <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                    {item.title}
                  </h3>
                </DraggableCardBody>
              ))}
            </DraggableCardContainer>
          </div>
        </div>
      </section>

      {/* Featured section */}

      <section className="min-h-fit w-full bg-neutral-950 flex flex-col mt-32 gap-12 px-10">
        <div className="w-full h-1 -mt-24 bg-linear-to-r from-neutral-950 via-emerald-400 to-neutral-950"></div>
        <div className="text-center mt-2">
          <h1 className="text-5xl font-bold text-white">Featured</h1>
          <div className="mx-auto mt-2 h-1 w-24 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]"></div>
        </div>

        <div className="w-full">
          <Featured />
        </div>
      </section>

      {/* Why E-Love section */}

      <section className="min-h-fit w-full bg-neutral-950 flex flex-col mt-32 gap-12 px-10">
        <div className="w-full h-1 -mt-24 bg-linear-to-r from-neutral-950 via-emerald-400 to-neutral-950"></div>

        <div className="text-center mt-2">
          <h1 className="text-5xl font-bold text-white">Why Electric Love?</h1>
          <div className="mx-auto mt-2 h-1 w-24 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]"></div>
        </div>
        <div className="w-full">
          <WhyElove />
        </div>
      </section>

      {/* Testimonials section */}
      <section className="min-h-fit w-full bg-neutral-950 flex flex-col mt-32 gap-12 px-10">
        <div className="w-full h-1 -mt-24 bg-linear-to-r from-neutral-950 via-emerald-400 to-neutral-950"></div>

          <div className="w-full">
          <Testimonials />
        </div>
      </section>
    </div>
  );
};

export default Home;

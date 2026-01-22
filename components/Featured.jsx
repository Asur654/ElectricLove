"use client";
import { useState } from "react";
import { useAppContext } from "contexts/DataContext";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Featured = () => {
  const { data } = useAppContext();
  

  return (
      <div>
        {data && data.length > 0 ? (
          <HoverEffect items={data.slice(0, 4)} className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4" />
        ) : (
          <p className="text-white">No featured products available.</p>
        )}
      </div>
  );
};

export default Featured;

"use client";
import { useState } from "react";
import { useAppContext } from "contexts/DataContext";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Featured = () => {
  const { data } = useAppContext();
  

  return (
      <div>
        {data && data.length > 0 ? (
          <HoverEffect items={data.slice(0, 5)} />
        ) : (
          <p className="text-white">No featured products available.</p>
        )}
      </div>
  );
};

export default Featured;

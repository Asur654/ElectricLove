"use client";
import TopNav from "@/components/TopNav";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React, { useState } from "react";
import { useAppContext } from "contexts/DataContext";

const Products = () => {
  const { data } = useAppContext();
  const [active, setActive] = useState(1);
  const categories = ["Smartphones","Mens-Watches","Womens-Watches", "Laptops","Mobile-Accessories","Tablets"];
  const [selectedCategories, setSelectedCategories] = useState([]);
  const brands = ["Apple",
  "Asus","Lenovo","Dell","Rolex","Oppo","Realme","Samsung","Vivo"];
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState(1000000);
  const pages = [1, 2, 3, 4, 5];
  const handlefilter = () => {
    console.log("filter applied");
  };

  const filteredData = data.filter((item) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    const matchBrand =
      selectedBrands.length === 0 || selectedBrands.includes(item.brand);

    const matchPrice = item.price <= price;

    return matchCategory && matchBrand && matchPrice;
  });

  return (
    <div className="w-full min-h-screen bg-neutral-950">
      <TopNav page="Products" />

      {/* Page Header */}
      <section className="px-10 text-center">
        <h1 className="text-5xl font-bold text-white">Explore Our Products</h1>
        <div className="mx-auto mt-3 h-1 w-28 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
        <p className="mt-4 text-zinc-400 text-lg">
          Premium electronics crafted for performance & style
        </p>
      </section>

      <main className="w-full flex px-10">
        <div className="text-white h-full w-74 bg-neutral-900 mt-12 rounded-md p-4 flex flex-col gap-4 sticky -top-16">
          {/* <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-zinc-300">
              Search Products
            </label>
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md bg-neutral-950 px-3 py-2 text-sm border border-neutral-700 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-400 focus:shadow-[0_0_10px_rgba(16,185,129,0.4)]"
            />
          </div> */}

          {/* Category */}

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
              Category
            </h2>

            {categories.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 text-sm cursor-pointer text-zinc-400 hover:text-white"
              >
                <input
                  type="checkbox"
                  className="accent-emerald-400 h-4 w-4 cursor-pointer"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedCategories((prev) => [...prev, cat.toLocaleLowerCase()]);
                    } else {
                      setSelectedCategories((prev) => prev.filter((c) => c !== cat.toLocaleLowerCase()));
                    }
                  }}
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Brand */}

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
              Brand
            </h2>

            {brands.map((brand) => (
              <label
                key={brand}
                className="flex items-center gap-3 text-sm cursor-pointer text-zinc-400 hover:text-white"
              >
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedBrands((prev) => [...prev, brand]);
                    } else {
                      setSelectedBrands((prev) => prev.filter((b) => b !== brand));
                    }
                  }}
                  type="checkbox"
                  className="accent-emerald-400 h-4 w-4 cursor-pointer"
                />
                {brand}
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">
              Price Range
            </h2>

            {/* Value Display */}
            <div className="flex justify-between text-sm text-zinc-400">
              <span>₹0</span>
              <span className="text-emerald-400 font-semibold">₹{price}</span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min="0"
              max="100000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full h-2 rounded-lg cursor-pointer appearance-none bg-neutral-800 accent-emerald-400 focus:outline-none focus:shadow-[0_0_12px_rgba(16,185,129,0.4)]"
            />
          </div>

          {/* apply button */}

          <div className="mt-4">
            <button
              onClick={handlefilter}
              className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors px-4 py-2 rounded-md font-semibold text-white"
            >
              Apply Filters
            </button>
          </div>
        </div>
        <div className="text-white h-full w-full -py-10 px-2">
          {filteredData && filteredData.length > 0 ? (
            <HoverEffect
              items={filteredData.slice(
                (active - 1) * 12,
                (active - 1) * 12 + 12
              )}
              className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3"
            />
          ) : (
            <p className="text-white">No featured products available.</p>
          )}
        </div>
      </main>
      <div className="flex justify-center mt-4">
        {pages.map((number, key) => (
          <div key={key} className="mx-2">
            <button
              onClick={() => setActive(number)}
              className={`rounded-full text-white ${
                number === active ? "bg-emerald-500" : "bg-neutral-800"
              } px-4 py-2 hover:bg-emerald-500 transition-colors`}
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

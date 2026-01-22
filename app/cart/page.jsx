"use client";

import Image from "next/image";
import TopNav from "@/components/TopNav";
import { FaTrash } from "react-icons/fa";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useCart } from "@/contexts/CartContext";
import { deleteItemFromCart, increamentItem, decrementItem } from "@/utils/CartActions";
import { useAuth } from "@/contexts/AuthContext";


const CartPage = () => {

  const { cart } = useCart();
  const { user } = useAuth();

  const subtotal = cart?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ProtectedRoute>
    <div className="flex flex-col min-h-screen bg-neutral-950">
      <TopNav page="Cart" />

      {/* Page Header */}
      <section className="mt-32 px-10 text-center">
        <h1 className="text-5xl font-bold text-white">Your Cart</h1>
        <div className="mx-auto mt-3 h-1 w-24 bg-emerald-500 rounded-full shadow-[0_0_15px_#10b981]" />
        <p className="mt-4 text-zinc-400">
          Review your items before checkout
        </p>
      </section>

      {/* Cart Content */}
      <section className="mt-16 px-10 flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-1 flex flex-col gap-6">
          {cart?.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-neutral-900 p-4 rounded-xl border border-neutral-800
              hover:border-emerald-400 transition-all duration-300
              hover:shadow-[0_0_20px_#10b98160]"
            >
              {/* Image */}
              <div className="h-24 w-24 flex items-center justify-center bg-neutral-950 rounded-lg">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-white font-semibold">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  ₹{item.price}
                </p>
              </div>

              {/* Quantity Change */}
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-md bg-neutral-800 text-white hover:bg-neutral-700"
                onClick={()=>decrementItem({ itemId: item.id, Useruid: user.uid })}>
                  −
                </button>
                <span className="text-white">{item.quantity}</span>
                <button className="w-8 h-8 rounded-md bg-neutral-800 text-white hover:bg-neutral-700"
                onClick={()=>increamentItem({ itemId: item.id, Useruid: user.uid })}>
                  +
                </button>
              </div>
              {/* Delete Button */}
              <button className="text-red-400 hover:text-red-500 transition"
              onClick={() => deleteItemFromCart({ itemId: item.id, Useruid: user.uid })}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-96 h-fit bg-neutral-900 rounded-xl p-6 border border-neutral-800
        shadow-[0_0_25px_rgba(0,0,0,0.6)]">
          <h2 className="text-white text-xl font-semibold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-zinc-400 mb-3">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between text-zinc-400 mb-3">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t border-neutral-800 my-4" />

          <div className="flex justify-between text-white text-lg font-semibold mb-6">
            <span>Total</span>
            <span className="text-emerald-400">${subtotal}</span>
          </div>

          <button
            className="w-full bg-white text-neutral-950 py-3 rounded-md font-semibold
            hover:bg-neutral-300 hover:scale-105 transition-all duration-300
            hover:shadow-[0_0_20px_rgba(225,225,225,0.6)]"
          >
            Proceed to Checkout
          </button>
        </div>
      </section>
    </div>
    </ProtectedRoute>
  );
};

export default CartPage;

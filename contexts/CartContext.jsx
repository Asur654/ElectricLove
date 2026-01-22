"use client"
import { createContext, useState, useContext, useEffect } from "react";
import { getDocs, collection, doc, onSnapshot } from "firebase/firestore";
import { useAuth } from "./AuthContext";
import { db } from "@/lib/firebase";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState(null);
  const [cartLoading, setCartLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) {
      setCart([]);
      setCartLoading(false);
      return;
    }

      const cartRef = collection(
        db,
        `ElectricLove/UserData/Users/${user.uid}/Cart`
      );
      const unsubscribe = onSnapshot(cartRef, (snap)=>{
        const items = snap.docs.map(d=> ({id: d.id, ...d.data()}));
        setCart(items);
        setCartLoading(false);
      });

      return () => unsubscribe();
  }, [user?.uid]);

  return (
    <CartContext.Provider value={{ cart, cartLoading }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

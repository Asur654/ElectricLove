"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const allowedCategories = ["smartphones","mens-watches","laptops", "mobile-accessories","womens-watches","tablets","womens-watches"];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/proxy/products");
        const filteredData = response.data.products.filter((product) =>
          allowedCategories.includes(product.category.toLowerCase())
        );
        setData(filteredData);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider value={{ data, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

import { Ubuntu } from "next/font/google";
import "./globals.css";
import { FloatingDockDemo } from "../components/Navbar";
import { AppProvider } from "contexts/DataContext";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/contexts/AuthContext";
import { Toaster } from 'react-hot-toast';
import { CartProvider } from "@/contexts/CartContext";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // optional
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "Electric Love",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.variable} suppressHydrationWarning={true}>
      <body className={ubuntu.className} suppressHydrationWarning={true}>
        {/* <div className="backdrop-blur-md fixed bottom-2 inset-x-0 flex items-center justify-center">
      <div className="w-full h-10 bg-linear-to-r from-neutral-950 via-emerald-400 to-neutral-950"></div>
      </div> */}
        <Toaster />
        <AppProvider>
        <AuthProvider>
        <CartProvider>
        {children}
        </CartProvider>  
        </AuthProvider>
        </AppProvider>
        <FloatingDockDemo />
        <Footer />
      </body>
    </html>
  );
}

"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Only redirect when we've finished checking auth state
    if (!loading && !user) {
      router.push("/register");
    }
  }, [user, loading, router]);

  // While checking, or if no user, render nothing (or a loader)
  if (loading) return <div className="spinner h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  if (!user) return null;

  return children;
};

export default ProtectedRoute;
import { Footer } from "@/components/Footer";
import { TraderHeader } from "@/components/Header";
import { Dashboard } from "@/container/Daashboard";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import React from "react";

const dashboard = () => {
  return (
    <>
      <TraderHeader />
      <ProtectedRoute>
        <Dashboard />
        <Footer/>
      </ProtectedRoute>
    </>
  );
};

export default dashboard;

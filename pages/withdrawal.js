import { Footer } from "@/components/Footer";
import { TraderHeader } from "@/components/Header";
import ProtectedRoute from "@/container/ProtectedRoute/ProtectedRoute";
import { Withdraw } from "@/container/Withdraw";
import React from "react";

const withdrawal = () => {
  return (
    <div>
      <ProtectedRoute>
        <TraderHeader />
        <Withdraw />
        <Footer />
      </ProtectedRoute>
    </div>
  );
};

export default withdrawal;

import React from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { currentUser } = useAuth();

  if (!currentUser) {
    router.push("/login");
  }
  return children;
};
export default ProtectedRoute;

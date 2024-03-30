import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../Page/ProductDetail";
import { useLocation } from "react-router";

/* 사용자 인증 상태 결정 로직 */;
const PrivateRoute = ({ authenticate }) => {
  const location = useLocation();
  return authenticate ? (
    <ProductDetail />
  ) : (
    <Navigate to="/login" replace state={{ to: location }} />
  );
};

export default PrivateRoute; 
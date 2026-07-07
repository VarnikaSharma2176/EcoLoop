import { Routes, Route } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const Placeholder = ({ title }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "70vh",
      fontSize: "2rem",
      fontWeight: "600",
    }}
  >
    {title}
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <LandingPage />
          </PublicLayout>
        }
      />

      <Route
  path="/login"
  element={
    <PublicRoute>
      <PublicLayout>
        <LoginPage />
      </PublicLayout>
    </PublicRoute>
  }
/>

      <Route
  path="/register"
  element={
    <PublicRoute>
      <PublicLayout>
        <RegisterPage />
      </PublicLayout>
    </PublicRoute>
  }
/>

      <Route
        path="/knowledge"
        element={
          <PublicLayout>
            <Placeholder title="Knowledge Hub" />
          </PublicLayout>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Placeholder title="Citizen Dashboard" />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
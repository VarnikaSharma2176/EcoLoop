import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaTruck,
  FaUserShield,
} from "react-icons/fa";
import AuthLayout from "../../components/auth/AuthLayout";

function LoginPage() {
  const [role, setRole] = useState("Citizen");

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to continue your EcoLoop journey."
    >
      <form className="space-y-5">

        <div>
          <label className="mb-3 block font-medium">
            Login As
          </label>

          <div className="grid grid-cols-3 gap-3">

            <button
              type="button"
              onClick={() => setRole("Citizen")}
              className={`rounded-xl border p-4 text-center transition ${
                role === "Citizen"
                  ? "border-green-700 bg-green-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaUser className="mx-auto mb-2 text-xl" />
              Citizen
            </button>

            <button
              type="button"
              onClick={() => setRole("Collector")}
              className={`rounded-xl border p-4 text-center transition ${
                role === "Collector"
                  ? "border-green-700 bg-green-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaTruck className="mx-auto mb-2 text-xl" />
              Collector
            </button>

            <button
              type="button"
              onClick={() => setRole("Administrator")}
              className={`rounded-xl border p-4 text-center transition ${
                role === "Administrator"
                  ? "border-green-700 bg-green-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaUserShield className="mx-auto mb-2 text-xl" />
              Admin
            </button>

          </div>
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border py-3 pl-12 pr-4"
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-4 top-4 text-gray-400" />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border py-3 pl-12 pr-4"
          />
        </div>

        <button className="w-full rounded-lg bg-green-700 py-3 text-white hover:bg-green-800">
          Login
        </button>

        {role === "Citizen" && (
          <p className="text-center">
            New Citizen?{" "}
            <Link
              to="/register"
              className="font-semibold text-green-700"
            >
              Register Here
            </Link>
          </p>
        )}
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
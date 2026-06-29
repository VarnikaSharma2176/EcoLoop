import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";
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
          <label className="mb-2 block font-medium">
            Login As
          </label>

          <div className="relative">
            <FaUserShield className="absolute left-4 top-4 text-gray-400" />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
            >
              <option>Citizen</option>
              <option>Collector</option>
              <option>Administrator</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email Address
          </label>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Remember Me
          </label>

          <button
            type="button"
            className="text-sm text-green-700 hover:underline"
          >
            Forgot Password?
          </button>

        </div>

        <button
          className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Login
        </button>

        {role === "Citizen" && (
          <p className="text-center text-gray-600">
            New Citizen?{" "}
            <Link
              to="/register"
              className="font-semibold text-green-700 hover:underline"
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
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import AuthLayout from "../../components/auth/AuthLayout";

function RegisterPage() {
  const [accountType, setAccountType] = useState("Individual");

  return (
    <AuthLayout
      title="Create Citizen Account"
      subtitle="Register to schedule your e-waste pickups."
    >
      <form className="space-y-5">

        <div>
          <label className="mb-2 block font-medium">
            Account Type
          </label>

          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-green-700"
          >
            <option>Individual</option>
            <option>Organization</option>
          </select>
        </div>

        <div className="relative">
          {accountType === "Individual" ? (
            <FaUser className="absolute left-4 top-4 text-gray-400" />
          ) : (
            <FaBuilding className="absolute left-4 top-4 text-gray-400" />
          )}

          <input
            type="text"
            placeholder={
              accountType === "Individual"
                ? "Full Name"
                : "Organization Name"
            }
            className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
          />
        </div>

        {accountType === "Organization" && (
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Contact Person"
              className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
            />
          </div>
        )}

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-4 top-4 text-gray-400" />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-4 top-4 text-gray-400" />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4 outline-none focus:border-green-700"
          />
        </div>

        <button className="w-full rounded-lg bg-green-700 py-3 font-semibold text-white hover:bg-green-800">
          Create Account
        </button>

        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-700 hover:underline"
          >
            Login
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}

export default RegisterPage;
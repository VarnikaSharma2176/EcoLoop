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
  const [type, setType] = useState("Individual");

  return (
    <AuthLayout
      title="Create Citizen Account"
      subtitle="Register to start recycling responsibly."
    >
      <form className="space-y-5">

        <div>

          <label className="mb-3 block font-medium">
            Account Type
          </label>

          <div className="grid grid-cols-2 gap-4">

            <button
              type="button"
              onClick={() => setType("Individual")}
              className={`rounded-xl border p-5 ${
                type === "Individual"
                  ? "border-green-700 bg-green-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaUser className="mx-auto mb-3 text-2xl" />
              Individual
            </button>

            <button
              type="button"
              onClick={() => setType("Organization")}
              className={`rounded-xl border p-5 ${
                type === "Organization"
                  ? "border-green-700 bg-green-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <FaBuilding className="mx-auto mb-3 text-2xl" />
              Organization
            </button>

          </div>

        </div>

        <div className="relative">
          <FaUser className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder={
              type === "Individual"
                ? "Full Name"
                : "Organization Name"
            }
            className="w-full rounded-lg border py-3 pl-12 pr-4"
          />
        </div>

        {type === "Organization" && (
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Contact Person"
              className="w-full rounded-lg border py-3 pl-12 pr-4"
            />
          </div>
        )}

        <div className="relative">
          <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border py-3 pl-12 pr-4"
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-4 top-4 text-gray-400" />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border py-3 pl-12 pr-4"
          />
        </div>

        <div className="relative">
          <FaLock className="absolute left-4 top-4 text-gray-400" />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full rounded-lg border py-3 pl-12 pr-4"
          />
        </div>

        <button className="w-full rounded-lg bg-green-700 py-3 text-white hover:bg-green-800">
          Create Account
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-700"
          >
            Login
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}

export default RegisterPage;
function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}
        <div className="bg-green-700 text-white p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">EcoLoop</h1>

          <p className="mt-6 text-lg leading-8">
            Closing the Loop on Electronic Waste.
          </p>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold">
              Smart E-Waste Collection Platform
            </h2>

            <p className="mt-4 leading-7 text-green-100">
              Schedule pickups, track recycling progress, earn EcoPoints and
              contribute towards a cleaner environment.
            </p>
          </div>
        </div>

        {/* Right Section */}

        <div className="p-10 flex flex-col justify-center">

          <h2 className="text-3xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="mt-2 text-gray-500">
            {subtitle}
          </p>

          <div className="mt-8">

            {children}

          </div>

        </div>

      </div>
    </div>
  );
}

export default AuthLayout;
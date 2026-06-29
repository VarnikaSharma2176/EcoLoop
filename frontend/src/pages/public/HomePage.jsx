import { Link } from "react-router-dom";
import PublicLayout from "../../components/layout/PublicLayout";

function HomePage() {
  return (
    <PublicLayout>
      <section className="bg-green-50">
        <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Sustainable E-Waste Management Platform
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
            Closing the Loop on
            <span className="block text-green-700">
              Electronic Waste
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            Schedule e-waste pickups, track recycling progress, earn EcoPoints,
            and contribute towards a cleaner and greener future with EcoLoop.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/login"
              className="rounded-lg bg-green-700 px-8 py-3 text-white transition hover:bg-green-800"
            >
              Schedule Pickup
            </Link>

            <Link
              to="/knowledge-hub"
              className="rounded-lg border border-green-700 px-8 py-3 text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              Learn About E-Waste
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default HomePage;
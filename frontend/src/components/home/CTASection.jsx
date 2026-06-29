import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-5xl font-bold text-gray-900">
          Ready to Recycle Responsibly?
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Join EcoLoop today and become a part of the movement towards a cleaner,
          greener, and more sustainable future.
        </p>

        <Link
          to="/login"
          className="inline-block mt-10 rounded-lg bg-green-700 px-8 py-3 text-white hover:bg-green-800"
        >
          Schedule Your First Pickup
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
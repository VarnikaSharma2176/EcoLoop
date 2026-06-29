import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[80vh] items-center justify-center bg-green-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-green-700">
            EcoLoop
          </h1>

          <p className="mt-6 text-xl text-gray-700">
            Closing the Loop on Electronic Waste.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800">
              Schedule Pickup
            </button>

            <button className="rounded-lg border border-green-700 px-6 py-3 text-green-700 hover:bg-green-700 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
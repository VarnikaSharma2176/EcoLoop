import PublicLayout from "../../components/layout/PublicLayout";

function AboutPage() {
  return (
    <PublicLayout>
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold text-green-700">
            About EcoLoop
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            EcoLoop is a smart e-waste collection and management platform
            designed to simplify responsible electronic waste disposal. Our
            mission is to connect citizens, organizations, collectors, and
            recycling centers through one transparent digital platform.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-600 leading-8">
              Encourage responsible recycling by making e-waste collection
              accessible, transparent, and rewarding.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-600 leading-8">
              Build a sustainable future where electronic waste is recycled
              efficiently instead of ending up in landfills.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-center text-4xl font-bold">
            How EcoLoop Works
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              "Book Pickup",
              "Collector Assigned",
              "Waste Collected",
              "Recycled Responsibly",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-xl bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default AboutPage;
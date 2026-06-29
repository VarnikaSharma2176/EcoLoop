import PublicLayout from "../../components/layout/PublicLayout";

function KnowledgeHubPage() {
  const topics = [
    "What is E-Waste?",
    "Types of E-Waste",
    "Accepted Items",
    "Non-Accepted Items",
    "Device Preparation Guide",
    "Environmental Impact",
    "Recycling Journey",
    "Government Guidelines",
    "Frequently Asked Questions",
    "Ask EcoLoop (AI)",
  ];

  return (
    <PublicLayout>
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-bold text-green-700">
            EcoLoop Knowledge Hub
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Learn everything about electronic waste and responsible recycling.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic}
                className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default KnowledgeHubPage;
function HowItWorksSection() {
  const steps = [
    {
      step: "1",
      title: "Schedule Pickup",
      description: "Book an e-waste pickup in less than 2 minutes.",
    },
    {
      step: "2",
      title: "Collector Visits",
      description: "A verified collector picks up your electronic waste.",
    },
    {
      step: "3",
      title: "Responsible Recycling",
      description: "Waste is safely delivered to an authorized recycling center.",
    },
    {
      step: "4",
      title: "Earn EcoPoints",
      description: "Receive EcoPoints for contributing towards a greener future.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          How EcoLoop Works
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                {item.step}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
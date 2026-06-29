function SDGSection() {
  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          Supporting Sustainable Development Goals
        </h2>

        <p className="mt-6 text-lg leading-8">
          EcoLoop contributes towards responsible consumption, sustainable
          cities, climate action, and environmental awareness by making
          electronic waste recycling simple, transparent, and accessible.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/10 p-6">
            <h3 className="text-2xl font-bold">SDG 11</h3>
            <p>Sustainable Cities</p>
          </div>

          <div className="rounded-xl bg-white/10 p-6">
            <h3 className="text-2xl font-bold">SDG 12</h3>
            <p>Responsible Consumption</p>
          </div>

          <div className="rounded-xl bg-white/10 p-6">
            <h3 className="text-2xl font-bold">SDG 13</h3>
            <p>Climate Action</p>
          </div>

          <div className="rounded-xl bg-white/10 p-6">
            <h3 className="text-2xl font-bold">SDG 17</h3>
            <p>Partnerships</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SDGSection;
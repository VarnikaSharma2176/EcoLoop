import PublicLayout from "../../components/layout/PublicLayout";

function ContactPage() {
  return (
    <PublicLayout>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-12 text-center text-5xl font-bold text-green-700">
            Contact Us
          </h1>

          <div className="grid gap-10 md:grid-cols-2">
            <form className="space-y-5 rounded-xl border p-8 shadow-sm">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border p-3"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-lg border p-3"
              />

              <button className="rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800">
                Send Message
              </button>
            </form>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>support@ecoloop.com</p>
              </div>

              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+91 98765 43210</p>
              </div>

              <div>
                <h3 className="font-semibold">Address</h3>
                <p>EcoLoop Technologies</p>
                <p>Punjab, India</p>
              </div>

              <div className="flex h-60 items-center justify-center rounded-xl bg-gray-200">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default ContactPage;
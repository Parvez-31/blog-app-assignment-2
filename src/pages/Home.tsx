import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Topics section */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          What We Write About
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: "💻", label: "Technology" },
            { emoji: "🚀", label: "Productivity" },
            { emoji: "🎨", label: "Design" },
            { emoji: "📱", label: "Development" },
          ].map(({ emoji, label }) => (
            <div
              key={label}
              className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-green-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <span className="text-3xl">{emoji}</span>
              <span className="text-sm font-semibold text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured image banner */}
      <section className="relative rounded-3xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&q=80"
          alt="Writing desk with notebook"
          className="w-full h-64 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
          <h3 className="text-3xl font-bold text-white mb-3">
            Start Reading Today
          </h3>
          <p className="text-gray-200 mb-6 max-w-md">
            Hundreds of articles waiting for you — pick a topic and dive in.
          </p>
          <Link
            to="/articles"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Go to Articles
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

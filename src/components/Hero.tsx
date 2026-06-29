import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 py-16">
      {/* Left — text */}
      <div className="flex-1">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
          📝 New articles every week
        </span>

        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-5">
          Ideas Worth <br />
          <span className="text-green-600">Reading.</span>
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          Explore articles on technology, software development, and productivity
          — written by people who love what they do.
        </p>

        <div className="flex gap-4">
          <Link
            to="/articles"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3 rounded-xl transition-colors"
          >
            Browse Articles
          </Link>

          <Link
            to="/articles"
            className="border border-gray-300 hover:border-green-400 text-gray-700 font-semibold px-7 py-3 rounded-xl transition-colors"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-10 pt-8 border-t border-gray-100">
          <div>
            <p className="text-2xl font-bold text-gray-900">100+</p>
            <p className="text-sm text-gray-400 mt-0.5">Articles</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">50+</p>
            <p className="text-sm text-gray-400 mt-0.5">Authors</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">10k+</p>
            <p className="text-sm text-gray-400 mt-0.5">Readers</p>
          </div>
        </div>
      </div>

      {/* Right — image */}
      <div className="flex-1 w-full">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
          alt="Person writing on a laptop in a coffee shop"
          className="w-full h-105 object-cover rounded-3xl shadow-xl"
        />
      </div>
    </section>
  );
}

export default Hero;

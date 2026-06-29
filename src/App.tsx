import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

// Pages are lazy loaded — each page is only downloaded when the user visits it
const Home = lazy(() => import("./pages/Home"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const AuthorPage = lazy(() => import("./pages/AuthorPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4">
        {/* Suspense shows a fallback while the lazy page is loading */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/author/:authorId" element={<AuthorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";

import { getBlogs } from "../services/blogApi";
import type { Blog } from "../types/type/blog";

function ArticlesPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "asc";

  useEffect(() => {
    getBlogs()
      .then((data) => setBlogs(data.posts))
      .finally(() => setLoading(false));
  }, []);

  const sortedBlogs = [...blogs].sort((a, b) =>
    sort === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  if (loading) return <Loader />;

  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">All Articles</h1>

        <div className="flex gap-2">
          <button
            onClick={() => setSearchParams({ sort: "asc" })}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              sort === "asc"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            A - Z
          </button>

          <button
            onClick={() => setSearchParams({ sort: "desc" })}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              sort === "desc"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Z - A
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesPage;

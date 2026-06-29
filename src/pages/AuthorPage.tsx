import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Loader from "../components/Loader";

import { getAuthorBlogs } from "../services/blogApi";
import type { Blog } from "../types/type/blog";

function AuthorPage() {
  const { authorId } = useParams();
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authorId) return;

    getAuthorBlogs(authorId)
      .then((data) => setBlogs(data.posts))
      .finally(() => setLoading(false));
  }, [authorId]);

  if (loading) return <Loader />;

  return (
    <div className="py-10">
      <button
        onClick={() => navigate(-1)}
        className="text-green-600 hover:underline text-sm mb-6 block"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Author {authorId} — Articles
      </h1>

      <div className="flex flex-col gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              {blog.title}
            </h2>

            <Link
              to={`/blog/${blog.id}`}
              className="text-green-600 font-medium hover:underline text-sm"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuthorPage;

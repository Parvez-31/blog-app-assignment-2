import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "../components/Loader";

import { getSingleBlog } from "../services/blogApi";
import type { Blog } from "../types/type/blog";

function BlogDetails() {
  const { id } = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getSingleBlog(id)
      .then((data) => setBlog(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  if (!blog) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-gray-700">Blog not found</h1>
        <Link to="/articles" className="text-green-600 hover:underline mt-4 block">
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10">
      <Link to="/articles" className="text-green-600 hover:underline text-sm mb-6 block">
        ← Back to Articles
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>

      <img
        src={`https://picsum.photos/1000/500?random=${blog.id}`}
        alt={blog.title}
        className="w-full rounded-xl mb-6 shadow-sm"
      />

      <p className="text-gray-600 leading-8 mb-8">{blog.body}</p>

      <Link
        to={`/author/${blog.userId}`}
        className="bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 inline-block"
      >
        View Author
      </Link>
    </div>
  );
}

export default BlogDetails;

import { Link } from "react-router-dom";
import type { Blog } from "../types/type/blog";

interface Props {
  blog: Blog;
}

function BlogCard({ blog }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <img
        src={`https://picsum.photos/600/400?random=${blog.id}`}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{blog.title}</h2>

        <p className="text-gray-500 text-sm mb-4">{blog.body.slice(0, 100)}...</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">Author {blog.userId}</span>

          <Link
            to={`/blog/${blog.id}`}
            className="text-green-600 font-semibold text-sm hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

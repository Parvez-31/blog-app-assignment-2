const BASE_URL = "https://dummyjson.com";

export const getBlogs = async () => {
  const res = await fetch(`${BASE_URL}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};

export const getSingleBlog = async (id: string) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`);

  if (!res.ok) {
    throw new Error("Blog not found");
  }

  return res.json();
};

export const getAuthorBlogs = async (authorId: string) => {
  const res = await fetch(`${BASE_URL}/posts/user/${authorId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch author blogs");
  }

  return res.json();
};

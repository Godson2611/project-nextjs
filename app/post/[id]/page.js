"use client";

import { useEffect, useState } from "react";

export default function page({ params }) {
  const [post, setPost] = useState();
  const id = params.id;
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <>
      {post && (
        <main className="container mx-auto px-4 py-6">
          <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
          <img src={post.img} alt="Post Image" className="my-4" />
          <p>{post.description}</p>
        </main>
      )}
    </>
  );
}

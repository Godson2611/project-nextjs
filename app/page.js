"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 py-6 my-3">
        <h2 className="display-6 font-bold mb-4">Welcome to Our Blog</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua
        </p>
      </main>
      <div className="d-flex justify-content-end px-4 container">
        <input type="text" className="form-control" placeholder="Search..." />
        <button className="px-4 py-2 bg-warning border-0 rounded mx-2 text-white rounded-md ml-4">
          Search
        </button>
      </div>
      <div className="d-flex gap-3  container my-4">
        {posts.map((post, id) => (
          <Link key={id} href={`post/${post._id}`}>
            <div className="col border-0 shadow p-4 rounded-3">
              <img
                className="mb-4 w-100 img-fluid object-fit-cover rounded-3 h-25"
                src={post.img}
                alt="Post Image"
              />
              <h2 className="text-xl font-semibold mb-2 text-nowrap">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.short_description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

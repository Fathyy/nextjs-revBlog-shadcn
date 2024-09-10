import { getBlog } from "@/lib/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

function generateMetadata(params) {
  const blog = getBlog();

  if (!blog) {
    notFound();
  }
  return {
    title: blog.title,
    description: blog.summary,
  };
}

export default function BlogDetailsPage({ params }) {
  const blog = getBlog(params.blogsSlug);

  // blog.content = replace(/\n/g, "<br />");
  return (
    <header className="mx-auto w-full container sm:px-16 px-6">
      <div className="">
        <h1 className="text-4xl font-bold text-center mb-12">{blog.title}</h1>
      </div>
      <div className="mb-4">
        <Image
          src={blog.image}
          alt={blog.title}
          layout="responsive"
          width={500}
          height={50}
        />
      </div>
      <div className="">
        <p className="text-2xl mb-4 font-semibold">{blog.summary}</p>
        <p>{blog.content}</p>
        <p>{blog.author}</p>
      </div>
    </header>
  );
}

import React, { Suspense } from "react";
import { getBlogs } from "../../lib/blogs";
import BlogsGrid from "@/components/blogs/blogsGrid";
import Link from "next/link";

async function GetBlogs() {
  const blogs = await getBlogs();
  // console.log(blogs)
  return <BlogsGrid blogs={blogs} />;
}

export default function Blog() {
  return (
    <>
      <div className="mx-auto w-full container sm:px-16 px-6">
        <header className="space-y-4 mb-12">
          <h1>Like the articles we make?</h1>
          <p>You can now upload your own articles and we'll publish them </p>
          <Link href="/blogs/share" className="bg-orange-300 px-6 py-3 rounded-sm mt-6 text-lg font-semibold">Share now</Link>
        </header>
        <Suspense fallback={<p>Fetching Blogs...</p>}>
          <GetBlogs />
        </Suspense>
      </div>
    </>
  );
}

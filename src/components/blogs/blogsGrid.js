import { BlogPost } from "./blogPost";

export default function BlogsGrid({ blogs }) {
  console.log(blogs)
  return (
    <div className="grid grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <div key={blog.id}>
          <BlogPost {...blog} />
        </div>
      ))}
    </div>
  );
}

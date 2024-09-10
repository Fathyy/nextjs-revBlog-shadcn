"use client"
import ImagePicker from "@/components/blogs/image-picker";
import BlogsFormSubmit from "@/components/blogs/blogs-form-submit";
import { shareBlog } from "@/lib/actions";
import { useFormState } from 'react-dom';

export default function ShareBlog() {
  const [state, formAction] = useFormState(shareBlog, {message: null})
  
  return (
    <div className="mx-auto w-full container sm:px-16 px-6">
      <header>
        <h1 className="text-4xl font-bold">Share your favourite blogs</h1>
      </header>

      <main>
        <form action={formAction} className="mt-6 mx-auto max-w-4xl p-6 bg-gray-800">
          <div className="flex gap-4">
          <div className="flex flex-col mb-4 gap-4 flex-1">
            <label htmlFor="name" className="text-gray-200">Your name</label>
            <input type="text" id="name" name="name" className="border border-gray-500 px-4 py-2 w-full bg-gray-600" required />
          </div>

          <div className="flex flex-col mb-4 gap-4 flex-1">
              <label htmlFor="email" className="text-gray-200">Your email</label>
              <input type="email" id="email" name="email" className="border border-gray-500 px-4 py-2 w-full bg-gray-600" required />
            </div>
          </div>

            <div className="flex flex-col mb-4 gap-4">
            <label htmlFor="title" className="text-gray-200">Title</label>
            <input type="text" id="title" name="title" className="border border-gray-500 px-4 py-2 w-full bg-gray-600" required />
          </div>

          <div className="flex flex-col mb-4 gap-4">
            <label htmlFor="summary" className="text-gray-200">Short Summary</label>
            <input type="text" id="summary" name="summary" className="border border-gray-500 px-4 py-2 w-full bg-gray-600" required />
          </div>
          <div className="flex flex-col mb-4 gap-4">
            <label htmlFor="content" className="text-gray-200">Content</label>
            <textarea
              id="content"
              name="content"
              rows="10"
              required
              className="border border-gray-500 px-4 py-2 w-full bg-gray-600"
            ></textarea>
          </div>

          {/* the image picker component goes here */}
          <ImagePicker label="Your Image" name="image"/>
          {state.message && <p>{state.message}</p>}
          <BlogsFormSubmit />
        </form>
      </main>
    </div>
  );
}

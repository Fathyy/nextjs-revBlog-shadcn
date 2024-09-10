"use client";

import { useFormStatus } from "react-dom";

export default function BlogsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-center items-center mt-6">
      <button disabled={pending} className="bg-gray-200 px-4 py-2 rounded-sm">
        {pending ? "Submitting..." : "Share Blogs"}
      </button>
    </div>
  );
}

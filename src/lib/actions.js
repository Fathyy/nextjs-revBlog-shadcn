// file to put all server actions
"use server"
import { redirect } from "next/dist/server/api-utils";
import { saveBlog } from "./blogs"

export async function shareBlog(prevState, formData){
    // share blog logic here
    const blog = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        content: formData.get("content"),
        image: formData.get("image"),
        author: formData.get("name"),
        author_email: formData.get("email"),
    }

    await saveBlog(blog);
    redirect("/blogs")
}
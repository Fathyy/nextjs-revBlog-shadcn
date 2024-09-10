import sql from 'better-sqlite3';
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";

const db = sql("blogs.db");

// fetching all blog data
export async function getBlogs(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare("SELECT * FROM blogs").all();
}

// fetching individual blog data
export function getBlog (slug) {
    return db.prepare("SELECT * FROM blogs WHERE slug = ?").get(slug);
}

// saving a meal into the database
export async function saveBlog(blog){
    blog.slug = slugify(blog.title, { lower: true});
    blog.content = xss(blog.content)

    const extension = blog.image.name.split(".").pop();
  const fileName = `${blog.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await blog.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  blog.image = `/images/${fileName}`;
  db.prepare(`INSERT INTO blogs (title, summary, content, author, author_email, image, slug) 
  VALUES(@title, 
  @summary,
  @content
  @author,
  @author_email, 
  @image,
  @slug
)`).run(blog);

}
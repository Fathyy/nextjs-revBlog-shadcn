import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function BlogPost({ title, image, content, slug, summary, author }) {
  console.log(image)
  return (
    <Card>
      <CardHeader>
        {/* <Image src={image} alt={title} fill /> */}
        <Image src={image} alt={title} layout="responsive" width={500} height={300} />
      </CardHeader>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <p>{summary}</p>
        {/* <p>{content}</p> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>{author}</p>
        <Link href={`/blogs/${slug}`}>Read More</Link>
      </CardFooter>
    </Card>
  );
}

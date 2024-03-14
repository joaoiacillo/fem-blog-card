import BlogCard from "../BlogCard";

import IllustrationCover from "../../images/illustration-article.svg";
import GregAvatar from "../../images/image-avatar.webp";

export default function App() {
  return (
    <>
      <BlogCard
        image={IllustrationCover}
        tags={["Learning"]}
        publishDate={new Date("2023-12-21 00:00:00")}
        title="HTML & CSS foundations"
        summary="These languages are the backbone of every website, defining structure, content, and presentation."
        author={{
          name: "Greg Hooper",
          avatar: GregAvatar,
        }}
      />
    </>
  );
}

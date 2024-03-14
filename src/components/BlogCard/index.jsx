import Author from "../Author";
import PublishDate from "../PublishDate";
import Tags from "../Tags";

import "./BlogCard.css";

/**
 * @param {Object} props
 * @param {string} props.image
 * @param {string[]} props.tags
 * @param {Date} props.publishDate
 * @param {string} props.title
 * @param {string} props.summary
 * @param {Object} props.author
 * @param {string} props.author.name
 * @param {string} props.author.avatar
 */
export default function BlogCard({
  image,
  tags,
  publishDate,
  title,
  summary,
  author,
}) {
  return (
    <div className="blog-card">
      <img src={image} className="card-image" />

      <Tags tags={tags} />
      <PublishDate date={publishDate} />

      <h3 className="card-title">{title}</h3>
      <p className="blog-summary">{summary}</p>

      <Author name={author.name} avatar={author.avatar} />
    </div>
  );
}

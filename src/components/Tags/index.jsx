import "./Tags.css";

export default function Tags({ tags }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li className="tag">{tag}</li>
      ))}
    </ul>
  );
}

import UserIcon from "../UserIcon";

import "./Author.css";

export default function Author({ avatar, name }) {
  return (
    <div className="author">
      <UserIcon image={avatar} />
      <span className="author-name">{name}</span>
    </div>
  );
}

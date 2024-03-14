import "./PublishDate.css";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

/**
 * @param {Object} props
 * @param {Date} props.date
 */
export default function PublishDate({ date }) {
  function getAttrDate() {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  function getHumanReadableDate() {
    return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
  }

  return (
    <p className="publish-date">
      Published <time dateTime={getAttrDate()}>{getHumanReadableDate()}</time>
    </p>
  );
}

export default function Warning({ message }) {
  if (message === "") return null;

  return <p className="warning">{message}</p>;
}

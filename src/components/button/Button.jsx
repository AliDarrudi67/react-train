export default function Button({ title, clickHandler, colorClass }) {
  return (
    <div>
      <button
        className={`px-3 py-1 rounded ${colorClass == "blue" ? "bg-blue-200" : "bg-red-200"}`}
        onClick={clickHandler}
      >
        {title}
      </button>
    </div>
  );
}

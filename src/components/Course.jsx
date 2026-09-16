export default function Course({ id, title }) {
  console.log(id);
  console.log(title);
  return (
    <div>
      <span>{id}</span>
      <h1>{title}</h1>
    </div>
  );
}

export default function Header({ title }) {
  return (
    <h1 className="text-5xl m-2 p-4 sticky text-center font-bold antialiased">
      {title}
    </h1>
  );
}

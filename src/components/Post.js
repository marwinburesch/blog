export default function Post({ title }) {
  return (
    <div className="p-6 max-w-sm mx-auto rounded-xl bg-green-300 shadow-md flex items-center space-x-4">
      {title}
    </div>
  );
}

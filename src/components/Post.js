export default function Post({ post }) {
  return (
    <article className="mt-8 px-6 pt-6 pb-2 max-w-md mx-auto rounded-xl bg-green-300 shadow-xl space-x-4 cursor-pointer transform hover:scale-105 transition-transform">
      <div className="flex flex-col">
        <h1 className="w-full text-lg font-bold">{post.title}</h1>
        <h2 className="text-right">{post.createdAt}</h2>
      </div>
    </article>
  );
}

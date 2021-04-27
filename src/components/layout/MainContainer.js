export default function MainContainer({ children }) {
  return (
    <div className="container mx-auto h-screen p-4 overflow-auto text-green-300">
      {children}
    </div>
  );
}

export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-indigo-600 px-4 py-2 rounded text-neutral-50 font-bold"
      {...props}
    >
      {children}
    </button>
  );
}

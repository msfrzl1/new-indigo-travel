export default function InputField({ type = "text", ...props }) {
  return (
    <input
      {...props}
      type={type}
      className="flex h-9 w-full rounded-md border border-slate-300 px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1"
    />
  );
}

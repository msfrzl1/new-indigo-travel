export default function Button({
  children,
  value,
  colorButton = "bg-black",
  ...props
}) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-xl ${colorButton} text-sm font-medium text-white shadow duration-300 ease-in-out`}
    >
      {children || value}
    </button>
  );
}

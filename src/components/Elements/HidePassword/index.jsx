import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";

export default function HidePassword({ showPassword, ...props }) {
  return (
    <button
      {...props}
      type="button"
      className="absolute right-2 top-1.5 cursor-pointer"
    >
      {showPassword ? (
        <AiTwotoneEye size={23} />
      ) : (
        <AiTwotoneEyeInvisible size={23} />
      )}
    </button>
  );
}

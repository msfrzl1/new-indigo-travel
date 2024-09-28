import { SiSimplelogin } from "react-icons/si";
import { GiArchiveRegister } from "react-icons/gi";

export default function AuthLayout({ type, children }) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center gap-4 sm:w-[350px]">
        <div className="flex flex-col text-center">
          {type === "login" ? (
            <GiArchiveRegister size={40} className="mx-auto text-indigo-600" />
          ) : (
            <SiSimplelogin size={40} className="mx-auto text-indigo-600" />
          )}
          <h1 className="text-2xl font-semibold tracking-tight">
            {type === "login" ? "Create an account" : "Welcome back friend"}
          </h1>
          <p className="text-sm text-slate-600">
            {type === "login"
              ? "Enter your details below to create your account"
              : "Login to your account"}
          </p>
        </div>

        {children}

        <p className="px-8 text-center text-sm text-slate-600">
          <a className="underline underline-offset-4" href="/register">
            {type === "login"
              ? "Already have an account? Sign Up"
              : "Don't have an account? Sign Up"}
          </a>
        </p>
      </div>
    </div>
  );
}

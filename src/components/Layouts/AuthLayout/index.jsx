/* eslint-disable react/no-unescaped-entities */
import { SiSimplelogin } from "react-icons/si";
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function AuthLayout({ type, children }) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-3">
      <div className="mx-auto flex w-full flex-col justify-center gap-4 sm:w-[350px]">
        <div className="flex flex-col text-center">
          {type === "signIn" ? (
            <SiSimplelogin size={40} className="mx-auto text-indigo-600" />
          ) : (
            <GiArchiveRegister size={40} className="mx-auto text-indigo-600" />
          )}
          <h1 className="text-2xl font-semibold tracking-tight">
            {type === "signIn" ? "Welcome back friend" : "Create an account"}
          </h1>
          <p className="text-sm text-slate-600">
            {type === "signIn"
              ? "Login to your account"
              : "Enter your details below to create your account"}
          </p>
        </div>

        {children}

        {type === "signIn" ? (
          <p className="px-8 text-center text-sm text-slate-600">
            <Link to="/sign-up" className="underline underline-offset-4">
              Don't have an account? Sign Up
            </Link>
          </p>
        ) : (
          <p className="px-8 text-center text-sm text-slate-600">
            <Link to="/sign-in" className="underline underline-offset-4">
              Already have an account? Sign in
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

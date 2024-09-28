import { useState } from "react";
import Button from "../../Elements/Button";
import InputField from "../../Elements/InputField";
import HidePassword from "../../Elements/HidePassword";

export default function FormSignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form>
      <div className="grid gap-4">
        <div className="space-y-2">
          <InputField
            type={"email"}
            name={"email"}
            placeholder={"Enter your email"}
          />
          <div className="relative">
            <InputField
              type={showPassword ? "text" : "password"}
              name={"password"}
              placeholder={"Enter your password"}
            />
            <HidePassword
              onClick={handleShowPassword}
              showPassword={showPassword}
            />
          </div>
        </div>
        <Button
          type={"submit"}
          value={"Sign In"}
          colorButton={"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 h-9"}
        />
      </div>
    </form>
  );
}

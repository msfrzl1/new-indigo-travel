import Button from "../../Elements/Button";
import InputField from "../../Elements/InputField";

export default function FormSignIn() {
  return (
    <form>
      <div className="grid gap-4">
        <div className="space-y-2">
          <InputField
            type={"email"}
            name={"email"}
            placeholder={"Enter your email"}
          />
          <InputField
            type={"password"}
            name={"password"}
            placeholder={"Enter your password"}
          />
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

import Button from "../../Elements/Button";
import InputField from "../../Elements/InputField";
import SelectOption from "../../Elements/SelectOption";

export default function FormSignUp() {
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
            type={"text"}
            name={"name"}
            placeholder={"Enter your name"}
          />
          <InputField
            type={"password"}
            name={"password"}
            placeholder={"Enter your password"}
          />
          <InputField
            type={"password"}
            name={"passwordRepeat"}
            placeholder={"Enter your confirm password"}
          />
          <SelectOption name={"role"}>
            <option value="">Choose :</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </SelectOption>
          <InputField
            type={"file"}
            name={"profilePictureUrl"}
            id={"profilePictureUrl"}
          />
          <InputField
            type={"number"}
            name={"phoneNumber"}
            placeholder={"08xxxxxxxxxxx"}
          />
        </div>
        <Button
          type={"submit"}
          value={"Sign Up"}
          colorButton={"bg-indigo-700 hover:bg-indigo-600 px-4 py-2 h-9"}
        />
      </div>
    </form>
  );
}

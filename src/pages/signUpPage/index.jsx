import FormSignUp from "../../components/Fragments/FormSignUp";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout type={"signUp"}>
      <FormSignUp />
    </AuthLayout>
  );
}

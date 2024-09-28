import FormSignIn from "../../components/Fragments/FormSignIn";
import AuthLayout from "../../components/Layouts/AuthLayout";

export default function SignInPage() {
  return (
    <AuthLayout>
      <FormSignIn type={"login"} />
    </AuthLayout>
  );
}

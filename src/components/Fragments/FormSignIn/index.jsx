import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscLoading } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../Elements/Button";
import InputField from "../../Elements/InputField";
import HidePassword from "../../Elements/HidePassword";
import axios from "axios";

export default function FormSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const userData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login",
        userData,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        },
      );
      if (response.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
          navigate("/");
        }, 2000);
        toast.success(response.data.message);
      }
    } catch (error) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      toast.error(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          disabled={isLoading}
          colorButton={`${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-indigo-700 hover:bg-indigo-600"}  px-4 py-2 h-9`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <VscLoading size={20} className="animate-spin" />
              Processing...
            </div>
          ) : (
            "Sign In"
          )}
        </Button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Zoom
      />
    </form>
  );
}

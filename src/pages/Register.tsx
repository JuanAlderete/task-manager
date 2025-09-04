import { useNavigate } from "react-router";
import Button from "../components/Button";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";

type FormData = {
  email: string;
  password: string;
};

function Register() {
  const navigate = useNavigate();

  function handleSubmit(data: FormData) {
    if (!data.email || !data.password) {
      setError((prev) => ({
        ...prev,
        email: {
          invalid: !data.email,
          message: "Email is required",
        },
        password: {
          invalid: !data.password,
          message: "Password is required",
        },
      }));
      return;
    } else {
      setError((prev) => ({
        ...prev,
        email: {
          invalid: false,
          message: "Email is required",
        },
        password: {
          invalid: false,
          message: "Password is required",
        },
      }));
    }
    console.log(data);
    navigate("/dashboard");
  }

  const [errors, setError] = useState<
    Record<string, { invalid: boolean; message: string }>
  >({
    email: {
      invalid: false,
      message: "Email is required",
    },
    password: {
      invalid: false,
      message: "Password is required",
    },
  });

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[var(--background-secondary)]">
      <section className="flex flex-col min-w-[20rem] max-w-md mx-auto bg-[var(--background-primary)] p-8 shadow-md rounded-lg gap-4">
        <div className="flex gap-2 items-center justify-center">
          <BadgeCheck color="var(--primary-color)" size={32} />
          <h1 className="text-2xl font-bold">TaskManager</h1>
        </div>
        <h2 className="font-semibold text-xl text-center">Register</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({
              email: (
                e.currentTarget.elements.namedItem("email") as HTMLInputElement
              ).value,
              password: (
                e.currentTarget.elements.namedItem(
                  "password"
                ) as HTMLInputElement
              ).value,
            });
          }}
        >
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-semibold w-fit">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className={`w-full rounded-lg py-2 px-4 focus-visible:outline-none ${
                errors.email.invalid &&
                "border border-red-300 focus-visible:ring-red-200 focus-visible:border-red-300"
              }`}
            />
            {errors.email.invalid && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-1">
            <label htmlFor="password" className="text-sm font-semibold w-fit">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={`w-full rounded-lg py-2 px-4 focus-visible:outline-none ${
                errors.password.invalid &&
                "border border-red-300 focus-visible:ring-red-200 focus-visible:border-red-300"
              }`}
            />
            {errors.password.invalid && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex-col gap-2">
            <Button className="w-fit mx-auto" type="submit">
              Register
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;

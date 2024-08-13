import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
};

function Login() {
  const [signupState, setSignupState] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset, // Added reset function from react-hook-form
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // Add your login or signup logic here
  };

  const handleGoogleLogin = () => {
    // Logic for signing in with Google
    console.log("Sign in with Google");
  };

  const handleFacebookLogin = () => {
    // Logic for signing in with Facebook
    console.log("Sign in with Facebook");
  };

  const loginComp = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="input input-bordered"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
          className="input input-bordered"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );

  const signupComp = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="input input-bordered"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="input input-bordered"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="input input-bordered"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Confirm Password</span>
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          className="input input-bordered"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );

  const toggleForm = () => {
    setSignupState(!signupState);
    reset(); // Reset form fields when switching between forms
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-md">
          <h3 className="font-bold text-lg">
            {signupState ? "Sign Up" : "Login"}
          </h3>
          {/* LOGIN or SIGNUP */}
          {signupState ? signupComp : loginComp}
          <div className="divider">OR</div>
          <div className="flex justify-between">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-google"
            >
              {signupState ? "Sign up with Google" : "Sign in with Google"}
            </button>
            <button
              onClick={handleFacebookLogin}
              className="btn btn-outline btn-facebook"
            >
              {signupState ? "Sign up with Facebook" : "Sign in with Facebook"}
            </button>
          </div>

          <a
            className="mx-auto mt-4 block cursor-pointer text-center text-blue-500"
            onClick={toggleForm} // Use the toggleForm function here
          >
            {signupState
              ? "Already have an account? Log in"
              : "Create new account"}
          </a>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;

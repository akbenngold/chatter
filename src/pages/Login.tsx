import React, { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";

type Inputs = {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
};

function Login() {
  const [signupState, setSignupState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { signUpWithGmail, login, createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<Inputs>();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignup: SubmitHandler<Inputs> = (data) => {
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Account creation successful!");
      })
      .catch((err) => {
        setErrorMessage("Signup failed. Please try again.");
      });
  };

  const handleLogin = (data) => {
    // SET UP MANUAL AUTH
    const email = data.email;
    const password = data.password;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login successful!");
        console.log("User logged in:", user);
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Provide a correct email & password!");
      });
  };

  const handleGoogleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        toast.success("Login success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFacebookLogin = () => {
    console.log("Sign in with Facebook");
    // Implement Facebook login logic here
  };

  const loginComp = (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="input input-bordered"
        />
      </div>
      <div className="form-control mt-6 " onClick={() => handleLogin(form)}>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );

  const signupComp = (
    <form onSubmit={handleSubmit(handleSignup)}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          {...register("name", { required: signupState })}
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
            required: signupState,
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
    reset();
    setErrorMessage("");
  };

  return (
    <div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-11/12 max-w-md">
          <h3 className="font-bold text-lg">
            {signupState ? "Sign Up" : "Login"}
          </h3>
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
            onClick={toggleForm}
          >
            {signupState
              ? "Already have an account? Log in"
              : "Create new account"}
          </a>
          <p className="text-red-500 text-sm">{errorMessage && errorMessage}</p>
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

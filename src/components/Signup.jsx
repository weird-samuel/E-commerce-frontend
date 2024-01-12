import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Signup = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="max-w-md shadow bg-base-200 w-full mx-auto flex items-center justify-center my-10 md:my-20">
      <div className="modal-action flex flex-col mt-0 justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
          method="dialog"
        >
          <h3 className="font-bold text-lg">Create An account</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
            <label className="label mt-1">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value={"Sign Up"}
              className="btn btn-primary"
            />
          </div>
          <p className="text-center my-2">
            Have an account?
            <a
              className="underline hover:text-gray-500 ml-1"
              onClick={() => document.getElementById("login_modal").showModal()}
            >
              Log in!
            </a>
          </p>
          <Link
            to={"/"}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
        </form>
        <div className="text-center space-x-3 mb-5">
          <button className="btn bg-base-300 hover:text-white transition-all duration-500 btn-circle">
            <FaGoogle />
          </button>
          <button className="btn bg-base-300 hover:text-white transition-all duration-500 btn-circle">
            <FaFacebook />
          </button>
          <button className="btn bg-base-300 hover:text-white transition-all duration-500 btn-circle">
            <FaGithub />
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Signup;

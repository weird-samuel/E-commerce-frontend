import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="login_modal" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action flex flex-col mt-0 justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body"
              method="dialog"
            >
              <h3 className="font-bold text-lg">Input Details to Log in</h3>
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
                  value={"Login"}
                  className="btn btn-primary"
                />
              </div>
              <p className="text-center my-2">
                No account?
                <Link
                  className="underline hover:text-gray-500 ml-1"
                  to={"/signup"}
                >
                  Create One!
                </Link>
              </p>
              <button
                htmlFor="login_modal"
                onClick={() => document.getElementById("login_modal").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <div className="text-center space-x-3 mb-5">
              <button className="btn btn-circle">
                <FaGoogle />
              </button>
              <button className="btn btn-circle">
                <FaFacebook />
              </button>
              <button className="btn btn-circle">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

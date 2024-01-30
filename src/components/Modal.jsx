import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { enqueueSnackbar } from "notistack";

const Modal = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const { signupWithGoogle, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  // redirect users
  // const locatioin = useLocation();
  // const navigate = useNavigate();
  // const from = locatioin.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email, password);
    login(email, password)
      .then((res) => {
        const user = res.user;
        enqueueSnackbar("Welcome user with email " + user.email, {
          variant: "success",
        });
        document.getElementById("login_modal").close();
        // navigate(from, { replace: true });
      })
      .catch((err) => {
        setErrorMessage("Provide valid login details !");
        enqueueSnackbar("Error " + err.message, { variant: "error" });
      });
  };

  // google auth
  const handleLogin = () => {
    signupWithGoogle()
      .then((res) => {
        const user = res.user;
        enqueueSnackbar("Welcome " + user.displayName, { variant: "success" });
        document.getElementById("login_modal").close();
      })
      .catch((err) => {
        enqueueSnackbar("Error" + err.message, { variant: "error" });
      });
  };

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
              {errorMessage ? (
                <p className="text-red text-xs italic">{errorMessage}</p>
              ) : (
                ""
              )}
              <div className="form-control mt-4">
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
              <a
                htmlFor="login_modal"
                onClick={() => document.getElementById("login_modal").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </a>
            </form>
            <div className="text-center space-x-3 mb-5">
              <button className="btn btn-circle" onClick={handleLogin}>
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

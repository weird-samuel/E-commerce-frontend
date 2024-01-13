import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
    updateUserProfile(name, photoURL)
      .then(() => {
        alert("Update profile successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        alert("Error" + err.message);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="card-title">Update Ya Profile</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              type="text"
              placeholder="photoURL "
              className="input input-bordered"
              required
              {...register("photoURL", { required: true })}
            />
            {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" /> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-ghost bg-green text-white">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

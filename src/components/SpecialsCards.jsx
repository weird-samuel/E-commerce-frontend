import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const SpecialsCards = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name, image, price, _id } = item;
  const [faved, setFaved] = useState(false);
  const { user } = useContext(AuthContext);

  // add to cart fn
  const handleAddToCart = () => {
    if (user && user?.email) {
      const cartItem = {
        optionItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: cartItem.name + " has been added to cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          window.location.reload();
        })
        .catch((err) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: err.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        icon: "warning",
        title: "User not authenticated",
        showCancelButton: true,
        confirmButtonText: "To Authenticate",
        text: "Signup/Login to add items to cart",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signup", { state: { from: location } });
        }
      });
    }
  };

  const handleheartclick = () => {
    setFaved(!faved);
  };
  return (
    <div className="card max-w-[300px] h-full bg-base-300 shadow-xl relative">
      <div
        className={`rating gap-1 absolute right-1 top-1 p-4 custom_heart bg-green ${
          faved ? "text-rose-500" : "text-white"
        }`}
        onClick={handleheartclick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/options/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt={item.image + "image"}
            className="hover:scale-105 transition-all ease-in-out duration-500 w-[180px] h-[180px] rounded-full object-cover"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/options/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>{"Description"}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$</span>
            {item.price}
          </h5>
          <button
            className="btn bg-green text-white hover:bg-base-100 transition-all ease-in-out duration-300 md:h-2"
            onClick={() => handleAddToCart(item)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

SpecialsCards.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SpecialsCards;

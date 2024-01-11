import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const SpecialsCards = ({ item }) => {
  const [faved, setFaved] = useState(false);

  const handleheartclick = () => {
    setFaved(!faved);
  };
  return (
    <div className="card w-[350px] h-full bg-base-300 shadow-xl relative">
      <div
        className={`rating gap-1 absolute right-1 top-1 p-4 custom_heart bg-green ${
          faved ? "text-rose-500" : "text-white"
        }`}
        onClick={handleheartclick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt={item.image + "image"}
            className="hover:scale-105 transition-all ease-in-out duration-500 max-w-[180px] max-h-[180px]"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{item.name}</h2>
        </Link>
        <p>{"Description"}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$</span>
            {item.price}
          </h5>
          <button className="btn bg-green text-white hover:bg-base-100 transition-all ease-in-out duration-300 md:h-2">
            Buy Now
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

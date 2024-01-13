import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import React from "react";
import SpecialsCards from "../../components/SpecialsCards";
import {} from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Specials = () => {
  const [specials, setSpecials] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/laptops.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "Home");
        // console.log(specials);
        setSpecials(specials);
      });
  }),
    [];

  const settings = {
    dots: false,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <nextArrowBtn />,
    prevArrow: <prevArrowBtn />,
  };

  return (
    <div className="section-container my-20 relative">
      <div className="text-left my-10">
        <p className="subtitle">Specials!</p>
        <h3 className="title md:w-[520px]">Outstanding Laptops From Us</h3>
      </div>
      <div className="hidden md:flex md:absolute top-8 right-3 mb-10 md:mr-24">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn p-2 rounded-full ml-5"
        >
          <FaAngleLeft className="w-8 h-8 p-1" />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="btn p-2 rounded-full ml-5"
        >
          <FaAngleRight className="w-8 h-8 p-1" />
        </button>
      </div>
      <Slider
        ref={slider}
        {...settings}
        className="overflow-hidden mt-10 space-x-5"
      >
        {specials.map((item, index) => (
          <SpecialsCards key={index} item={item} slider={slider} />
        ))}
      </Slider>
    </div>
  );
};

export default Specials;

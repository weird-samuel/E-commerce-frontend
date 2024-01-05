//
const Hero = () => {
  return (
    <div className="section-container">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold leading-snug">
            Explore the World of Great
            <span className="text-green"> Laptops</span>
          </h2>
          <p className="text-xl text-gray-100">
            Embark on a Journey of Laptop Excellence and Passionate
            Craftsmanship.
          </p>
          <button className="btn bg-green border-none outline-none rounded-full text-white px-8 py-3 font-semibold">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

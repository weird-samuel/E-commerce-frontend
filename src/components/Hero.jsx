import Banner from "/images/home/Banner.png";
import GenericLp from "/images/home/generic-lp.jpg";
import OfficeLp from "/images/home/office-lp.jpg";
//
const Hero = () => {
  return (
    <div className="section-container">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={Banner} alt="Banner-image" />
          <div className="hidden lg:flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div>
              <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <img
                    src={GenericLp}
                    alt="generic laptop"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="font-medium mb-1 text-black">
                    Generic Laptop
                  </h5>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                    />
                  </div>
                  <p className="text-black">$80.00</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <img
                    src={OfficeLp}
                    alt="Office laptop"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="font-medium mb-1 text-black">Office Laptop</h5>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star bg-green"
                    />
                  </div>
                  <p className="text-black">$80.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold leading-snug">
            Explore the World of Great
            <span className="text-green"> Laptops</span>
          </h2>
          <p className="text-xl text-gray-100">
            Embark on a Journey of Laptop Excellence and Make Compuation Easy
            for you!
          </p>
          <button className="btn bg-green border-none outline-none rounded-full text-white px-8 py-3 font-semibold">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

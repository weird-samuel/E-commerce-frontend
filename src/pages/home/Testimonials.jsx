/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa";
import salesman from "/images/home/testimonials/salesman.png";
import testimonial1 from "/images/home/testimonials/testimonial1.png";
import testimonial2 from "/images/home/testimonials/testimonial2.png";
import testimonial3 from "/images/home/testimonials/testimonial3.png";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src={salesman} alt="salesman" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Customers Are Saying</h2>
            <blockquote className="my-5 text-slate-300 leading-[30px]">
              "I recently bought a laptop, and I have to say, the entire
              purchasing process was exceptional! The seller's attention to
              detail and the overall service provided were flawless. I'm still
              thrilled about my new purchase!"
            </blockquote>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src={testimonial1} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={testimonial2} />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src={testimonial3} />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-[#807E7E]">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

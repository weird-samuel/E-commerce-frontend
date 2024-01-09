/* eslint-disable react/no-unescaped-entities */
//

const Services = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
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
          </div>
        </div>
        {/*  */}
        <div className="md:w-1/2">
          <img src={salesman} alt="salesman" />
        </div>
      </div>
    </div>
  );
};

export default Services;

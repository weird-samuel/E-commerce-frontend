/* eslint-disable react/no-unescaped-entities */
//

const serviceList = [
  {
    id: 1,
    title: "Support",
    desc: "Elevate your PC picks with our tech finesse on help.",
    image: "images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast delivery",
    desc: "We deliver your order promptly to your door",
    image: "images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    desc: "Explore & order with ease using our Online Ordering ",
    image: "images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    desc: "Give the gift of exceptional PC's with Lappi Gift Cards",
    image: "images/home/services/icon4.png",
  },
];

const Services = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey And Services</h2>
            <p className="my-5 text-slate-300 leading-[30px]">
              Rooted in passion, we provide Pc's That match your taste and offer
              exceptional services, blending culinary artistry via quality with
              warm hospitality.
            </p>
            <button className="btn bg-green text-white px-8 py-3 rounded-full hover:bg-base-100 transition-all duration-300">
              Explore
            </button>
          </div>
        </div>
        {/*  */}
        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
            {serviceList.map((service) => (
              <div
                key={service.id}
                className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:-translate-y-1 transition-all duration-500 ease-in-out"
              >
                <img
                  src={service.image}
                  alt={"service" + service.id}
                  className="mx-auto"
                />
                <h5 className="pt-3 font-semibold">{service.title}</h5>
                <p className="text-slate-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

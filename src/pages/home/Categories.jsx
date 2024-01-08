//
import GamingImg from "/images/home/category/Gaming.png";
import OfficeImg from "/images/home/category/Office.png";
import HomeImg from "/images/home/category/Home.png";
import AllImg from "/images/home/category/All.png";

const categoryItems = [
  { id: 1, title: "Gaming", desc: "(12 PC's)", img: `${GamingImg}` },
  { id: 2, title: "Office", desc: "(4 PC's)", img: `${OfficeImg}` },
  { id: 3, title: "Home", desc: "(12 PC's)", img: `${HomeImg}` },
  { id: 4, title: "Browse All", desc: "(28 PC's)", img: `${AllImg}` },
];

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">CUSTOMER FAVORITES</p>
        <h3 className="title">Popular Categories</h3>
      </div>

      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg bg-base-300 py-6 px-5 w-64 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-500 transition-all ease-in-out"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

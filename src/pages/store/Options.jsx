import { useState, useEffect } from "react";
import SpecialsCards from "../../components/SpecialsCards";

const Options = () => {
  const [options, setOptions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCat, setSelectedCat] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  //   consume data
  useEffect(() => {
    // consume backend
    const fetchData = async () => {
      try {
        const response = await fetch("/laptops.json");
        const data = await response.json();
        // console.log(data);
        setOptions(data);
        setFiltered(data);
      } catch (err) {
        console.log("Error:" + err.message);
      }
    };
    fetchData();
  }, []);

  //   filter fn for categories
  const filterItems = (cat) => {
    const filtRes =
      cat === "all" ? options : options.filter((item) => (item.cat = cate));

    setFiltered(filtRes);
    setSelectedCat(category);
  };

  //   show all data
  const showAll = () => {
    setFiltered(options);
    setSelectedCat("all");
  };

  //   sorting fn
  const handleSortChange = (option) => {
    setSortOption(option);

    let sorted = [...filtered];
    switch (option) {
      case "A-Z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;

      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFiltered(sorted);
  };

  return (
    <div>
      <div className="section-container">
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          <div className="space-y-7 text-center px-4">
            <h2 className="md:text-5xl text-4xl font-bold leading-snug capitalize">
              Explore here out collection of
              <span className="text-green"> Laptops</span>
            </h2>
            <p className="text-xl text-gray-100 md:w-4/5 mx-auto">
              Here we have perfect picks for diffferent tastes and budgets.
            </p>
            <button className="btn bg-green border-none outline-none rounded-full text-white px-8 py-3 font-semibold">
              Order Now
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={showAll}>All</button>
            <button onClick={() => filterItems("drinks")}>Gaming</button>
            <button onClick={() => filterItems("salad")}>Home</button>
            <button onClick={() => filterItems("dessert")}>Office</button>
            <button onClick={() => filterItems("pizza")}>Generic</button>
          </div>
        </div>

        {/* product cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {filtered.map((item) => (
            <SpecialsCards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Options;

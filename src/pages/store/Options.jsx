import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import SpecialsCards from "../../components/SpecialsCards";

const Options = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/laptops.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data); // Initially, display all items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //   console.log(filteredItems);
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
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
      <div></div>
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
        {/* all category buttons */}
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap">
          <button
            onClick={showAll}
            className={selectedCategory === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => filterItems("salad")}
            className={selectedCategory === "salad" ? "active" : ""}
          >
            Salad
          </button>
          <button
            onClick={() => filterItems("pizza")}
            className={selectedCategory === "pizza" ? "active" : ""}
          >
            Pizza
          </button>
          <button
            onClick={() => filterItems("soup")}
            className={selectedCategory === "soup" ? "active" : ""}
          >
            Soups
          </button>
          <button
            onClick={() => filterItems("dessert")}
            className={selectedCategory === "dessert" ? "active" : ""}
          >
            Desserts
          </button>
          <button
            onClick={() => filterItems("drinks")}
            className={selectedCategory === "drinks" ? "active" : ""}
          >
            Drinks
          </button>
        </div>

        {/* filter options */}
        <div className="flex justify-end mb-4 rounded-sm">
          <div className="bg-base-300 p-2 ">
            <FaFilter className="text-white h-4 w-4" />
          </div>
          <select
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-base-300 text-white px-2 py-1 rounded-sm"
          >
            <option value="default"> Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

      {/* product card */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
        {currentItems.map((item) => (
          <SpecialsCards key={item._id} item={item} />
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center my-8">
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? "bg-green text-black" : "bg-base-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;

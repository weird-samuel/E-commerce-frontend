import Hero from "../../components/Hero";
import Categories from "./Categories";
import Services from "./Services";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Specials />
      <Testimonials />
      <Services />
    </div>
  );
};

export default Home;

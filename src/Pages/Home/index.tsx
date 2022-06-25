import Footer from "../../Components/Footer";
import UpcomingEvents from "../../Components/Sections/Section2";
import Topbar from "../../Components/Topbar";
import CategoriesSlider from "../../Ui/Sliders/Categories";

const Home = () => {
  return (
    <div>
      <CategoriesSlider />
      <UpcomingEvents />
    </div>
  );
};

export default Home;

import "./App.scss";
import AppRouter from "./Components/AppRouter";
import Footer from "./Components/Footer";
import UpcomingEvents from "./Components/Sections/Section2";
import Topbar from "./Components/Topbar";
import CategoriesSlider from "./Ui/Sliders/Categories";

function App() {
  return (
    <div className='App'>
      <Topbar />

      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;

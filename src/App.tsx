import "./App.scss";
import AppRouter from "./Components/AppRouter";
import Footer from "./Components/Footer";
import Topbar from "./Components/Topbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div className='App'>
      <Topbar />

      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;

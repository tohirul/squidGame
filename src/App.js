import "./App.css";
import { useEffect } from "react";
import Home from "./Components/Home";
import Info from "./Components/Info";
import Episodes from "./Components/Episodes";
import Videos from "./Components/Videos";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import scrollreveal from "scrollreveal";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
    #home,
    #info,
    #episodes,
    #details,
    #videos,
    footer
    `,
      {
        opacity: 0,
        interval: 500,
      }
    );
  }, []);
  return (
    <div className="App">
      <Home />
      <Info />
      <Episodes />
      <Videos />
      <Details />
      <Footer />
    </div>
  );
}

export default App;

import BeautifulCard from "./Components/beautiful-block";
import Delivery from "./Components/delivery";
import Footer from "./Components/footer";
import HeaderSlider from "./Components/header-slider";
import Modal from "./Components/modal";
import Product from "./Components/product";
import scrollUp from "./Image/png/scrollUpPng.png";

import "./style/App.css";

function App() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    const scrollUpButton = document.querySelector(".scroll-to-top-button");
    if (window.pageYOffset > 200) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  return (
    <main>
      <HeaderSlider />
      <BeautifulCard />
      <Product />
      <Delivery />
      <Footer />
      <div className="scroll-to-top-button" onClick={handleScrollToTop}>
        <img src={scrollUp} alt="Scroll Up Image" />
      </div>
    </main>
  );
}

export default App;

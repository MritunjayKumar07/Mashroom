import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Testimonials from "./components/testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;

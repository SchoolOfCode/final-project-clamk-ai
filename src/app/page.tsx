import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="bg-custom-green text-custom-white">
      <Header />
      <Carousel />
      <Footer />
    </div>
  );
}

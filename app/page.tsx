import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Carousel from "@/app/components/carousel";
import Subnavbar from "./components/subnavbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Subnavbar />
      <div className="image_carousel">
        <Carousel />
      </div>
      <section className="products_container px-5">
        <div className="products_card space-x-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="products_card space-x-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="products_card space-x-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="products_card space-x-3">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}

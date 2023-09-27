import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Carousel from "@/app/components/carousel";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="image_carousel">
        <Carousel />
      </div>
      <section className="products_container">
        <div className="products_card space-x-3">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="products_card space-x-3">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="products_card space-x-3">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}

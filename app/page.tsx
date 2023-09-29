import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Carousel from "@/app/components/carousel";
import Subnavbar from "@/app/components/subnavbar";
import Footer from "@/app/components/footer";
import Multiplebuttons from "@/app/components/multiplebuttons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Subnavbar />
      <div>
        <div className="">
          <Carousel />
        </div>
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
      <div>
        <Multiplebuttons />
      </div>
      <Footer />
    </main>
  );
}

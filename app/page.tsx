import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Carousel from "@/app/components/carousel";
import Subnavbar from "@/app/components/subnavbar";
import Footer from "@/app/components/footer";
import Multiplebuttons from "@/app/components/multiplebuttons";
import Categories from "@/app/components/categories";
import ProdCategories from "@/app/components/prodCategories";
import CarouselArrow from "@/app/components/carouselarrow";

export default function Home() {
  return (
    <main>
      <section className="relative z-10">
        <Navbar />
        <Subnavbar />
      </section>
      <section>
        <div>
          <CarouselArrow />
          <div className="flex py-10">
            <div className="box px-10">
              <Carousel />
            </div>
            <div className="box px-10">
              <Carousel />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <Categories />
        </div>
        <div>
          <ProdCategories />
        </div>
      </section>
      <section>
        <Card />
      </section>
      <div>
        <Multiplebuttons />
      </div>
      <Footer />
    </main>
  );
}

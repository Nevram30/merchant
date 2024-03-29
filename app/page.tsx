import Card from "@/app/components/card";
import Carousel from "@/app/components/carousel";
import Categories from "@/app/components/categories";
import ProdCategories from "@/app/components/prodCategories";
import CarouselArrow from "@/app/components/carouselarrow";

export default function Home() {
  return (
    <main>
      <section className="py-10">
        <div className="box mt-28">
          <CarouselArrow />
          <div className="flex py-10">
            <div className="box px-10">
              <Carousel />
            </div>
            <div className="box px-10 ml-5">
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
    </main>
  );
}

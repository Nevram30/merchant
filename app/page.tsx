import Navbar from "@/app/components/navbar";
import Card from "@/app/components/card";
import Carousel from "@/app/components/carousel";
import Subnavbar from "@/app/components/subnavbar";
import Footer from "@/app/components/footer";
import Multiplebuttons from "@/app/components/multiplebuttons";
import Categories from "@/app/components/categories";

export default function Home() {
  return (
    <main>
      <section>
        <Navbar />
        <Subnavbar />
      </section>
      <section>
        <div>
          <div className="flex">
            <Carousel />
            <Carousel />
          </div>
        </div>
      </section>

      <div>
        <Categories />
      </div>
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

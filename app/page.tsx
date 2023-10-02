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
      <Navbar />
      <Subnavbar />
      <div>
        <div>
          <Carousel />
        </div>
      </div>
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

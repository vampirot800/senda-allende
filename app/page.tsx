import Navbar   from "@/components/Navbar";
import Hero     from "@/components/Hero";
import About    from "@/components/About";
import Location from "@/components/Location";
import Gallery  from "@/components/Gallery";
import Features from "@/components/Features";
import Models   from "@/components/Models";
import Prices   from "@/components/Prices";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar /><Hero /><About /><Location /><Gallery />
      <Features /><Models /><Prices /><Contact /><Footer />
    </main>
  );
}

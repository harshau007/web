import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testi from "@/components/Testi";
import WhatsNew from "@/components/WhatsNew";
import { Gallery } from "@/components/gallery";

export const metadata = {
  title: "Arka Linux GUI",
  description: "Arka Linux GUI",
};

export default function Home() {
  return (
    <main className="relative">
      {/* <Navbar /> */}
      <Hero />
      <WhatsNew />
      <Gallery />
      <Testi />
      {/* <Footer /> */}
    </main>
  );
}

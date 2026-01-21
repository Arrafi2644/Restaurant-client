import CategoryNavbar from "@/components/modules/CategoryNavbar";
import CategoryWiseFoodSection from "@/components/modules/CategoryWiseFoodSection";
import Hero from "@/components/modules/Hero";
import MainSection from "@/components/modules/MainSection";
import Footer from "@/components/shared/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      {/* <CategoryNavbar /> */}
      <MainSection />
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Hero from "@/components/Hero";
import AboutOmanRoute from "@/components/AboutOmanRoute";
import Category from "@/components/Category";
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutOmanRoute/>
      <Category/>
    </div>
  );
}

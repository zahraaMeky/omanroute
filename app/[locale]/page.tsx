import Image from "next/image";
import Hero from "@/components/Hero";
import AboutOmanRoute from "@/components/AboutOmanRoute";
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutOmanRoute/>
    </div>
  );
}

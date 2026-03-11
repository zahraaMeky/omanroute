import Image from "next/image";
import Hero from "@/components/Hero";
import AboutOmanRoute from "@/components/AboutOmanRoute";
import Category from "@/components/Category";
import CTA from "@/components/CTA";
import FeaturedDestinations from "@/components/FeaturedDestinations";
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutOmanRoute/>
      <Category/>
      <FeaturedDestinations/>
      <CTA/>
    </div>
  );
}

import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaCompass, FaHeart, FaHome, FaStore } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <FloatingNav navItems={[ { name: 'Home', link: '/', icon: <FaHome /> }, { name: 'Explore', link: '/explore', icon: <FaCompass /> },
    { name: 'Sell', link: '/sell', icon: <FaStore /> }, { name: 'Favorites', link: '/favorites', icon: <FaHeart /> } ]} />
<div className=" h-[2000px] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      Coming Soon!
      </p>
    </div>

    

    </div>
  );
}

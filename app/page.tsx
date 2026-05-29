import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import { MenuSection } from "@/components/menu/menuSection";
import {Truck, Coffee, MapPin, Bean, Sprout,} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 bg-[#533a28] p-4">
          <Truck size={50} className="text-[#c08b5c]" />
          <p className="text-white text-10 md:text-5">Livraison gratuite a partir de 5000 Fcfa d&rsquo;achat.</p>
      </div>
      <Header/>
      <main>
        {/* hero section */}
        <section className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/banner.png')] bg-cover bg-center min-h-[70vh] p-7 md:p-20 space-y-5">
          <div className="space-y-2 md:space-y-3 flex flex-col justify-center ">
            <h1 className="text-3xl md:text-6xl text-white">Plus qu&rsquo;un café,</h1>
            <h1 className="text-3xl md:text-6xl text-white"> Une veritable <span className="text-[#daa170]">experience.</span></h1>
          </div>
          <div>
            <h2 className="text-10 md:text-2xl text-gray-300">Des graines soignesement selectionnées, </h2>
            <h2 className="text-10 md:text-2xl text-gray-300">torifiées avec passion et servis avec le sourire.</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link href="/menu">
              <button className="flex items-center gap-2 bg-[#be8451] text-white px-5 py-3 rounded-lg cursor-pointer hover:bg-[#753904] transition-all duration-300">
                <Coffee size={25} className="text-white" />
                DECOUVRIR LE MENU
              </button>
            </Link>

            <Link href="/menu">
              <button className="flex items-center gap-2 border-2 border-white text-white px-10 py-3 rounded-lg cursor-pointer hover:bg-[#753904] hover:border-0 duration-100">
                <MapPin size={25} className="text-white" />
                NOUS TROUVER
              </button>
            </Link>
          </div>
        </section>

        {/* RESUME */}
        <section className="mt-20 px-5 md:px-20 space-x-3 md:space-x-10 grid grid-cols-3 lg:grid-cols-4 space-y-5 md:space-y-0">

          {/* col-1 */}
          <div className="flex flex-col md:flex-row gap-3 items-center border-r border-r-gray-400 p-5 lg:p-5">
            <Bean size={50} className="text-[#c08b5c]" />
            <div>
              <h3 className="md:text-xl text-5 font-semibold md:font-bold text-[#111827] ">Cafés de specialité</h3>
              <p className="text-gray-600 hidden md:block">
                Grains 100% Africains sourcés esthetiquement.
              </p>
            </div>
          </div>

          {/* Col-2 */}
          <div className="flex flex-col  md:flex-row gap-3 items-center border-r border-r-gray-400 p-5 lg:p-5">
            <Sprout size={50} className="text-[#c08b5c]" />
            <div>
              <h3 className="md:text-xl text-5 font-semibold md:font-bold text-[#111827] ">Produits qualifiés</h3>
              <p className="text-gray-600 hidden md:block">
                Patisseries et produits locaux livrees chaque jour.
              </p>
            </div>
          </div>

          {/* Col-3 */}
          <div className="flex flex-col  md:flex-row gap-3 items-center lg:border-r border-r-gray-400 p-5 lg:p-5">
            <Coffee size={50} className="text-[#c08b5c]" />
            <div>
              <h3 className="md:text-xl text-5 font-semibold md:font-bold text-[#111827] ">Fait avec passion</h3>
              <p className="text-gray-600 hidden md:block">
                Preparé par nos baristas experts.
              </p>
            </div>
          </div>

          {/* Col-4 */}
          <div className="lg:flex  flex-col md:flex-row gap-3 items-center hidden p-5 md:p-0">
            <MapPin size={50} className="text-[#c08b5c]" />
            <div>
              <h3 className="md:text-xl text-5 font-semibold md:font-bold text-[#111827] ">Local & convivial</h3>
              <p className="text-gray-600">
                Un espace chaleureux et accueillant pour se detendre.
              </p>
            </div>
          </div>
        </section>

        {/* SEMI  MENU */}
        <section className="mt-20 px-5 md:px-20">
          <MenuSection />
        </section>
      </main>
    </>
  );
}

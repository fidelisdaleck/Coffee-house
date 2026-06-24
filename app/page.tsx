import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Footer from "@/components/footer";
import { MenuSection } from "@/components/menu/menuSection";
import {
  Truck,
  Coffee,
  MapPin,
  Bean,
  Sprout,
  Heart,
  Users,
  Quote,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center gap-2 bg-[#533a28] p-4">
        <Truck size={30} className="text-[#c08b5c]" />
        <p className="text-white text-10 md:text-5">
          Livraison gratuite a partir de 5000 Fcfa d&rsquo;achat.
        </p>
      </div>
      <main>
        {/* hero section */}
        <section className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/banner.png')] bg-cover bg-center min-h-[70vh] p-7 md:p-20 space-y-5">
          <div className="space-y-2 md:space-y-3 flex flex-col justify-center ">
            <h1 className="text-3xl md:text-6xl text-white">
              Plus qu&rsquo;un café,
            </h1>
            <h1 className="text-3xl md:text-6xl text-white">
              {" "}
              Une veritable <span className="text-[#daa170]">experience.</span>
            </h1>
          </div>
          <div>
            <h2 className="text-10 md:text-2xl text-gray-300">
              Des graines soignesement selectionnées,{" "}
            </h2>
            <h2 className="text-10 md:text-2xl text-gray-300">
              torifiées avec passion et servis avec le sourire.
            </h2>
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
            <Bean size={40} className="text-[#c08b5c]" />
            <div>
              <h3 className="md:text-lg text-5 font-semibold md:font-bold text-[#111827] ">
                Cafés de specialité
              </h3>
              <p className="text-gray-600 hidden md:block">
                Grains 100% Africains sourcés esthetiquement.
              </p>
            </div>
          </div>

          {/* Col-2 */}
          <div className="flex flex-col  md:flex-row gap-3 items-center border-r border-r-gray-400 p-5 lg:p-5">
            <Sprout size={40} className="text-[#c08b5c]" />
            <div>
              <h3 className="md:text-lg text-5 font-semibold md:font-bold text-[#111827] ">
                Produits qualifiés
              </h3>
              <p className="text-gray-600 hidden md:block">
                Patisseries et produits locaux livrees chaque jour.
              </p>
            </div>
          </div>

          {/* Col-3 */}
          <div className="flex flex-col  md:flex-row gap-3 items-center lg:border-r border-r-gray-400 p-5 lg:p-5">
            <Coffee size={40} className="text-[#c08b5c]" />
            <div>
              <h3 className="md:text-lg text-5 font-semibold md:font-bold text-[#111827] ">
                Fait de passion
              </h3>
              <p className="text-gray-600 hidden md:block">
                Preparé par nos baristas experts.
              </p>
            </div>
          </div>

          {/* Col-4 */}
          <div className="lg:flex  flex-col md:flex-row gap-3 items-center hidden p-5 md:p-0">
            <MapPin size={40} className="text-[#c08b5c]" />
            <div>
              <h3 className="md:text-xl text-5 font-semibold md:font-bold text-[#111827] ">
                Local & convivial
              </h3>
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

        {/* NOTRE HISTOIRE */}
        <section className="flex flex-col md:flex-row items-center gap-10 mt-20 px-5 md:px-20">
          {/* Briefing */}
          <section className="mt-20 px-5 md:px-10">
            <div className="mb-10">
              <h2 className="text-10 mb-2 font-bold text-[#333333]">
                Notre histoire
              </h2>
              <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
            </div>

            <div className="space-y-5">
              <p className="text-3xl md:text-5xl">
                Un lieu, une passion:{" "}
                <span className="text-[#c08b5c]">Le café.</span>{" "}
              </p>
              <p className="text-10">
                Depuis 2020,{" "}
                <span className="text-[#c08b5c]">CoffeeHouse </span>
                selectionne les meilleurs grains et vous acceuille dans un
                espace chaleureux ou chaque detail compte.
              </p>
              <Link href="/about">
                <button className="flex items-center gap-2 bg-[#be8451] text-white px-5 py-3 rounded-lg cursor-pointer hover:bg-[#753904] transition-all duration-300">
                  EN SAVOIR PLUS
                </button>
              </Link>
            </div>

            {/* grille de resume */}
            <div className="mt-10 grid grid-cols-3">
              {/* col-1 */}
              <div className="flex flex-col items-center gap-1 border-r border-r-gray-400">
                <Coffee size={40} className="text-[#c08b5c]" />
                <h3 className="md:text-2xl text-10 font-semibold md:font-bold text-[#111827] ">
                  12 K
                </h3>
                <p className="text-gray-600 text-5 hidden md:block">
                  Plats servis.
                </p>
              </div>

              {/* col-2 */}
              <div className="flex flex-col items-center gap-1 border-r border-r-gray-400">
                <Heart size={40} className="text-[#c08b5c]" />
                <h3 className="md:text-2xl text-10 font-semibold md:font-bold text-[#111827] ">
                  4.9/5
                </h3>
                <p className="text-gray-600 text-5 hidden md:block">
                  Avis clients.
                </p>
              </div>

              {/* col-3 */}
              <div className="flex flex-col items-center gap-1">
                <Users size={40} className="text-[#c08b5c]" />
                <h3 className="md:text-2xl text-10 font-semibold md:font-bold text-[#111827] ">
                  50+
                </h3>
                <p className="text-gray-600 text-5 hidden md:block">
                  Baristas passionnés.
                </p>
              </div>
            </div>
          </section>
          {/* Image */}
          <section className="">
            <Image
              src="/interfaceb.jpg"
              alt="notre histoire"
              width={2000}
              height={1000}
              className="w-full h-auto rounded-lg object-cover"
            />
          </section>
        </section>

        {/* CAROUSEL DES AVIS CLIENTS */}
        <section className="mt-20 px-5 md:px-20">
          <div>
              <h2 className="text-2xl mb-5 font-bold">
                Ils parlent de nous
              </h2>
              <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
            </div>
          <Carousel className="mt-10">
            <CarouselPrevious />
            <CarouselContent className="gap-10 grid md:grid-cols-3 grid-cols-1 mb-20">
              {/* ITEMS 1 */}
              <CarouselItem>
                <div className="shadow-xl py-10 px-5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/testimonies/user1.jpg"
                      alt="client 1"
                      width={100}
                      height={100}
                      className="w-16 h-16 rounded-full object-cover border border-gray-300"
                    />

                    <div className="space-y-1 flex flex-col">
                      <h3 className="font-semibold text-[#111827] text-xl">
                        Jane Doe
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 mt-2 text-italic">
                      Le meilleur café de la ville ! Le service est exceptionnel
                      et les grains sont toujours frais.
                    </p>
                    <Quote size={30} className="mt-4 text-[#111827]" />
                  </div>
                </div>
              </CarouselItem>

              {/* ITEMS 2 */}
              <CarouselItem>
                <div className="shadow-xl py-10 px-5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/testimonies/user3.jpg"
                      alt="client 1"
                      width={100}
                      height={100}
                      className="w-16 h-16 rounded-full object-cover border border-gray-300"
                    />

                    <div className="space-y-1 flex flex-col">
                      <h3 className="font-semibold text-[#111827] text-xl">
                        Guen-dae
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 mt-2 text-italic">
                      La qualité du café est incroyable, et l&rsquo;ambiance est parfaite pour se détendre.
                    </p>
                    <Quote size={30} className="mt-4 text-[#111827]" />
                  </div>
                </div>
              </CarouselItem>

              {/* ITEMS 3 */}
              <CarouselItem>
                <div className="shadow-xl py-10 px-5 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/testimonies/user2.jpg"
                      alt="client 1"
                      width={100}
                      height={100}
                      className="w-16 h-16 rounded-full object-cover border border-gray-300"
                    />

                    <div className="space-y-1 flex flex-col">
                      <h3 className="font-semibold text-[#111827] text-xl">
                        Hang Ye-Ri
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 mt-2 text-italic">
                      l&rsquo;atmosphere est incroyable, parfaite pour travailler ou se detendre
                    </p>
                    <Quote size={30} className="mt-4 text-[#111827]" />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext/>
          </Carousel>
        </section>
      </main>
    </>
  );
}

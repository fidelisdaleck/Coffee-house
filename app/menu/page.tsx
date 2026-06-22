"use client";
import { Coffee, Croissant, Heart, Home } from "lucide-react";
import Link from "next/link";
import CardMenu from "@/components/cardmenu";
import { MenuItem } from "@/components/carditem";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Menu() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="md:p-20 px-5 flex items-center justify-center">
        <div className=" space-y-5">
          <h1 className="md:text-6xl text-4xl font-semibold text-center">
            Chaque plat raconte une histoire
          </h1>
          <p className="text-lg text-center mt-4 text-[#444444]">
            Découvrez notre sélection de cafés artisanaux et pâtisseries
            gourmandes, préparés avec passion pour transformer chaque pause en
            un moment d&rsquo;exception.
          </p>
          <Link href="/menu" className="flex items-center justify-center">
            <button className="flex items-center gap-2 bg-[#be8451] text-white px-5 py-3 rounded-lg cursor-pointer hover:bg-[#753904] transition-all duration-300">
                <Coffee size={25} className="text-white" />
                COMMANDER MAINTENANT
            </button>
            </Link>
        </div>
        
      </section>

      <section className="flex flex-col items-center justify-center space-y-5">
        <h2 className="text-3xl font-semibold">
          Pourquoi nos clients reveinnent toujours?
        </h2>
        <div className="w-30 h-1 bg-[#c08b5c] rounded-full mb-4"></div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-10 ">
            <CardMenu
                icon={<Coffee size={25} className="text-[#c08b5c]" />}
                title="Cafés de specialités"
                description="Des grains 100 % arabica rigoureusement sélectionnés."
            />

            <CardMenu
                icon={<Croissant size={25} className="text-[#c08b5c]"/>}
                title="Produits frais"
                description="Pâtisseries et viennoiseries préparées quotidiennement."
            />

            <CardMenu
                icon={<Heart size={25} className="text-[#c08b5c]" />}
                title="Fais avec passion"
                description="Chaque boisson est réalisée par des baristas passionnés."
            />

            <CardMenu
                icon={<Home size={25} className="text-[#c08b5c]" />}
                title="Ambiance propre"
                description="Un lieu pensé pour se détendre ou travailler."
            />
        </div>
      </section>

      {/* Menu */}
      <section className="mt-20 px-20 space-y-3">
        <div>
            <h2 className="text-3xl font-semibold mb-4">Nos Cafés et Thés.</h2>
            <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
        </div>
        <p className="text-lg text-[#444444]">
          L&rsquo;art du café dans sa pure expression.</p>

        {/* Notre Caroussel */}
        <Carousel  opts={{align: "start", loop: true,}} className="w-full mt-10">
          <CarouselContent>
            <CarouselItem  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem name="Café Latte" price={1500} image="/coffee/cappuchino.jpg" />
            </CarouselItem>

            <CarouselItem  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem name="Croissant" price={1000} image="/coffee/mucciato.jpg" />
            </CarouselItem>

            <CarouselItem  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem name="Café Noir" price={1200} image="/coffee/mucciato (2).jpg" />
            </CarouselItem>

             <CarouselItem  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem name="Café Noir" price={1200} image="/coffee/the glace.jpg" />
            </CarouselItem>

             <CarouselItem  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem name="Café Noir" price={1200} image="/coffee/the glacee.jpg" />
            </CarouselItem>

            <CarouselItem  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem name="Café Noir" price={1200} image="/coffee/the vert.jpg" />
            </CarouselItem>

            <CarouselItem  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem name="Café Noir" price={1200} image="/coffee/the vert (2).jpg" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}

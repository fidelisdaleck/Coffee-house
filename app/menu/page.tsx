"use client";
import { Coffee, Croissant, Heart, Home } from "lucide-react";
import Link from "next/link";
import CardMenu from "@/components/cardmenu";
import { MenuItem } from "@/components/carditem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Menu() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="md:p-20 px-5 flex items-center justify-center">
        <div className=" space-y-5">
          <h1 className="md:text-6xl text-3xl font-semibold text-center">
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

      <section className=" mt-10 flex flex-col items-center justify-center space-y-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Pourquoi nos clients reveinnent toujours?
        </h2>
        <div className="w-30 h-1 bg-[#c08b5c] rounded-full mb-4"></div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-10 ">
          <CardMenu
            icon={<Coffee size={25} className="text-[#c08b5c]" />}
            title="Cafés de specialités"
            description="Des grains 100 % arabica rigoureusement sélectionnés."
          />

          <CardMenu
            icon={<Croissant size={25} className="text-[#c08b5c]" />}
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

      {/* Menu: NOS CAFES */}
      <section className="mt-20 px-10 md:px-20 space-y-3">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Nos Cafés et Thés.</h2>
          <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
        </div>
        <p className="text-lg text-[#444444]">
          L&rsquo;art du café dans sa pure expression.
        </p>

        {/* Notre Caroussel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full mt-10 px-5"
        >
          <CarouselContent className="py-10">
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Cappuccino"
                price={2500}
                image="/coffee/cappuchino.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Mucciato"
                price={2000}
                image="/coffee/mucciato.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Mucciato au lait"
                price={2500}
                image="/coffee/mucciato (2).jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Thé glacé"
                price={1500}
                image="/coffee/the glace.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Thé glacé au citron"
                price={1200}
                image="/coffee/the glacee.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Thé vert"
                price={2000}
                image="/coffee/the vert.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Thé vert au citron"
                price={2000}
                image="/coffee/the vert (2).jpg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Menu: NOS Boissons raffraichissantes */}
      <section className="mt-10 px-10 md:px-20 space-y-3">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Nos Boissons raffraichissantes
          </h2>
          <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
        </div>
        <p className="text-lg text-[#444444]">
          Une vague de fraicheur pour accompagner vos journées ensoleillées.
        </p>

        {/* Notre Caroussel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full mt-10 px-5"
        >
          <CarouselContent className="py-10">
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Milkshake Oreo"
                price={2500}
                image="/milkshake/milkshake oreo.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Milkshake Chocolat"
                price={2500}
                image="/milkshake/milkshake choco.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Milkshake fraise"
                price={2500}
                image="/milkshake/milkshake fraise.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Snoothie Mangue"
                price={1500}
                image="/smothie/smothie mangue.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Snoothie Ananas"
                price={1500}
                image="/smothie/smothie ananas.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Snoothie Orange"
                price={1500}
                image="/smothie/smothie orange.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Milkshake Basic"
                price={2500}
                image="/milkshake/milkshake.jpg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Menu: NOS plats locaux */}
      <section className="mt-10 px-10 md:px-20 space-y-3">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Mangeons Local !
          </h2>
          <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
        </div>
        <p className="text-lg text-[#444444]">
          Découvrez nos plats locaux, les preferés de nos clients.
        </p>

        {/* Notre Caroussel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full mt-10 px-5"
        >
          <CarouselContent className="py-10">
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Beignets de manioc"
                price={500}
                image="/beignet/beignet de manioc.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Beignets de mais"
                price={500}
                image="/beignet/beignet mais.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Bouillie de mais"
                price={500}
                image="/beignet/bouillie.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Beignets sucrés"
                price={1500}
                image="/beignet/beignet sucres.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Special Beignets haricot"
                price={1500}
                image="/beignet/BHB.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Bouillie de mais au lait"
                price={700}
                image="/beignet/bouillie mais.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Beignets haricot"
                price={1000}
                image="/beignet/bhb2.jpg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Menu: NOS Mignarduises */}
      <section className="mt-10 px-10 md:px-20 space-y-3">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Nos Mignardises.
          </h2>
          <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
        </div>
        <p className="text-lg text-[#444444]">
          Des créations artisanales préparées chaque jour pour accompagner parfaitement votre boisson préférée.
        </p>

        {/* Notre Caroussel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full mt-10 px-5"
        >
          <CarouselContent className="py-10">
            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Croissant a la viande"
                price={2000}
                image="/croissant/croissant farcie a la viande.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Bol de nems"
                price={2500}
                image="/mignardise/bol de nems.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Burger"
                price={1000}
                image="/mignardise/burger.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Hamburger"
                price={1000}
                image="/mignardise/hamburger.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Shawarma poulet"
                price={1500}
                image="/mignardise/shawarma poulet.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Shawarma viande"
                price={1500}
                image="/mignardise/shawarma viande.jpg"
              />
            </CarouselItem>

            <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <MenuItem
                name="Tacos"
                price={2000}
                image="/mignardise/tacos.jpg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
}

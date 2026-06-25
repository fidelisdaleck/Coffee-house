import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Handshake,
  Sprout,
  Coffee,
  Heart,
  Star,
  Smile,
  Croissant,
} from "lucide-react";
import CardValeur from "@/components/cardvaleur";
import CardMember from "@/components/cardMember";
export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="mt-20 md:p-20 px-5 flex items-center justify-center">
        <div className=" space-y-5">
          <h1 className="md:text-6xl text-3xl font-semibold text-center">
            Plus qu&rsquo;un café, une expérience à partager.
          </h1>
          <p className="text-lg text-center mt-4 text-[#444444]">
            Chez <span className="text-[#c08b5c]">CoffeeHouse</span>, nous
            croyons qu&rsquo;un bon café a le pouvoir de rassembler,
            d&rsquo;inspirer et de créer des souvenirs. Chaque tasse que nous
            servons est préparée avec passion afin d&rsquo;offrir à nos clients
            un moment de détente, de convivialité et de plaisir authentique.
          </p>
          <Link href="/menu" className="flex items-center justify-center">
            <button className="flex items-center gap-2 bg-[#be8451] text-white px-5 py-3 rounded-lg cursor-pointer hover:bg-[#753904] transition-all duration-300">
              <MapPin size={25} className="text-white" />
              NOUS TROUVER
            </button>
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="flex flex-col md:flex-row items-center gap-10 mt-10 px-5 md:px-20">
        {/* Briefing */}
        <section className="px-5 md:px-10">
          <div className="mb-10">
            <h2 className="text-xl mb-2 font-bold text-[#333333]">
              Notre histoire
            </h2>
            <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
          </div>

          <div className="space-y-5">
            <p className="text-3xl md:text-5xl">
              Une passion née autour d&rsquo;une tasse de café.
            </p>
            <p className="text-10 text-[#333333]">
              <span className="text-[#c08b5c] ">CoffeeHouse </span> est né
              d&rsquo;une idée simple : créer un lieu chaleureux où chacun peut
              se sentir chez soi.
            </p>
            <p className="text-10 mt-5 text-[#333333]">
              Depuis nos débuts, nous sélectionnons avec soin nos grains de
              café, nos ingrédients et nos partenaires afin d&rsquo;offrir des
              produits de qualité supérieure. Notre ambition n&rsquo;a jamais
              été de servir simplement des boissons, mais de créer des
              expériences mémorables pour chaque client qui franchit notre
              porte.
            </p>
          </div>
        </section>
        {/* Image */}
        <section className="">
          <Image
            src="/bannerAbout.png"
            alt="notre histoire"
            width={2000}
            height={1000}
            className="w-full h-auto rounded-lg object-cover"
          />
        </section>
      </section>

      {/* NOS VALEURS */}
      <section className="px-5 md:px-30 mt-20">
        <div className="mb-10">
          <h2 className="text-2xl mb-2 font-bold text-[#333333]">
            Nos Valeurs
          </h2>
          <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
          <p className="text-10 md:text-xl">Ce qui nous anime au quotidien.</p>
        </div>

        {/* CARDS VALEURS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CardValeur
            icon={<Handshake size={25} className="text-[#c08b5c]" />}
            title="Convivialité"
            description="Nous créons un espace où les rencontres, les échanges et les moments de partage prennent tout leur sens."
          />
          <CardValeur
            icon={<Sprout size={25} className="text-[#c08b5c]" />}
            title="Responsabilité"
            description="Nous privilégions des pratiques respectueuses de nos clients, de nos partenaires et de notre environnement."
          />
          <CardValeur
            icon={<Heart size={25} className="text-[#c08b5c]" />}
            title="Passion"
            description="Chaque boisson est préparée avec le même souci du détail et le même enthousiasme que lors de notre premier jour."
          />
        </div>
      </section>

      {/* NOS CHIFFRES */}
      <section className="px-5 md:px-30 mt-20">
        <div className="mb-10">
          <h2 className="text-2xl mb-2 font-bold text-[#333333]">
            Nos Chiffres
          </h2>
          <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
          <p className="text-10 md:text-xl">
            CoffeeHouse en quelques chiffres.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
          {/* col-1 */}
          <div className="flex flex-col items-center gap-1">
            <Coffee size={30} className="text-[#c08b5c]" />
            <h3 className="md:text-2xl text-10 font-semibold md:font-bold text-[#111827] ">
              +10 K
            </h3>
            <p className="text-gray-600 text-5">Cafés servis.</p>
          </div>

          {/* col-2 */}
          <div className="flex flex-col items-center gap-1">
            <Smile size={30} className="text-[#c08b5c]" />
            <h3 className="md:text-2xl text-10 font-semibold md:font-bold text-[#111827] ">
              5 K+
            </h3>
            <p className="text-gray-600 text-5">Clients satisfaits.</p>
          </div>

          {/* col-3 */}
          <div className="flex flex-col items-center gap-1">
            <Star size={30} className="text-[#c08b5c]" />
            <h3 className="md:text-2xl text-10 font-semibold md:font-bold text-[#111827] ">
              4/5
            </h3>
            <p className="text-gray-600 text-5">De note moyenne.</p>
          </div>

          {/* col-4 */}
          <div className="flex flex-col items-center gap-1">
            <Croissant size={30} className="text-[#c08b5c]" />
            <h3 className="md:text-2xl text-10 font-semibold md:font-bold text-[#111827] ">
              100 +
            </h3>
            <p className="text-gray-600 text-5">Plats chaque jour.</p>
          </div>
        </div>
      </section>

      {/* NOTRE EQUIPE */}
      <section className="mt-20 px-5 md:px-20">
        <div className="mb-10">
          <h2 className="text-2xl mb-2 font-bold text-[#333333]">
            Notre équipe.
          </h2>
          <div className="w-10 h-1 bg-[#c08b5c] rounded-full mb-4"></div>
          <p className="text-10 md:text-xl">
            Des passionnés au service de votre plaisir.
          </p>
        </div>
        <div className="mt-10 gap-10 grid md:grid-cols-4 grid-cols-1 mb-20">
          <CardMember
            image="/testimonies/user2.jpg"
            name="David Mboa"
            description="Fondateur & Directeur Général"
          />

          <CardMember
            image="/testimonies/user1.jpg"
            name="Sarah Ndzie"
            description="Barista en chef"
          />

          <CardMember
            image="/testimonies/user3.jpg"
            name="Kevin Tchoumi"
            description="Chef cuisto"
          />

          <CardMember
            image="/testimonies/user1.jpg"
            name="Amina Ndzi"
            description="Responsable service client"
          />

          <CardMember
            image="/testimonies/user3.jpg"
            name="Jordan Fongang"
            description="Barista senior"
          />

          <CardMember
            image="/testimonies/user5.jpg"
            name="Christelle Ndzié"
            description="Responsable aprovisionnement"
          />

          <CardMember
            image="/testimonies/user4.jpg"
            name="Stéphane Nkoum"
            description="Responsable Marketing & Communication"
          />

          <CardMember
            image="/testimonies/user5.jpg"
            name="Vanessa Mbarga"
            description="Responsable Administrative & Financière"
          />
        </div>
      </section>
    </>
  );
}

import { Music2, MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="px-10 py-15 bg-[#472f1e] cursor-pointer text-white">
      <div className="flex md:items-center justify-between gap-7 md:flex-row flex-col">
        <div>
          <div className="flex gap-2">
            <Image
              src="/icon.png"
              alt="CoffeeHouse Logo"
              width={30}
              height={30}
            />
            <Link href="/">
              <h1 className="text-xl text-[#c08b5c]">CoffeeHouse</h1>
            </Link>
          </div>
          <p className="mt-5 w-80 text-10 text-white">
            Plus q&rsquo;un café, une veritable experience. Nous selectionnons
            les meilleurs grains et vous acceuillons dans espace chalereux et convivial.
          </p>
          <div className="flex gap-7 mt-5">
            <FaFacebookF className="w-6 h-6 text-[#c08b5c]  cursor-pointer" />
            <FaInstagram className="w-6 h-6 text-[#c08b5c] cursor-pointer" />
            <Music2 className="w-6 h-6 text-[#c08b5c] cursor-pointer" />
          </div>
        </div>

        <div className="">
          <h2 className="text-xl text-[#c08b5c]">Navigation</h2>
          <ul className="text-10 text-white">
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              Acceuil
            </li>
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">Menu</li>
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              Nos cafés
            </li>
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              A propos
            </li>
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-[#c08b5c]">Informations</h2>
          <ul className="text-10 text-white">
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              FAQ
            </li>
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              Livraison
            </li>
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              Mentions légales
            </li>
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              Politique de confidentialité
            </li>
            <li className="mt-2 hover:text-[#c08b5c] cursor-pointer">
              Conditions generales de vente
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl text-[#c08b5c]">Contact</h2>
          <ul className="text-10 text-white">
            <li className="mt-2">
              <MapPin className="w-5 h-5 inline mr-2 text-[#c08b5c]" /> Douala,
              Cameroun.
            </li>
            <li className="mt-2">
              <Mail className="w-5 h-5 inline mr-2 text-[#c08b5c]" />{" "}
              contact@coffeehouse.com
            </li>
            <li className="mt-2">
              <Phone className="w-5 h-5 inline mr-2 text-[#c08b5c]" /> +237 6 xx
              xx xx xx
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span className="block w-full h-0.5 bg-white mx-auto mt-10"></span>
        <p className="text-center text-10 text-white mt-5">
          &copy; 2026 CoffeeHouse. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

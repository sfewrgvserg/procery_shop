import Image from "next/image";
import Link from "next/link";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center pb-5 w-full">
          <Image
            src="/assets/image/filter/banner.png"
            width={1500}
            height={1000}
          />
        </div>

        <div className=" w-full space-y-7 bg-gray-300 py-10 px-5 flex flex-col justify-center items-center ">
          <div className="flex items-center">
            <Image
              src="/assets/image/filter/logo.png"
              alt="Logo site"
              width={50}
              height={50}
            />
            <div>
              <p className="text-sm font-bold text-amber-900 leading-4">
                Grocery
              </p>
              <p className="text-sm font-bold text-emerald-900 leading-4">
                Store
              </p>
            </div>
          </div>

          <p className="max-w-[35rem] flex justify-center text-sm text-gray-700 mx-auto text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ipsum quaerat quasi tempore odit cumque atque. Maxime reiciendis
          </p>

          <div className="max-w-[35rem] space-x-3 grid grid-cols-6 items-center justify-center text-center max-small:grid-cols-2 max-small:space-x-0 max-small:gap-x-10 max-small:gap-y-2 max-small:w-full">
            <Link
              href="#"
              className="font-semibold  hover:text-gray-700 duration-150 "
            >
              About
            </Link>
            <Link
              href="#"
              className="font-semibold  hover:text-gray-700 duration-150 "
            >
              Careers
            </Link>
            <Link
              href="#"
              className="font-semibold  hover:text-gray-700 duration-150 "
            >
              History
            </Link>
            <Link
              href="#"
              className="font-semibold  hover:text-gray-700 duration-150 "
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-semibold  hover:text-gray-700 duration-150 "
            >
              Projects
            </Link>
            <Link
              href="#"
              className="font-semibold  hover:text-gray-700 duration-150 "
            >
              Blog
            </Link>
          </div>

          <div className="flex space-x-7 ">
            <Link href="#" className="hover:text-gray-700 duration-150">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-700 duration-150">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-700 duration-150">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-700 duration-150">
              <FaGithub size={20} />
            </Link>
            <Link href="#" className="hover:text-gray-700 duration-150">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;

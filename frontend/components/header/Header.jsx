"use client";

import { useEffect, useState } from "react";
import logo from "../../public/assets/image/filter/logo.png";

import Image from "next/image";

import axios from "axios";
import { BiCategoryAlt } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoTrashBinOutline } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";

const Header = () => {
  const [countData, setCountData] = useState([]);
  const [click, setClick] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchingData = async () => {
      const response = await axios.get("http://localhost:8000/cart");
      setCountData(response.data);
    };
    fetchingData();
  }, [click]);

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/all_carts/${itemId}`);
      // Update countData after successful deletion
      const updatedData = countData.filter((item) => item.cart_id !== itemId);
      setCountData(updatedData);
    } catch (err) {
      console.error("handleDelete error:", err.message);
    }
  };

  return (
    <header className="border-gray-300 border-solid border-b-2 py-7 mx-5">
      <div className="flex items-center select-none justify-between">
        <div className="flex items-center space-x-10">
          <div className="flex items-center">
            <Image src={logo} alt="Logo site" height={50} />
            <div>
              <p className="text-sm font-bold text-amber-900 leading-4">
                Grocery
              </p>
              <p className="text-sm font-bold text-emerald-900 leading-4">
                Store
              </p>
            </div>
          </div>

          <div className="flex items-center px-10 bg-gray-200 hover:bg-gray-800 hover:text-white duration-200 rounded-2xl space-x-3 py-2 cursor-pointer max-md:bg-red-900 max-lg:hidden">
            <BiCategoryAlt size={20} />
            <h5 className="font-semibold text-xl">Category</h5>
          </div>

          <div className="flex cursor-pointer items-center bg-teal-400 border-2 border-black rounded-full max-md:hidden">
            <div className="px-3 py-3">
              <FiSearch size={20} />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="outline-none py-2 text-gray-600 font-medium px-2 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1 cursor-pointer">
            <BsShop
              size={35}
              onClick={() => {
                setClick(!click);
                setShow(!show);
              }}
            />
            <span
              className="py-3 px-2 bg-teal-700 rounded-full text-white font-bold"
              onClick={() => {
                setShow(true);
              }}
            >
              {countData.length}
            </span>
          </div>
          <div>
            <FaRegCircleUser size={35} className="cursor-pointer" />
          </div>
        </div>

        {show && (
          <div className="fixed top-0 h-screen w-full bg-gray-300/65 flex flex-col items-end">
            <div className="h-full bg-white">
              <div
                className="absolute right-5 top-3 hover:bg-gray-700 cursor-pointer duration-200 hover:text-white rounded-full border-2 border-gray-300 p-3"
                onClick={() => {
                  setShow(false);
                }}
              >
                <RiCloseLargeFill size={15} />
              </div>
              <div className="flex justify-center py-5 bg-teal-500 text-white font-bold text-xl rounded-bl-3xl">
                <h2>My Cart</h2>
              </div>
              {countData.map((item) => (
                <div
                  className="mx-10 px-5 rounded-xl mb-5 my-5 border-white border-2 duration-200 w-96"
                  key={item.product.title}
                >
                  <div className="flex space-x-5">
                    <Image
                      src={item.product.img}
                      alt={item.product.title}
                      width={100}
                      height={100}
                      className="border-2 border-gray-200"
                    />
                    <div className=" w-full relative">
                      <div className="font-semibold text-stone-800">
                        <h2>{item.product.title}</h2>
                        <h4>Quanity {item.quantity}</h4>
                        <h3 className="text-xl">
                          $ {item.product.price * item.quantity}
                        </h3>
                      </div>
                      <div
                        className="flex rounded-full border-gray-200 border-2 absolute top-7 right-0 p-2 hover:bg-gray-700 cursor-pointer duration-200 hover:text-white"
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this item?"
                            )
                          ) {
                            handleDelete(item.cart_id);
                          }
                        }}
                      >
                        <IoTrashBinOutline size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;

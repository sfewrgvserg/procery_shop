"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

const ListProducts = () => {
  const [data, setData] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [productId, setProductId] = useState();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState();

  const handleShowDetails = (productId) => {
    setTotalPrice();
    setCount(1);
    setShowDetails(!showDetails);
    setProductId(productId);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get("http://localhost:8000/all_products");
      setData(products.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProduct = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:8000/all_products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (showDetails) {
      fetchProduct(productId);
    }
  }, [showDetails]);

  const handleClick1 = () => {
    setCount(count + 1);
    setTotalPrice((count + 1) * product.price);
  };

  const handleClick2 = () => {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice((count - 1) * product.price);
    }
  };

  const handlePost = async () => {
    try {
      await axios.post("http://localhost:8000/all_carts", {
        product_id: productId,
        quantity: count,
      });
    } catch (err) {
      console.log("error adding to cart:", err.message);
    }
  };

  return (
    <div className="my-10">
      <h2 className="text-emerald-500 font-bold text-2xl">
        Our Popular Products
      </h2>
      <div className="grid-cols-4 grid items-center gap-8 my-10 max-md:grid-cols-2 max-lg:grid-cols-3 max-sm:grid-cols-1">
        {data.map((item) => (
          <div
            onClick={() => handleShowDetails(item.product_id)}
            key={item.product_id}
            className="flex text-center flex-col justify-center items-center border-[1px] border-gray-400 px-10 py-10 min-h-96 hover:scale-[1.04] duration-200 rounded-xl cursor-pointer "
          >
            <Image
              src={item.img}
              height={150}
              width={150}
              alt="te"
              className="rounded-xl"
            />
            <div className="space-y-2 my-2">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <h3 className="font-bold text-xl">$ {item.price}</h3>
            </div>
            <button className="text-emerald-500 font-semibold hover:bg-emerald-500 hover:text-white duration-200 border-gray-500 border-2 rounded-lg py-2 px-5">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
      {showDetails && product && (
        <div className="h-screen w-screen fixed top-0">
          <div className=" h-screen bg-gray-600/55 flex flex-col items-center justify-center">
            <div className="mx-auto bg-white rounded-2xl pb-5 flex max-w-[50rem] relative max-lg:max-w-full max-lg:flex-col max-lg:items-center max-lg:text-center">
              <div
                onClick={() => {
                  setShowDetails(false);
                }}
                className="absolute top-2 right-5 cursor-pointer border-gray-300 border-2 rounded-full shadow-2xl shadow-slate-800 max-lg:top-5 max-lg:right-16"
              >
                <IoIosClose size={35} />
              </div>
              <div className="p-5 flex items-center">
                <Image
                  src={product.img}
                  height={700}
                  width={700}
                  alt={product.title}
                  className="rounded-xl p-10 max-w-[15rem] max-lg:max-w-[15rem]"
                />
              </div>
              <div className="flex flex-col justify-center space-y-3 mx-10 relative">
                <h2 className="text-3xl font-bold">{product.title}</h2>
                <p>{product.desc}</p>
                <h3 className="text-2xl font-semibold">${product.price}</h3>
                <h3 className="text-xl font-semibold">
                  quantity {product.quantity}
                </h3>

                <div className="flex items-center max-lg:flex-col">
                  <div className="flex items-center w-[15rem] space-x-5 border-gray-400 rounded-md border-2 max-lg:w-[15rem]">
                    <button
                      onClick={handleClick2}
                      className="w-full font-bold py-2"
                    >
                      -
                    </button>
                    <p className="font-bold text-xl">{count}</p>
                    <button
                      onClick={handleClick1}
                      className="w-full font-bold py-2"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-2xl pl-3">
                    {" "}
                    <span className="max-lg:hidden">=</span> ${totalPrice}{" "}
                  </p>
                </div>

                <button
                  onClick={() => {
                    handlePost();
                  }}
                  className="bg-emerald-500 max-w-[15rem] rounded-xl text-white font-bold text-lg py-5 max-lg:flex max-lg:justify-center max-lg:max-w-full"
                >
                  Add To Cart
                </button>
                <p className="text-xl font-semibold">
                  Category <span className="text-base">{product.category}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListProducts;

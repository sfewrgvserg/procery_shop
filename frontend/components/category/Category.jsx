import Image from "next/image";

import bread from "../../public/assets/image/filter/bread.png";
import chicken from "../../public/assets/image/filter/chicken.png";
import fruits from "../../public/assets/image/filter/fruits.png";
import milk_juice from "../../public/assets/image/filter/milk_juice.png";
import personal_care from "../../public/assets/image/filter/personal_care.png";
import vegetable from "../../public/assets/image/filter/vegetable.png";

const Category = () => {
  const lists = [
    {
      img: bread,
      title: "Bakery",
    },
    {
      img: bread,
      title: "Bakery",
    },
    {
      img: chicken,
      title: "Chicken & Egg",
    },
    {
      img: fruits,
      title: "Fruits",
    },
    {
      img: milk_juice,
      title: "Milk & Juice",
    },
    {
      img: personal_care,
      title: "Personal Care",
    },
    {
      img: vegetable,
      title: "Vegetables",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-2xl text-green-900 font-bold py-5">
          Shop by Category
        </h2>
        <div className="grid grid-cols-7 gap-5 max-md:grid-cols-4 max-lg:grid-cols-5 max-sm:grid-cols-2">
          {lists.map((list) => (
            <div
              className="bg-sky-200 h-[9rem] flex flex-col justify-center text-center rounded-md cursor-pointer duration-200 hover:bg-emerald-500 group"
              key={list.title}
            >
              <div className="flex justify-center">
                <Image
                  src={list.img}
                  alt={list.title}
                  height={40}
                  className="group-hover:scale-125 py-2"
                />
              </div>
              <p className="text-sm flex justify-center font-semibold text-stone-800 duration-200 group-hover:text-white">
                {list.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;

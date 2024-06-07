import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen py-10 max-sm:flex-col">
      <Image
        src="/assets/image/filter/not_found.jpeg"
        width={300}
        height={300}
        alt="Not Found"
      />
      <div className="flex space-y-5 flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Awww...Don't Cry.</h1>
        <p className="text-stone-700 border-2 border-teal-700 py-3 px-5 hover:bg-teal-400 hover:text-white cursor-default duration-150 hover:border-white">
          It's just a 404 Error!
        </p>
        <div>
          <p className="max-w-[35rem] flex justify-center text-sm text-gray-700 text-center">
            What you're looking for may have been misplaced in log Term Memmory.
          </p>
        </div>
      </div>
    </div>
  );
};
export default NotFound;

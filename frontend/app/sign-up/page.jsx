import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col w-screen h-screen">
      <div className=" flex items-center justify-center flex-col drop-shadow-xl bg-gray-100 w-[40rem] h-[40rem] rounded-xl p-14">
        <div className="flex items-center">
          <Image
            src="/assets/image/filter/logo.png"
            alt="Logo site"
            width={75}
            height={75}
          />
          <div>
            <p className="text-xl font-bold text-amber-900 leading-4">
              Grocery
            </p>
            <p className="text-xl font-bold text-emerald-900 leading-4">
              Store
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center my-5 space-y-2">
          <h1 className="text-4xl font-bold">Create an Acount</h1>
          <p>Enter your Email and Password to Create an account</p>
        </div>

        <div className="flex flex-col items-center space-y-5 w-full selection:text-white selection:bg-teal-700">
          <input
            className="focus:bg-gray-100 focus:text-stone-600 border-2 border-gray-300 w-full border-solid py-2 text-lg px-5 font-medium"
            type="email"
            placeholder="email"
            name="name@example.com"
          />
          <input
            className="focus:bg-gray-100 focus:text-stone-600 border-2 border-gray-300 w-full border-solid py-2 text-lg px-5 font-medium"
            type="password"
            placeholder="password"
            name="Password"
          />
        </div>

        <div className="w-full">
          <button className="w-full flex justify-center py-3 bg-teal-300 rounded-lg my-5">
            Create an Acount
          </button>
          <p className="flex items-start w-full">
            Don't have an account ?{" "}
            <Link
              href="/create-acount"
              className="pl-1 text-cyan-700 font-bold"
            >
              Click here to create new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;

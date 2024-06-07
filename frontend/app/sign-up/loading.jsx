import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="fixed top-0 w-screen h-screen bg-white flex justify-center items-center">
      <Image
        src="/assets/image/filter/loading_page.gif"
        height={1000}
        width={1000}
      />
    </div>
  );
};
export default LoadingPage;

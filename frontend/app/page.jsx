import Category from "@/components/category/Category";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ListProducts from "@/components/list/ListProducts";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-10">
        <Category />
        <ListProducts />
        <Footer />
      </div>
    </main>
  );
}

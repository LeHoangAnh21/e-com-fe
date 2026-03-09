import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-gray-500 text-center py-20">Trang danh sách sản phẩm – sắp ra mắt</p>
      </main>
      <Footer />
    </div>
  );
}

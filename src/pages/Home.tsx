import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const productRef = useRef<HTMLDivElement>(null);

  const scrollToProduct = () => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col space-y-20 bg-white min-h-screen p-5">
      <section className="flex flex-col items-center text-center py-20 bg-gradient-to-r from-[#403D94] via-[#2BC9D9] to-[#4949FF] rounded-3xl">
        <h1 className="text-4xl font-bold text-white mb-5">Welcome to Our Website</h1>
        <p className="text-lg text-white max-w-2xl">
          Explore our premium products, delicious recipes, and insightful posts crafted just for you.
        </p>
        <button
          onClick={scrollToProduct}
          className="mt-8 bg-white text-[#4949FF] px-6 py-3 rounded-full font-semibold hover:bg-[#e0e0ff] transition"
        >
          Get Started
        </button>
      </section>

      <section
        ref={productRef}
        className="flex flex-col lg:flex-row gap-8 items-center p-8 bg-gray-100 rounded-3xl"
      >
        <img
          className="rounded-2xl w-full lg:w-1/3"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800"
          alt="Product"
        />
        <div
          className="flex flex-col justify-center space-y-5 p-5 bg-white rounded-2xl shadow-md cursor-pointer transition hover:scale-105"
          onClick={() => navigate("/product")}
        >
          <h2 className="text-3xl font-bold text-[#403D94] hover:underline">Our Product</h2>
          <p className="text-gray-700 indent-5">
            Kami menyediakan berbagai produk pilihan dengan kualitas terbaik untuk mendukung aktivitas sehari-hari Anda. Temukan berbagai inovasi terbaru yang dirancang khusus demi kenyamanan dan kepuasan Anda dalam menggunakan produk kami.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse gap-8 items-center p-8 bg-gray-100 rounded-3xl">
        <img
          className="rounded-2xl w-full lg:w-1/4"
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800"
          alt="Recipes"
        />
        <div
          className="flex flex-col justify-center space-y-5 p-5 bg-white rounded-2xl shadow-md cursor-pointer transition hover:scale-105"
          onClick={() => navigate("/recipes")}
        >
          <h2 className="text-3xl font-bold text-[#403D94] hover:underline">Our Recipes</h2>
          <p className="text-gray-700 indent-5">
            Dapatkan inspirasi resep praktis dan lezat untuk menemani momen spesial Anda. Mulai dari hidangan sehat, cemilan kreatif, hingga menu utama yang menggugah selera, semua tersedia untuk Anda coba di rumah.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-8 items-center p-8 bg-gray-100 rounded-3xl">
        <img
          className="rounded-2xl w-full lg:w-1/3"
          src="https://images.unsplash.com/photo-1616509091334-2be806ea7a3b?q=80&w=800"
          alt="Post"
        />
        <div
          className="flex flex-col justify-center space-y-5 p-5 bg-white rounded-2xl shadow-md cursor-pointer transition hover:scale-105"
          onClick={() => navigate("/post")}
        >
          <h2 className="text-3xl font-bold text-[#403D94] hover:underline">Our Post</h2>
          <p className="text-gray-700 indent-5">
            Baca berbagai artikel menarik, tips bermanfaat, hingga berita terbaru seputar gaya hidup, kesehatan, dan teknologi. Kami hadir untuk memberikan informasi terkini yang bisa menjadi referensi Anda setiap hari.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

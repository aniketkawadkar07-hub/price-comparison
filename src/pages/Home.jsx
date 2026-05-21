import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {

  const [search, setSearch] = useState("");

  const resultsRef = useRef(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = () => {

    if (search.trim() !== "") {

      setTimeout(() => {

        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
        });

      }, 100);

    }

  };

  const handleTrendingClick = (value) => {

    setSearch(value);

    setTimeout(() => {

      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
      });

    }, 100);

  };

  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BLUR EFFECTS */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 blur-[140px] rounded-full"></div>

      <Navbar />

      {/* HERO SECTION */}

      <div className="flex flex-col items-center justify-center text-center min-h-[85vh] px-5 relative z-10">

        <div className="border border-white/20 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full text-sm text-gray-300">

          ✨ AI Powered Product Comparison Engine

        </div>

        <h1 className="text-7xl md:text-8xl font-bold mt-10 leading-tight max-w-6xl">

          Compare Product Prices
          <br />

          <span className="text-yellow-400">
            Instantly
          </span>

        </h1>

        <p className="text-gray-400 text-2xl mt-8 max-w-3xl">

          Search products and compare prices across Amazon, Flipkart & Meesho in seconds.

        </p>

        {/* SEARCH BAR */}

        <div className="w-full max-w-4xl mt-14">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center overflow-hidden shadow-2xl">

            <input
              type="text"
              placeholder="Search iPhone, Macbook, PS5..."
              className="flex-1 bg-transparent p-7 text-2xl outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button
              onClick={handleSearch}
              className="bg-yellow-400 text-black px-12 py-7 text-xl font-bold hover:bg-yellow-300 transition"
            >

              Search

            </button>

          </div>

        </div>

        {/* TRENDING */}

        <div className="flex gap-5 mt-10 flex-wrap justify-center">

          <span
            onClick={() => handleTrendingClick("iphone")}
            className="bg-white/10 border border-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition cursor-pointer"
          >
            iPhone 15
          </span>

          <span
            onClick={() => handleTrendingClick("macbook")}
            className="bg-white/10 border border-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition cursor-pointer"
          >
            Macbook Air
          </span>

          <span
            onClick={() => handleTrendingClick("ps5")}
            className="bg-white/10 border border-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition cursor-pointer"
          >
            PS5
          </span>

          <span
            onClick={() => handleTrendingClick("samsung")}
            className="bg-white/10 border border-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition cursor-pointer"
          >
            Samsung S24
          </span>

        </div>

      </div>

      {/* SEARCH RESULTS */}

      {search !== "" && (

        <div
          ref={resultsRef}
          className="relative z-10 px-10 pb-20"
        >

          <h1 className="text-5xl font-bold mb-12">

            Search Results

          </h1>

          {filteredProducts.length > 0 ? (

            <div className="grid md:grid-cols-3 gap-10">

              {filteredProducts.map((product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                />

              ))}

            </div>

          ) : (

            <div className="text-center mt-20">

              <h1 className="text-5xl text-red-400 font-bold">
                No Product Found
              </h1>

            </div>

          )}

        </div>

      )}

    </div>

  );
}

export default Home;
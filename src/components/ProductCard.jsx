function ProductCard({ product }) {

  const prices = [
    product.amazon,
    product.flipkart,
    product.meesho,
  ];

  const minPrice = Math.min(...prices);

  let cheapest = "";

  if (minPrice === product.amazon) {
    cheapest = "Amazon";
  } else if (minPrice === product.flipkart) {
    cheapest = "Flipkart";
  } else {
    cheapest = "Meesho";
  }

  return (

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300">

      <div className="bg-white p-10">

        <img
          src={product.image}
          alt=""
          className="h-64 w-full object-contain"
        />

      </div>

      <div className="p-8">

        <h1 className="text-3xl font-bold">

          {product.name}

        </h1>

        {/* PRICE TABLE */}

        <div className="mt-8 space-y-4">

          <div className="flex justify-between bg-black/30 p-4 rounded-xl">

            <span>Amazon</span>

            <span className="font-bold">
              ₹{product.amazon}
            </span>

          </div>

          <div className="flex justify-between bg-black/30 p-4 rounded-xl">

            <span>Flipkart</span>

            <span className="font-bold">
              ₹{product.flipkart}
            </span>

          </div>

          <div className="flex justify-between bg-black/30 p-4 rounded-xl">

            <span>Meesho</span>

            <span className="font-bold">
              ₹{product.meesho}
            </span>

          </div>

        </div>

        {/* CHEAPEST */}

        <div className="bg-green-500/20 border border-green-500/20 p-5 rounded-2xl mt-8">

          <h2 className="text-green-400 text-xl font-bold">

            🏆 Best Deal on {cheapest}

          </h2>

          <p className="mt-2 text-gray-300">

            Save more with lowest price ₹{minPrice}

          </p>

        </div>

        {/* BUTTON */}

        <button className="bg-yellow-400 text-black w-full py-4 rounded-2xl mt-8 text-lg font-bold hover:bg-yellow-300 transition">

          Buy Now

        </button>

      </div>

    </div>

  );
}

export default ProductCard;
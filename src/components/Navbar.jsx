function Navbar() {

  return (

    <div className="flex justify-between items-center px-10 py-7 relative z-10">

      <h1 className="text-3xl font-bold">

        Smart<span className="text-yellow-400">Compare</span>

      </h1>

      <div className="flex gap-10 text-lg text-gray-300">

        <a href="/" className="hover:text-white transition">
          Home
        </a>

        <a href="/" className="hover:text-white transition">
          About
        </a>

        <a href="/" className="hover:text-white transition">
          Contact
        </a>

      </div>

    </div>

  );
}

export default Navbar;
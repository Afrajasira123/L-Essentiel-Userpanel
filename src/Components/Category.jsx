import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-0">
      {/* TEXT */}
      <div className="text-center">
        <p className="text-base sm:text-xl mb-5 font-medium tracking-widest">
          MEET HIGH STANDARDs- ON THE GO
        </p>
        <h1 className="text-3xl sm:text-5xl font-medium mb-5 tracking-wider">
          For You, the Styles that Never Existed Before
        </h1>
        <button className="transition-transform duration-300 hover:-translate-x-5 mb-20">
          Shop collections ——→
        </button>
      </div>

      <div className="relative overflow-visible ">
        <motion.div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-10
            mx-2 sm:mx-6 lg:mx-8
          "
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="relative overflow-hidden group h-[420px] sm:h-[520px] lg:h-[600px]">
            <Link to="/hobo " target="_blank" className="group block h-full w-full">
              <img
                src="./hobo.jpg"
                alt="Hobo"
                className="h-full w-full object-cover transition-transform duration-3000 
               group-hover:scale-110 opacity-90 group-hover:opacity-75"
              />
            </Link>
            <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
              Hobo
            </p>
          </div>

          <div className="relative overflow-hidden group sm:mt-10 lg:mt-20 h-[420px] sm:h-[520px] lg:h-[600px]">
            <Link to="/crochet" target="_blank" className="group block h-full w-full">
              <img
                src="./croch.jpg"
                className="h-full w-full object-cover transition-transform duration-3000 group-hover:scale-110 opacity-90 group-hover:opacity-75"
              />
            </Link>
            <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
              Crochet
            </p>
          </div>

          <div className="relative overflow-hidden group h-[420px] sm:h-[520px] lg:h-[600px]">
            <Link to="/leather" target="_blank" className="group block h-full w-full">
              <img
                src="./leather.jpg"
                className="h-full w-full object-cover transition-transform duration-3000 group-hover:scale-110 opacity-90 group-hover:opacity-75"
              />
            </Link>
            <p className=" pointer-events-none absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
              Leather
            </p>
          </div>

          <div className="relative overflow-hidden group lg:-mt-20 h-[450px] sm:h-[550px] lg:h-[650px]">
            <Link to="/minaudiere" target="_blank" className="group block h-full w-full">
              <img
                src="./minaudiere.jpg"
                className="h-full w-full object-cover transition-transform duration-3000 group-hover:scale-110 opacity-90 group-hover:opacity-75"
              />
            </Link>
            <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
              Minaudiere
            </p>
          </div>

          <div className="relative overflow-hidden group h-[450px] sm:h-[550px] lg:h-[650px]">
            <Link to="/totes" target="_blank" className="group block h-full w-full">
              <img
                src="./totes.jpg"
                className="h-full w-full object-cover transition-transform duration-3000 group-hover:scale-110 opacity-90 group-hover:opacity-75"
              />
            </Link>
            <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
              Totes
            </p>
          </div>

          <div className="relative overflow-hidden group lg:-mt-20 h-[480px] sm:h-[600px] lg:h-[700px]">
            <Link to="/travel" target="_blank" className="group block h-full w-full">
              <img
                src="./travel.jpg"
                className="h-full w-full object-cover transition-transform duration-3000 group-hover:scale-110 opacity-90 group-hover:opacity-75"
              />
            </Link>
            <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-3xl opacity-0 group-hover:opacity-100 transition-opacity">
              Travel Bag
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;

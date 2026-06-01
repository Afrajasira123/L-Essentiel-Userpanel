// import React from "react";

// const OurBrands = () => {
//   return (
//     <div className="bg-[#c6c2bf5b] mt-30 h-[600px] flex">
//       <div>
//         <img src="./brandpic.jpg" className="h-[600px] w-[650px] object-cover"></img>
//       </div>

//       <div className="ml-50  flex flex-col items-center mt-20 tracking-widest">
//         <h1 className="text-5xl mb-3"> The Brands we Provide</h1>
//         <p>TO OUT-STAND TO LAST-LONG</p>
//         <div className="grid grid-cols-4 w-[550px] h-[300px] gap-x-20 mt-20">
//           <img src="./chanel.png" className="mt-4"></img>
//           <img src="./bvlgari.png"></img>
//           <img src="./hermes.png" className="-mt-2"></img>
//           <img src="./celine.png" className="mt-2"></img>

//           <img src="./balenciaga.png" className="mt-5"></img>
//           <img src="./cartier.png" className="mt-4"></img>
//           <img src="./prada.png" className="mt-6"></img>
//           <img src="./gucci.png" className="mt-1"></img>
//           <img src="./dior.png" className="mt-8"></img>
//           <img src="./louisvuitton.png" className="mt-5"></img>
//           <img src="./fendi.png" className="mt-8"></img>
//           <img src="./ysl.png"></img>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurBrands;

import React from "react";

const OurBrands = () => {
  return (
    <section className="bg-[#c6c2bf5b] mt-20 lg:mt-30 min-h-[600px] flex flex-col lg:flex-row">
      {/* LEFT IMAGE */}
      <div className="w-full lg:w-auto">
        <img
          src="./brandpic.jpg"
          className="
            w-full
            h-[350px] sm:h-[450px] lg:h-[600px]
            lg:w-[650px]
            object-cover
          "
          alt="Brand Visual"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div
        className="
          flex flex-col items-center tracking-widest
          mt-10 lg:mt-20
          ml-0 sm:ml-10 lg:ml-50
        "
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-3">The Brands we Provide</h1>
        <p className="text-sm sm:text-base">TO OUT-STAND TO LAST-LONG</p>

        {/* BRAND GRID */}
        <div
          className="
            grid
            grid-cols-3
            sm:grid-cols-4
            w-full
            max-w-[550px]
            h-auto
            gap-x-12 sm:gap-x-16 lg:gap-x-20
            gap-y-6
            mt-14 lg:mt-20
            px-4 sm:px-0
          "
        >
          <img src="./chanel.png" className="mt-4" />
          <img src="./bvlgari.png" />
          <img src="./hermes.png" className="-mt-2" />
          <img src="./celine.png" className="mt-2" />

          <img src="./balenciaga.png" className="mt-5" />
          <img src="./cartier.png" className="mt-4" />
          <img src="./prada.png" className="mt-6" />
          <img src="./gucci.png" className="mt-1" />

          <img src="./dior.png" className="mt-8" />
          <img src="./louisvuitton.png" className="mt-5" />
          <img src="./fendi.png" className="mt-8" />
          <img src="./ysl.png" />
        </div>
      </div>
    </section>
  );
};

export default OurBrands;

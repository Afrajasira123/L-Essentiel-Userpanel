// import React from "react";
// import Carousal from "./Carousal.jsx";

// const Essential = () => {
//   return (
//     <div className="flex h-screen">
//       <div>
//         <p className="font-normal font-body ml-75 mt-3 text-3xl tracking-widest">
//           STYLE.SLAY.SIEZE.
//         </p>
//         <Carousal />
//         <h1 className="font-medium font-heading text-9xl ml-30 mt-8 tracking-wide">L 'Essentiel</h1>
//       </div>
//       <div>
//         <img src="./essential.jpg" className="w-[650px] h-[700px] ml-10"></img>
//       </div>
//     </div>
//   );
// };

// export default Essential;

import React from "react";
import Carousal from "./Carousal.jsx";

const Essential = () => {
  return (
    <section className="relative flex min-h-screen overflow-hidden">
      {/* LEFT */}
      <div className="relative z-10 w-full md:w-1/2">
        <p
          className="
            font-body font-normal tracking-widest
            text-xl sm:text-2xl md:text-3xl
            ml-6 sm:ml-20 md:ml-75 mt-4
          "
        >
          STYLE.SLAY.SIEZE.
        </p>

        <div className="ml-6 sm:ml-16 md:ml-60">
          <Carousal />
        </div>

        <h1
          className="
            font-heading font-medium tracking-wide
            text-6xl sm:text-7xl md:text-9xl
            ml-6 sm:ml-20 md:ml-30 mt-8
            relative z-20
          "
        >
          L 'Essentiel
        </h1>
      </div>

      <div className="hidden md:block w-1/2">
        <img
          src="./essential.jpg"
          className="w-[650px] h-[700px] ml-10 object-cover"
          alt="Essential"
        />
      </div>
    </section>
  );
};

export default Essential;

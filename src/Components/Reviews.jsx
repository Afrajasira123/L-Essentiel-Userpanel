import React from "react";

const reviews = [
  {
    name: "Ayesha Khan",
    comment:
      "Excellent quality and fast delivery. This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers.",
    rating: "10/10",
  },
  {
    name: "Rahul Mehta",
    comment:
      "Premium brands and genuine products. This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers.",
    rating: "9/10",
  },
  {
    name: "Sara Ali",
    comment:
      "Beautiful designs and amazing support. This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers.",
    rating: "9.5/10",
  },
  {
    name: "Zara Noor",
    comment:
      "Elegant and refined. This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers.",
    rating: "9.8/10",
  },
  {
    name: "Kabir Malhotra",
    comment:
      "Top-tier fashion experience. This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It’s an opportunity to tell the story behind the business or describe a special service or product it offers.",
    rating: "9.7/10",
  },
];

const Reviews = () => {
  return (
    <section className="h-[700px] flex flex-col items-center">
      <h1 className="mt-32 text-5xl">What Our Fashion Idols Say!</h1>

      {/* IMAGE FRAME */}
      <div className="relative mt-16 w-380 h-600 overflow-hidden  ">
        {/* STATIC IMAGE */}
        {/* <img
          src="./totes.jpg"
          alt="Luxury fashion"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}

        {/* REVIEWS INSIDE IMAGE */}
        <div
          className="
            absolute inset-0
            flex items-center gap-8 px-12 
            overflow-x-scroll no-scrollbar
            snap-x snap-mandatory 
          "
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="
                w-[420px]
                h-[300px]
                bg-white/90
                p-8 
                shadow-lg
                snap-start flex-shrink-0
              "
            >
              <p className="text-gray-700 mb-4">{review.comment}</p>
              <p className="text-xs tracking-widest text-gray-500 mb-3">{review.rating}</p>

              <h4 className="text-sm font-medium">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

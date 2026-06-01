import React from "react";

const QtySelector = ({ qty, stock, onIncrease, onDecrease }) => {
  const isMax = qty >= stock;
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onDecrease}
        disabled={qty <= 1}
        className="w-8 h-8 border rounded-full disabled:opacity-30"
      >
        −
      </button>

      <span className="w-6 text-center">{qty}</span>

      <button
        onClick={onIncrease}
        disabled={isMax}
        className="w-8 h-8 border rounded-full disabled:opacity-30"
      >
        +
      </button>

      {/* {isMax && <span className="text-sm text-stone-500 ml-2"></span>} */}

      {/* {qty >= stock && <span className="text-sm text-stone-500 ml-2">Only {stock} available</span>} */}
    </div>
  );
};

export default QtySelector;

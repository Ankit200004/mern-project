// import React from "react";

// const FrontendProductCard = () => {
//   return (
//     <div className="h-125 w-80 bg-[#E6F1F1] m-3.5 rounded-4xl p-4.5 border-2 overflow-visible">
//       <div className="relative h-35 w-70 bg-amber-200 rounded-4xl overflow-visible flex items-center justify-center mb-15">
//         <img
//           src="/public/assets/alimony.png"
//           alt="image"
//           className="w-50 h-50 max-w-full object-contain mt-35 mb-10"
//         />
//       </div>
//       <div className="m-2">
//         <h2 className="font-mono font-extrabold text-3xl">Almonds</h2>
//         <span className="font-sans text-xm">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, dicta
//           consequatur. Libero atque dolorum harum aliquid maxime ea iusto id?
//         </span>
//         <h3 className="text-xs text-green-700">discounted price: $200</h3>
//         <h3 className="text-xs text-red-700">price: $300</h3>
//       </div>
//       <div className="flex justify-between m-2.5 mt-4.5">
//         <div>category: fruits</div>
//         <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
//           &#10133;
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrontendProductCard;

import React from "react";

const FrontendProductCard = ({ product }) => {
  return (
    <div className="h-125 w-80 bg-[#E6F1F1] m-3.5 rounded-4xl p-4.5 border-2 overflow-visible">
      <div className="relative h-35 w-70 bg-amber-200 rounded-4xl overflow-visible flex items-center justify-center mb-15">
        <img
          src={product.image}
          alt={product.title}
          className="w-50 h-50 object-contain mt-35 mb-10"
        />
      </div>
      <div className="m-2">
        <h2 className="font-mono font-extrabold text-3xl">{product.title}</h2>
        <span className="font-sans text-xm">{product.description}</span>
        <h3 className="text-xs text-green-700">
          discounted price: ${product.discountedprice}
        </h3>
        <h3 className="text-xs text-red-700">price: ${product.price}</h3>
      </div>
      <div className="flex justify-between m-2.5 mt-4.5">
        <div>category: {product.category}</div>
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
          &#10133;
        </div>
      </div>
    </div>
  );
};

export default FrontendProductCard;

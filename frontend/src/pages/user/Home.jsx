// // import React from "react";
// // import { useAuth } from "../../context/useAuth";
// // import { useNavigate } from "react-router-dom";
// // import { logout } from "../../services/authService";

// // const HomePage = () => {
// //   const { user, setUser } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     logout();
// //     setUser(null);
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
// //       <h1 className="text-4xl font-bold mb-4">Welcome, {user?.username} 👋</h1>
// //       <button
// //         onClick={handleLogout}
// //         className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
// //       >
// //         Logout
// //       </button>
// //     </div>
// //   );
// // };

// // export default HomePage;

// import React, { useEffect, useState } from "react";
// import FrontendProductCard from "../../components/FrontendProductCard";
// import { getProducts } from "../../services/productService";

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const res = await getProducts();
//       setProducts(res.data.data || []);
//     } catch (err) {
//       console.error("Failed to fetch products:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden p-4 mt-4.5 ml-4.5">
//       <div className="bg-white rounded-lg p-3">
//         <div
//           className="
//           absolute
//           top-0
//           left-0
//           h-full
//           w-3/4
//           bg-[#E6F1F1]
//           origin-top-left
//           transform -skew-x-12
//           rounded-4xl
//         "
//         />

//         <div className="relative z-10">
//           <h1 className="text-5xl font-bold text-gray-800 mb-4">Zenbites</h1>

//           <div className="flex flex-wrap">
//             {products.map((product) => (
//               <FrontendProductCard key={product._id} product={product} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FrontendProductCard from "../../components/FrontendProductCard";
import { getProducts } from "../../services/productService";
import { getFeatureImages } from "../../services/FeatureService";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [features, setFeatures] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  const fetchFeatureImages = async () => {
    try {
      const res = await getFeatureImages();
      setFeatures(res.data.data || []);
    } catch (err) {
      console.error("Failed to fetch feature images:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchFeatureImages();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative min-h-screen overflow-hidden p-4 mt-4.5 ml-4.5">
      {/* Slider */}
      <div className="mb-6">
        <Slider {...sliderSettings}>
          {features.map((feature) => (
            <div key={feature._id}>
              <img
                src={feature.image}
                alt="Feature"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Product Section */}
      <div className="bg-white rounded-lg p-3">
        <div
        // className="
        //   absolute top-0 left-0 h-full w-3/4 bg-[#E6F1F1]
        //   origin-top-left transform -skew-x-12 rounded-4xl
        // "
        />

        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Zenbites</h1>
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <FrontendProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

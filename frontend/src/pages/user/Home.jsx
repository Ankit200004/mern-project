import React from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

const HomePage = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome, {user?.username} 👋</h1>
      <button
        onClick={handleLogout}
        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;

// import React from "react";
// import FrontendProductCard from "../../components/FrontendProductCard";

// const Home = () => {
//   return (
//     <>
//       <div className="relative min-h-screen overflow-hidden p-4 mt-4.5 ml-4.5">
//         <div className="bg-white rounded-lg p-3">
//           <div
//             className="
//             absolute
//             top-0
//             left-0
//             h-full
//             w-3/4
//             bg-[#E6F1F1]
//             origin-top-left
//             transform -skew-x-12
//             rounded-4xl
//           "
//           />

//           <div className="relative z-10">
//             <h1 className="text-5xl font-bold text-gray-800 mb-4">Zenbites</h1>

//             <div className="flex">
//               <FrontendProductCard />
//               <FrontendProductCard />
//               <FrontendProductCard />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

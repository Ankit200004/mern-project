import React, { useEffect, useState, useCallback } from "react";
import { useAuth } from "../../context/useAuth";
import { useNavigate } from "react-router-dom";
import FrontendProductCard from "../../components/FrontendProductCard";
import FeatureSlider from "../../components/FeatureSlider";
import CartDrawer from "../../components/CartDrawer";

import { getProducts } from "../../services/productService";
import { getFeatureImages } from "../../services/FeatureService";
import { logout } from "../../services/authService";
import {
  addToCart,
  getCartItems,
  updateCartItemQty,
  deleteCartItem,
} from "../../services/cartService";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [features, setFeatures] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productRes, featureRes] = await Promise.all([
          getProducts(),
          getFeatureImages(),
        ]);
        setProducts(productRes.data.data || []);
        setFeatures(featureRes.data.data || []);
      } catch (err) {
        console.error("Error loading data", err);
      }
    };
    fetchData();
  }, []);

  const fetchCart = useCallback(async () => {
    if (!user) return;
    try {
      const res = await getCartItems(user._id);
      setCartItems(res.data.data.items || []);
    } catch (err) {
      console.error("Error fetching cart", err);
    }
  }, [user]);

  useEffect(() => {
    if (user) fetchCart();
    else setCartItems([]);
  }, [user, fetchCart]);

  const handleAddToCart = async (productId) => {
    if (!user) return navigate("/login");
    try {
      await addToCart({ userId: user._id, productId, quantity: 1 });
      await fetchCart();
      setShowCart(true);
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  const handleUpdateQuantity = async (productId, quantity) => {
    if (!user) return;
    try {
      if (quantity <= 0) {
        await deleteCartItem(user._id, productId);
      } else {
        await updateCartItemQty({ userId: user._id, productId, quantity });
      }
      await fetchCart();
    } catch (err) {
      console.error("Update quantity failed", err);
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-gray-800">
      <header className="w-full bg-blue-100/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-800">Zenbites</h1>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 text-xl">
              <i className="ri-search-line"></i>
            </button>
            <button
              onClick={() => setShowCart(true)}
              className="text-gray-700 text-xl"
            >
              <i className="ri-shopping-cart-2-line"></i>
            </button>
            <button
              onClick={handleLogout}
              className="text-gray-700 text-xl"
              title="Logout"
            >
              <i className="ri-logout-box-r-line"></i>
            </button>
          </div>
        </div>
      </header>

      <CartDrawer
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
        handleUpdateQuantity={handleUpdateQuantity}
      />

      <FeatureSlider features={features} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Zenbites
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <FrontendProductCard
              key={product._id}
              product={product}
              onItemAdded={() => handleAddToCart(product._id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

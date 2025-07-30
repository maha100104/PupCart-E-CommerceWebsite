"use client";

import { useState } from "react";
import PersonalInfo from "@/components/profilepage/personal-info";

import MyOrdersSection from "@/components/profilepage/orders"
import OrderTrackingSection from "@/components/profilepage/coupons"


import CustomerService from "@/components/profilepage/customer-service";
import MyWishlistSection from "@/components/profilepage/mywishlistsection";

const menuItems = [
  { key: "personal", label: " Personal Information" },
  { key: "orders", label: " My Orders" },
  { key: "wishlist", label: " My Wishlist" },
  { key: "support", label: " Customer Service" },
  { key: "orderTracking", label: " Coupons" }, // ✅ Added
];


export default function ProfilePage() {
  const [selectedMenu, setSelectedMenu] = useState("personal");

  return (
    <div className="flex max-w-8xl mx-auto px-4 py-10 gap-6">
      {/* Sidebar */}
      <aside className="w-64 border rounded-xl bg-white p-4">
        <h2 className="text-lg font-bold mb-4">👤 My Account</h2>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                className={`w-full text-left px-3 py-2 rounded-md ${
                  selectedMenu === item.key
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  if (item.key === "wishlist") {
                    setSelectedMenu("wishlist");
                    //window.location.href = "/wishlist"; // navigate to separate wishlist page
                  } else {
                    setSelectedMenu(item.key);
                  }
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content area */}
      <section className="flex-1 bg-white p-6 rounded-xl shadow-md">
        {selectedMenu === "personal" && <PersonalInfo />}
        {selectedMenu === "orders" && <MyOrdersSection />}
        {selectedMenu === "support" && <CustomerService />}
        {selectedMenu === "wishlist" && <MyWishlistSection/>}
        {selectedMenu === "orderTracking" && <OrderTrackingSection />}
{/* 
        {selectedMenu === "tracking" && <p>Order tracking coming soon...</p>} */}
      </section>
    </div>
  );
} 
import React, { useState } from "react";
import {
  User,
  MapPin,
  Mail,
  Lock,
  Save,
  X,
  Package,
  Heart,
  CreditCard,
  Home,
} from "lucide-react";
import { products } from "../utils/products";
import ProductCard from "../components/productCard/ProductCard";

export default function MyAccount() {
  const [activePage, setActivePage] = useState("profile");
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "Md",
      lastName: "Rimel",
      email: "rimel111@gmail.com",
      address: "Kingston, 5236, United State",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  // Profile Page Component
  const ProfilePage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">
        Edit Your Profile
      </h4>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-3 sm:mb-4">
            Password Changes
          </h4>
          <div className="space-y-3 sm:space-y-4">
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Current Password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm New Password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleCancel}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors border border-gray-300 rounded sm:border-none"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-primary text-white rounded hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
          >
            <Save size={16} className="sm:w-[18px] sm:h-[18px]" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  // Address Book Page
  const AddressBookPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">
        Address Book
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <h4 className="font-semibold text-sm sm:text-base">Home Address</h4>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
              Default
            </span>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-gray-600">
            <p className="font-medium text-gray-900">Md Rimel</p>
            <p>Kingston, 5236</p>
            <p>United State</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <button className="mt-4 text-xs sm:text-sm text-primary hover:text-red-600 font-medium">
            Edit Address
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <h4 className="font-semibold text-sm sm:text-base">
              Office Address
            </h4>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-gray-600">
            <p className="font-medium text-gray-900">Md Rimel</p>
            <p>Downtown, 1234</p>
            <p>United State</p>
            <p>Phone: +1 234 567 891</p>
          </div>
          <button className="mt-4 text-xs sm:text-sm text-primary hover:text-red-600 font-medium">
            Edit Address
          </button>
        </div>
      </div>

      <button className="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base">
        + Add New Address
      </button>
    </div>
  );

  // Payment Options Page
  const PaymentOptionsPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">
        My Payment Options
      </h4>

      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  Visa ending in 4242
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Expires 12/2025
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-xs sm:text-sm text-blue-500 hover:text-blue-600">
                Edit
              </button>
              <button className="text-xs sm:text-sm text-primary hover:text-red-600">
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  Mastercard ending in 8888
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Expires 06/2024
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-xs sm:text-sm text-blue-500 hover:text-blue-600">
                Edit
              </button>
              <button className="text-xs sm:text-sm text-primary hover:text-red-600">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-6 px-6 py-3 bg-primary text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base">
        + Add New Payment Method
      </button>
    </div>
  );

  // My Returns Page
  const MyReturnsPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">
        My Returns
      </h4>

      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  LCD Monitor
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Return ID: #RET123456
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Return Date: Oct 1, 2025
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-xs sm:text-sm">
                Processing
              </span>
              <p className="mt-2 text-sm sm:text-base font-semibold">$370</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  Gaming Keyboard
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Return ID: #RET123455
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Return Date: Sep 28, 2025
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded text-xs sm:text-sm">
                Completed
              </span>
              <p className="mt-2 text-sm sm:text-base font-semibold">$960</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // My Cancellations Page
  const MyCancellationsPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">
        My Cancellations
      </h4>

      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  GP11 Shooter USB Gamepad
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Order ID: #ORD789012
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Cancelled: Oct 5, 2025
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded text-xs sm:text-sm">
                Cancelled
              </span>
              <p className="mt-2 text-sm sm:text-base font-semibold">$660</p>
            </div>
          </div>
        </div>

        <div className="text-center py-8 text-gray-500 text-sm">
          <Package className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p>No more cancellations</p>
        </div>
      </div>
    </div>
  );

  // My Wishlist Page
  const MyWishlistPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h4 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">
        My Wishlist
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products.slice(0, 4).map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    switch (activePage) {
      case "profile":
        return <ProfilePage />;
      case "addressBook":
        return <AddressBookPage />;
      case "paymentOptions":
        return <PaymentOptionsPage />;
      case "returns":
        return <MyReturnsPage />;
      case "cancellations":
        return <MyCancellationsPage />;
      case "wishlist":
        return <MyWishlistPage />;
      default:
        return <ProfilePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">My Account</span>
        </div>

        <div className="flex justify-end mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm">
            Welcome! <span className="text-primary font-medium">Md Rimel</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                Manage My Account
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-sm">
                <li
                  onClick={() => setActivePage("profile")}
                  className={`cursor-pointer py-1 ${
                    activePage === "profile"
                      ? "text-primary font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  My Profile
                </li>
                <li
                  onClick={() => setActivePage("addressBook")}
                  className={`cursor-pointer py-1 ${
                    activePage === "addressBook"
                      ? "text-primary font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Address Book
                </li>
                <li
                  onClick={() => setActivePage("paymentOptions")}
                  className={`cursor-pointer py-1 ${
                    activePage === "paymentOptions"
                      ? "text-primary font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  My Payment Options
                </li>
              </ul>

              <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                My Orders
              </h4>
              <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-sm">
                <li
                  onClick={() => setActivePage("returns")}
                  className={`cursor-pointer py-1 ${
                    activePage === "returns"
                      ? "text-primary font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  My Returns
                </li>
                <li
                  onClick={() => setActivePage("cancellations")}
                  className={`cursor-pointer py-1 ${
                    activePage === "cancellations"
                      ? "text-primary font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  My Cancellations
                </li>
              </ul>

              <h4
                onClick={() => setActivePage("wishlist")}
                className={`font-semibold text-base sm:text-lg cursor-pointer ${
                  activePage === "wishlist"
                    ? "text-primary"
                    : "hover:text-primary"
                }`}
              >
                My Wishlist
              </h4>
            </div>
          </div>

          <div className="lg:col-span-3">{renderPage()}</div>
        </div>
      </div>
    </div>
  );
}

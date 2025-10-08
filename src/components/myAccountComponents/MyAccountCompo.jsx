import React,{ useState } from "react";
import { User, MapPin, Mail, Lock, Save, X, Package, Heart, CreditCard, Home } from 'lucide-react';

const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Changes saved successfully!');
  };

  const handleCancel = () => {
    setFormData({
      firstName: 'Md',
      lastName: 'Rimel',
      email: 'rimel111@gmail.com',
      address: 'Kingston, 5236, United State',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const ProfilePage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4 sm:mb-6">
        Edit Your Profile
      </h2>

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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
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
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h3 className="text-xs sm:text-sm font-medium text-gray-700 mb-3 sm:mb-4">
            Password Changes
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Current Password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm New Password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-100 rounded border-none focus:outline-none focus:ring-2 focus:ring-red-500"
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
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-red-500 text-white rounded hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
          >
            <Save size={16} className="sm:w-[18px] sm:h-[18px]" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );

  const AddressBookPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4 sm:mb-6">
        Address Book
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold text-sm sm:text-base">Home Address</h3>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Default</span>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-gray-600">
            <p className="font-medium text-gray-900">Md Rimel</p>
            <p>Kingston, 5236</p>
            <p>United State</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <button className="mt-4 text-xs sm:text-sm text-red-500 hover:text-red-600 font-medium">
            Edit Address
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold text-sm sm:text-base">Office Address</h3>
          </div>
          <div className="space-y-2 text-xs sm:text-sm text-gray-600">
            <p className="font-medium text-gray-900">Md Rimel</p>
            <p>Downtown, 1234</p>
            <p>United State</p>
            <p>Phone: +1 234 567 891</p>
          </div>
          <button className="mt-4 text-xs sm:text-sm text-red-500 hover:text-red-600 font-medium">
            Edit Address
          </button>
        </div>
      </div>

      <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base">
        + Add New Address
      </button>
    </div>
  );

  const PaymentOptionsPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4 sm:mb-6">
        My Payment Options
      </h2>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <div>
                <p className="font-semibold text-sm sm:text-base">Visa ending in 4242</p>
                <p className="text-xs sm:text-sm text-gray-600">Expires 12/2025</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-xs sm:text-sm text-blue-500 hover:text-blue-600">Edit</button>
              <button className="text-xs sm:text-sm text-red-500 hover:text-red-600">Remove</button>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <div>
                <p className="font-semibold text-sm sm:text-base">Mastercard ending in 8888</p>
                <p className="text-xs sm:text-sm text-gray-600">Expires 06/2024</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-xs sm:text-sm text-blue-500 hover:text-blue-600">Edit</button>
              <button className="text-xs sm:text-sm text-red-500 hover:text-red-600">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-6 px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm sm:text-base">
        + Add New Payment Method
      </button>
    </div>
  );

  const MyReturnsPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4 sm:mb-6">
        My Returns
      </h2>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-sm sm:text-base">LCD Monitor</p>
                <p className="text-xs sm:text-sm text-gray-600">Return ID: #RET123456</p>
                <p className="text-xs sm:text-sm text-gray-600">Return Date: Oct 1, 2025</p>
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
                <p className="font-semibold text-sm sm:text-base">Gaming Keyboard</p>
                <p className="text-xs sm:text-sm text-gray-600">Return ID: #RET123455</p>
                <p className="text-xs sm:text-sm text-gray-600">Return Date: Sep 28, 2025</p>
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

  const MyCancellationsPage = () => (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
      <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4 sm:mb-6">
        My Cancellations
      </h2>
      
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-sm sm:text-base">GP11 Shooter USB Gamepad</p>
                <p className="text-xs sm:text-sm text-gray-600">Order ID: #ORD789012</p>
                <p className="text-xs sm:text-sm text-gray-600">Cancelled: Oct 5, 2025</p>
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
      <h2 className="text-lg sm:text-xl font-semibold text-red-500 mb-4 sm:mb-6">
        My Wishlist
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <div className="w-full h-48 bg-gray-200"></div>
              <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm sm:text-base mb-2">Product Name {item}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-red-500 font-semibold text-sm sm:text-base">$120</span>
                  <span className="text-gray-400 line-through ml-2 text-xs sm:text-sm">$160</span>
                </div>
              </div>
              <button className="w-full mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-xs sm:text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
export {ProfilePage, AddressBookPage, PaymentOptionsPage, MyReturnsPage, MyWishlistPage}
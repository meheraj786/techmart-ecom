import React,{ useState } from "react";

const MyDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeSubSection, setActiveSubSection] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      id: "account",
      label: "My Account",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      subItems: [
        { id: "profile", label: "My Profile" },
        { id: "address", label: "Address Book" },
        { id: "payment", label: "My Payment Options" },
      ],
    },
    {
      id: "orders",
      label: "My Orders",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      subItems: [
        { id: "my-orders", label: "My Orders" },
        { id: "returns", label: "My Returns" },
        { id: "cancellations", label: "My Cancellations" },
      ],
    },
    {
      id: "wishlist",
      label: "My WishList",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: "products",
      label: "Products",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      subItems: [
        { id: "all-products", label: "All Products" },
        { id: "add-product", label: "Add Product" },
        { id: "inventory", label: "Inventory" },
      ],
    },
    {
      id: "sales",
      label: "Sales",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      subItems: [
        { id: "sales-report", label: "Sales Report" },
        { id: "transactions", label: "Transactions" },
        { id: "refunds", label: "Refunds" },
      ],
    },
    {
      id: "categories",
      label: "Categories",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      subItems: [
        { id: "all-categories", label: "All Categories" },
        { id: "add-category", label: "Add Category" },
      ],
    },
    {
      id: "subcategories",
      label: "Subcategories",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      ),
      subItems: [
        { id: "all-subcategories", label: "All Subcategories" },
        { id: "add-subcategory", label: "Add Subcategory" },
      ],
    },
  ];

  const handleMenuClick = (itemId) => {
    setActiveSection(itemId);
    const item = menuItems.find((item) => item.id === itemId);
    if (item && item.subItems && item.subItems.length > 0) {
      setActiveSubSection(item.subItems[0].id);
    } else {
      setActiveSubSection("");
    }
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const handleSubMenuClick = (subItemId) => {
    setActiveSubSection(subItemId);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Products
                  </h3>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2">245</p>
                <p className="text-xs text-green-500 mt-1">
                  +12% from last month
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Sales
                  </h3>
                  <div className="p-2 bg-green-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2">$12,450</p>
                <p className="text-xs text-green-500 mt-1">
                  +8% from last month
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">
                    Categories
                  </h3>
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2">18</p>
                <p className="text-xs text-gray-500 mt-1">
                  5 active, 13 archived
                </p>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">
                    Subcategories
                  </h3>
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-2xl font-bold mt-2">42</p>
                <p className="text-xs text-gray-500 mt-1">
                  32 active, 10 archived
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between p-3 border border-gray-100 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">Order #ORD-{1000 + item}</p>
                        <p className="text-sm text-gray-500">
                          June {15 + item}, 2023
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          ${(150 + item * 25).toFixed(2)}
                        </p>
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Top Products</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="flex items-center p-3 border border-gray-100 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-gray-200 rounded-lg mr-3"></div>
                      <div className="flex-1">
                        <p className="font-medium">Product {item}</p>
                        <p className="text-sm text-gray-500">
                          {120 - item * 10} sold
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          ${(45 + item * 5).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case "account":
        if (activeSubSection === "profile") {
          return (
            <div className="p-4 md:p-6">
              <h1 className="text-2xl font-bold mb-6">Edit Your Profile</h1>
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="Mid"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="Rimal"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="timelill@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="Kingston, 5236, United State"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-4">
                    Password Changes
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                  <button className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div className="p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-6">
              {menuItems.find((item) => item.id === activeSection)?.label}
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p>Select a sub-menu option to view details.</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-4 md:p-6">
            <h1 className="text-2xl font-bold mb-6">
              {menuItems.find((item) => item.id === activeSection)?.label}
            </h1>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p>Content for {activeSection} section.</p>
              {activeSubSection && <p>Currently viewing: {activeSubSection}</p>}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-30 w-64 bg-white shadow-sm transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Soho Admin</h1>
          <button
            className="md:hidden p-1 rounded-md text-gray-500 hover:bg-gray-100"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-4 px-2">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="mb-1">
                <button
                  className={`flex items-center w-full p-3 text-left rounded-lg hover:bg-gray-50 transition-colors ${
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <span
                    className={`mr-3 ${
                      activeSection === item.id
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </button>
                {item.subItems && activeSection === item.id && (
                  <ul className="ml-4 mt-1 border-l border-gray-100 pl-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <button
                          className={`flex items-center w-full p-2 text-left text-sm rounded-lg hover:bg-gray-50 transition-colors ${
                            activeSubSection === subItem.id
                              ? "bg-blue-100 text-blue-600"
                              : "text-gray-600"
                          }`}
                          onClick={() => handleSubMenuClick(subItem.id)}
                        >
                          <span className="ml-1">{subItem.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="md:hidden p-2 mr-2 rounded-md text-gray-500 hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-gray-800">
              {menuItems.find((item) => item.id === activeSection)?.label}
              {activeSubSection &&
                ` - ${
                  menuItems
                    .find((item) => item.id === activeSection)
                    ?.subItems?.find((sub) => sub.id === activeSubSection)
                    ?.label
                }`}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2 font-medium">
                M
              </div>
              <span className="text-gray-700 hidden sm:block">Admin</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default MyDashboard;

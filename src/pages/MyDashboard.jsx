import React,{ useState } from 'react';
import { Menu, X, ShoppingBag, List, Tag, Users, Settings, Plus, Users2, ParkingCircle } from 'lucide-react';
import Logo from '../layouts/Logo';
import { products } from '../utils/products';
import { CgRadioChecked } from 'react-icons/cg';
import { BiMoney } from 'react-icons/bi';

export default function MyDashboard() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([
    { id: 1, name: 'Electronics', subcategories: ['Mobile', 'Laptop', 'TV'] },
    { id: 2, name: 'Fashion', subcategories: ['Men', 'Women', 'Kids'] },
    { id: 3, name: 'Home', subcategories: ['Furniture', 'Decor', 'Kitchen'] }
  ]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newSubcategory, setNewSubcategory] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <ShoppingBag size={20} /> },
    { id: 'products', name: 'All Products', icon: <List size={20} /> },
    { id: 'orders', name: 'Order List', icon: <ShoppingBag size={20} /> },
    { id: 'categories', name: 'Categories', icon: <Tag size={20} /> },
    { id: 'customers', name: 'Customers', icon: <Users size={20} /> },
    { id: 'settings', name: 'Settings', icon: <Settings size={20} /> }
  ];

  const statsCards = [
    { title: 'Active Users', value: '৳26,500', icon: <Users2/> },
    { title: 'Active Orders', value: '৳165,600', icon: <ParkingCircle/> },
    { title: 'Completed Orders', value: '৳165,500', icon: <CgRadioChecked/> },
    { title: 'Total Sales', value: '৳265,800', icon: <BiMoney/> }
  ];

  const recentOrders = [
    { id: '#25423', product: 'Lorem Ipsum', date: 'Nov 05, 2023', customer: 'Karen', status: 'Delivered', amount: '৳250.00' },
    { id: '#25424', product: 'Lorem Ipsum', date: 'Nov 05, 2023', customer: 'Aminul', status: 'Canceled', amount: '৳400.00' },
    { id: '#25424', product: 'Lorem Ipsum', date: 'Nov 05, 2023', customer: 'Jakir', status: 'Delivered', amount: '৳250.00' },
    { id: '#25423', product: 'Lorem Ipsum', date: 'Nov 05, 2023', customer: 'Shahin', status: 'Canceled', amount: '৸400.00' },
    { id: '#25422', product: 'Lorem Ipsum', date: 'Nov 05, 2023', customer: 'Shakia', status: 'Delivered', amount: '৳250.00' }
  ];



  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, { id: Date.now(), name: newCategory, subcategories: [] }]);
      setNewCategory('');
      setShowAddCategory(false);
    }
  };

  const handleAddSubcategory = (categoryId) => {
    if (newSubcategory.trim()) {
      setCategories(categories.map(cat => 
        cat.id === categoryId 
          ? { ...cat, subcategories: [...cat.subcategories, newSubcategory] }
          : cat
      ));
      setNewSubcategory('');
      setSelectedCategoryId(null);
    }
  };

  const getPageTitle = () => {
    const page = menuItems.find(item => item.id === currentPage);
    return page ? page.name : 'Dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-white p-2 rounded-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`
        fixed left-0 top-0 h-full w-64 bg-gray-900 text-white z-40 transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="p-6">
          <Logo className="text-white"/>
        </div>
        
        <nav className="mt-6">
          {menuItems.map(item => (
            <a 
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setSidebarOpen(false);
              }}
              className={`
                flex items-center px-6 py-3 cursor-pointer transition-colors
                ${currentPage === item.id 
                  ? 'bg-primary text-white' 
                  : 'text-gray-300 hover:bg-gray-800'}
              `}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      <main className="lg:ml-64 p-4 lg:p-8">
        <div className="mb-8 mt-12 lg:mt-0">
          <h4 className="text-2xl lg:text-3xl font-bold text-gray-900">{getPageTitle()}</h4>
          <p className="text-gray-500 text-sm">Home / {getPageTitle()}</p>
        </div>

        {currentPage === 'dashboard' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
              {statsCards.map((card, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{card.icon}</span>
                    <span className="text-sm font-semibold text-green-500">{card.change}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 lg:p-6 border-b border-gray-200">
                <h4 className="text-lg lg:text-xl font-bold text-gray-900">Recent Orders</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap">{order.product}</td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap">{order.id}</td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap">{order.customer}</td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === 'Delivered' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 lg:px-6 py-4 whitespace-nowrap font-semibold">{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
        {currentPage === 'products' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 lg:p-6 border-b border-gray-200 flex justify-between items-center">
              <h4 className="text-lg lg:text-xl font-bold text-gray-900">All Products</h4>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2">
                <Plus size={20} />
                <span className="hidden sm:inline">Add Product</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-6">
              {products.map((product, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="bg-gray-100 h-40 flex justify-center items-center rounded-lg mb-4">
                    <img src={product.image} alt="" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{product.name}</h4>
                  <p className="text-primary font-bold text-lg">{product.price}</p>
                  {/* <p className="text-gray-500 text-sm">{product.stock}</p> */}
                  <span className="inline-block mt-2 text-xs bg-gray-100 px-3 py-1 rounded-full">{product.category}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {currentPage === 'categories' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 lg:p-6 border-b border-gray-200 flex justify-between items-center">
              <h4 className="text-lg lg:text-xl font-bold text-gray-900">Categories</h4>
              <button 
                onClick={() => setShowAddCategory(true)}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center gap-2"
              >
                <Plus size={20} />
                <span className="hidden sm:inline">Add Category</span>
              </button>
            </div>
            
            {showAddCategory && (
              <div className="p-4 lg:p-6 border-b border-gray-200 bg-orange-50">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Category name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
                />
                <div className="flex gap-2">
                  <button onClick={handleAddCategory} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    Save
                  </button>
                  <button onClick={() => setShowAddCategory(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="p-4 lg:p-6">
              {categories.map(category => (
                <div key={category.id} className="mb-6 border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{category.name}</h4>
                    <button 
                      onClick={() => setSelectedCategoryId(category.id)}
                      className="text-primary hover:text-orange-600 text-sm font-semibold"
                    >
                      + Add Subcategory
                    </button>
                  </div>
                  
                  {selectedCategoryId === category.id && (
                    <div className="mb-3 bg-gray-50 p-3 rounded-lg">
                      <input
                        type="text"
                        value={newSubcategory}
                        onChange={(e) => setNewSubcategory(e.target.value)}
                        placeholder="Subcategory name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2"
                      />
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleAddSubcategory(category.id)} 
                          className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-orange-600"
                        >
                          Save
                        </button>
                        <button 
                          onClick={() => setSelectedCategoryId(null)} 
                          className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.map((sub, idx) => (
                      <span key={idx} className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'orders' && (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <h4 className="text-lg lg:text-xl font-bold text-gray-900">All Orders</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap font-semibold">{order.id}</td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap">{order.customer}</td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 lg:px-6 py-4 whitespace-nowrap font-semibold">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {currentPage === 'customers' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <h4 className="text-lg lg:text-xl font-bold text-gray-900">Customers</h4>
            </div>
            <div className="p-4 lg:p-6">
              <p className="text-gray-500">Customer management coming soon...</p>
            </div>
          </div>
        )}

        {currentPage === 'settings' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 lg:p-6 border-b border-gray-200">
              <h4 className="text-lg lg:text-xl font-bold text-gray-900">Settings</h4>
            </div>
            <div className="p-4 lg:p-6">
              <p className="text-gray-500">Settings panel coming soon...</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
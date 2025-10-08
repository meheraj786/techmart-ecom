import React,{ useState } from 'react';
import { Package, ShoppingCart, Folder, Grid } from 'lucide-react';

export default function MyDashboard() {
  const [activeSection, setActiveSection] = useState('add-product');
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productCategory: '',
    productSubcategory: '',
    productStock: '',
    categoryName: '',
    categoryDescription: '',
    subcategoryName: '',
    subcategoryParent: '',
    saleAmount: '',
    saleDate: '',
    saleCustomer: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Changes saved successfully!');
  };

  const handleCancel = () => {
    setFormData({
      productName: '',
      productPrice: '',
      productCategory: '',
      productSubcategory: '',
      productStock: '',
      categoryName: '',
      categoryDescription: '',
      subcategoryName: '',
      subcategoryParent: '',
      saleAmount: '',
      saleDate: '',
      saleCustomer: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">Home</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium text-sm">Admin Dashboard</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-600">Welcome! </span>
            <span className="text-primary font-medium">Admin User</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Manage Dashboard</h4>
              
              <nav className="space-y-6">
                <div>
                  <button
                    className={`flex items-center space-x-2 w-full text-left ${
                      activeSection === 'products' ? 'text-primary font-medium' : 'text-gray-700'
                    }`}
                  >
                    <Package className="w-4 h-4" />
                    <span>Products</span>
                  </button>
                  <ul className="ml-6 mt-2 space-y-2 text-sm">
                    <li>
                      <button
                        onClick={() => setActiveSection('add-product')}
                        className={activeSection === 'add-product' ? 'text-primary' : 'text-gray-600'}
                      >
                        Add Product
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveSection('view-products')}
                        className={activeSection === 'view-products' ? 'text-primary' : 'text-gray-600'}
                      >
                        View Products
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    className={`flex items-center space-x-2 w-full text-left ${
                      activeSection === 'sales' ? 'text-primary font-medium' : 'text-gray-700'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Sales</span>
                  </button>
                  <ul className="ml-6 mt-2 space-y-2 text-sm">
                    <li>
                      <button
                        onClick={() => setActiveSection('add-sale')}
                        className={activeSection === 'add-sale' ? 'text-primary' : 'text-gray-600'}
                      >
                        Add Sale
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveSection('view-sales')}
                        className={activeSection === 'view-sales' ? 'text-primary' : 'text-gray-600'}
                      >
                        View Sales
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    className={`flex items-center space-x-2 w-full text-left ${
                      activeSection === 'categories' ? 'text-primary font-medium' : 'text-gray-700'
                    }`}
                  >
                    <Folder className="w-4 h-4" />
                    <span>Categories</span>
                  </button>
                  <ul className="ml-6 mt-2 space-y-2 text-sm">
                    <li>
                      <button
                        onClick={() => setActiveSection('add-category')}
                        className={activeSection === 'add-category' ? 'text-primary' : 'text-gray-600'}
                      >
                        Add Category
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveSection('view-categories')}
                        className={activeSection === 'view-categories' ? 'text-primary' : 'text-gray-600'}
                      >
                        View Categories
                      </button>
                    </li>
                  </ul>
                </div>

                <div>
                  <button
                    className={`flex items-center space-x-2 w-full text-left ${
                      activeSection === 'subcategories' ? 'text-primary font-medium' : 'text-gray-700'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                    <span>Subcategories</span>
                  </button>
                  <ul className="ml-6 mt-2 space-y-2 text-sm">
                    <li>
                      <button
                        onClick={() => setActiveSection('add-subcategory')}
                        className={activeSection === 'add-subcategory' ? 'text-primary' : 'text-gray-600'}
                      >
                        Add Subcategory
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActiveSection('view-subcategories')}
                        className={activeSection === 'view-subcategories' ? 'text-primary' : 'text-gray-600'}
                      >
                        View Subcategories
                      </button>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>

          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              {activeSection === 'add-product' && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Add New Product</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                      <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleInputChange}
                        placeholder="Enter product name"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                      <input
                        type="text"
                        name="productPrice"
                        value={formData.productPrice}
                        onChange={handleInputChange}
                        placeholder="Enter price"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <input
                        type="text"
                        name="productCategory"
                        value={formData.productCategory}
                        onChange={handleInputChange}
                        placeholder="Select category"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                      <input
                        type="text"
                        name="productSubcategory"
                        value={formData.productSubcategory}
                        onChange={handleInputChange}
                        placeholder="Select subcategory"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Stock Quantity</label>
                      <input
                        type="text"
                        name="productStock"
                        value={formData.productStock}
                        onChange={handleInputChange}
                        placeholder="Enter stock quantity"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'add-sale' && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Add New Sale</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Customer Name</label>
                      <input
                        type="text"
                        name="saleCustomer"
                        value={formData.saleCustomer}
                        onChange={handleInputChange}
                        placeholder="Enter customer name"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                      <input
                        type="text"
                        name="saleAmount"
                        value={formData.saleAmount}
                        onChange={handleInputChange}
                        placeholder="Enter amount"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sale Date</label>
                      <input
                        type="date"
                        name="saleDate"
                        value={formData.saleDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeSection === 'add-category' && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Add New Category</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category Name</label>
                      <input
                        type="text"
                        name="categoryName"
                        value={formData.categoryName}
                        onChange={handleInputChange}
                        placeholder="Enter category name"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                      <input
                        type="text"
                        name="categoryDescription"
                        value={formData.categoryDescription}
                        onChange={handleInputChange}
                        placeholder="Enter description"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'add-subcategory' && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Add New Subcategory</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory Name</label>
                      <input
                        type="text"
                        name="subcategoryName"
                        value={formData.subcategoryName}
                        onChange={handleInputChange}
                        placeholder="Enter subcategory name"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent Category</label>
                      <input
                        type="text"
                        name="subcategoryParent"
                        value={formData.subcategoryParent}
                        onChange={handleInputChange}
                        placeholder="Select parent category"
                        className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'view-products' && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">All Products</h4>
                  <p className="text-gray-600">Product list will be displayed here.</p>
                </div>
              )}

              {activeSection === 'view-sales' && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">All Sales</h4>
                  <p className="text-gray-600">Sales records will be displayed here.</p>
                </div>
              )}

              {activeSection === 'view-categories' && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">All Categories</h4>
                  <p className="text-gray-600">Category list will be displayed here.</p>
                </div>
              )}

              {activeSection === 'view-subcategories' && (
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">All Subcategories</h4>
                  <p className="text-gray-600">Subcategory list will be displayed here.</p>
                </div>
              )}

              {activeSection.includes('add') && (
                <div className="flex justify-end gap-4 mt-8">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-primary text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
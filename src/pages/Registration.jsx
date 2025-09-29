import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateAccount = () => {
    console.log('Create account clicked:', formData);
  };

  const handleGoogleSignup = () => {
    console.log('Sign up with Google clicked');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          
          <div className="lg:w-1/2 bg-gradient-to-br from-slate-200 via-blue-100 to-slate-150 p-8 lg:p-12 flex items-center justify-center relative">
            <div className="relative">
              
              <div className="relative z-10">
                <div className="w-48 h-80 bg-gray-700 rounded-3xl shadow-2xl transform -rotate-6 relative overflow-hidden">
                  <div className="absolute inset-2 bg-black rounded-2xl"></div>
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-4 right-6 w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              <div className="absolute -left-12 top-8 z-20">
                <div className="w-24 h-20 relative">
                  <div className="w-16 h-12 border-4 border-gray-400 rounded-sm relative">
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-4 border-gray-400 rounded-tl-lg border-r-0 border-b-0"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1 w-4 h-4 border-4 border-gray-400 rounded-full"></div>
                  <div className="absolute -bottom-2 right-1 w-4 h-4 border-4 border-gray-400 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -right-8 bottom-12 flex space-x-2 z-5">
                <div className="w-12 h-16 bg-pink-300 rounded-lg shadow-lg transform rotate-12">
                  <div className="w-8 h-2 bg-pink-400 rounded-full mx-auto mt-2"></div>
                </div>
                <div className="w-10 h-14 bg-purple-300 rounded-lg shadow-lg transform -rotate-6">
                  <div className="w-6 h-2 bg-purple-400 rounded-full mx-auto mt-2"></div>
                </div>
              </div>

              <div className="absolute left-8 bottom-4 z-5">
                <div className="w-8 h-12 bg-blue-300 rounded-lg shadow-lg transform rotate-45">
                  <div className="w-4 h-1 bg-blue-400 rounded-full mx-auto mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12 flex items-center justify-center">
            <div className="w-full max-w-sm">
              
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Create an account
                </h1>
                <p className="text-gray-600 text-sm">
                  Enter your details below
                </p>
              </div>
              <div className="space-y-4">
                
                <div>
                  <input
                    type="text"
                    name="emailOrPhone"
                    placeholder="Email or Phone Number"
                    value={formData.emailOrPhone}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none text-gray-700 placeholder-gray-500 bg-transparent"
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-500 focus:outline-none text-gray-700 placeholder-gray-500 bg-transparent pr-8"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                onClick={handleCreateAccount}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-md transition duration-200 mt-6 mb-4"
              >
                Create Account
              </button>

              <button
                onClick={handleGoogleSignup}
                className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-3 rounded-md transition duration-200 flex items-center justify-center space-x-2 mb-6"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Sign up with Google</span>
              </button>

              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Already have account?{' '}
                  <a href="#" className="text-gray-900 underline hover:text-gray-700 font-medium">
                    Log in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
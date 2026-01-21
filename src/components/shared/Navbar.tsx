"use client"
import React, { useState } from 'react';
import { MapPin, ShoppingCart, User, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LoginForm, SignupForm } from '../auth';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
        <>
            <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center justify-between h-16 font-medium lg:h-20 relative">
                        {/* Mobile User Icon */}
                        <button
                            className="lg:hidden p-2  rounded-lg transition-all duration-300 hover:scale-105 hover:bg-pink-500 cursor-pointer"
                            onClick={() => setIsLoginOpen(true)}
                        >
                            <User className="w-6 h-6 text-gray-900" />
                        </button>
                        <div className="flex items-center gap-2 shrink-0 flex-1 justify-center lg:flex-initial lg:justify-start">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl sm:text-2xl font-bold">🍴</span>
              </div>
              <span className="text-pink-500 text-xl sm:text-2xl font-bold">FoodNest</span>
            </div>

                        {/* Desktop Address */}
                        <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md mx-8 text-gray-900">
                            <MapPin className="w-5 h-5 shrink-0" />
                            <span className="text-sm truncate">Via Decio Filipponi, 1, 00136 Roma RM, Italy</span>
                        </div>

                            {/* Mobile & Desktop Cart Icon */}
                        <button className=" block lg:hidden p-2 hover:bg-gray-50 not-visited:rounded-lg transition-all duration-300 hover:scale-105 relative">
                            <ShoppingCart className="w-6 h-6 text-gray-900" />
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF2B85] text-white text-xs rounded-full flex items-center justify-center">
                                0
                            </span>
                        </button>
                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-3 justify-center">
                        {/* Mobile & Desktop Cart Icon */}
                        <button className="p-2 mr-2 mt-2 hidden lg:block hover:bg-gray-50 not-visited:rounded-lg transition-all duration-300 hover:scale-105 relative">
                            <ShoppingCart className="w-6 h-6 text-gray-900" />
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF2B85] text-white text-xs rounded-full flex items-center justify-center">
                                0
                            </span>
                        </button>    
                            <Button
                                onClick={() => setIsLoginOpen(true)}
                                variant="outline"
                                className="px-6 py-2 cursor-pointer text-gray-900 font-medium hover:bg-[#FF2B85] border-gray-900 hover:text-white hover:scale-105 rounded-lg transition-all duration-300"
                            >
                                Log in
                            </Button>
                            <Button
                                onClick={() => setIsSignupOpen(true)}
                                className="px-6 py-2 bg-[#FF2B85] cursor-pointer text-white font-medium rounded-lg hover:bg-pink-500 hover:scale-105 transition-all whitespace-nowrap duration-300"
                            >
                                Sign Up
                            </Button>
                        </div>

                    </div>

                    {/* Mobile Address */}
                    <div className="lg:hidden flex items-center justify-center gap-2 pb-3 text-gray-900 text-sm">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="truncate">Via Decio Filipponi, 1, 00136 Roma RM, Italy</span>
                    </div>
                </div>
            </nav>

            {/* Login Modal */}
            <LoginForm
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSwitchToSignup={() => setIsSignupOpen(true)}
            />

            {/* Signup Modal */}
            <SignupForm
                isOpen={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
                onSwitchToLogin={() => setIsLoginOpen(true)}
            />
        </>
    );
};

export default Navbar;
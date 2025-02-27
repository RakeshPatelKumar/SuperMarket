// 


import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-800 text-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="./Logo.jpeg"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-200 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Sign in
                        </Link>
                        <NavLink
                            exact
                            to="/mycart"
                            activeClassName="text-orange-400"
                            className="flex items-center text-gray-200 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            <img
                                src="https://th.bing.com/th/id/OIP.9UqfoFXUzuxVO1Hs56PQogHaHa?rs=1&pid=ImgDetMain"
                                className="mr-2 h-6"
                                alt="Cart"
                            />
                            My Cart
                        </NavLink>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="text-orange-400"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    exact
                                    to="/about"
                                    activeClassName="text-orange-400"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    exact
                                    to="/contact"
                                    activeClassName="text-orange-400"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    exact
                                    to="/product"
                                    activeClassName="text-orange-400"
                                    className="block py-2 pr-4 pl-3 duration-200 text-gray-200 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0"
                                >
                                    ProductList
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

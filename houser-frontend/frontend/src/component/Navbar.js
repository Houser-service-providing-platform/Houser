import React from 'react'
import '../../src/App.css';

export default function Navbar() {
    return (
        <div>
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between items-center py-4 px-8 bg-white shadow sm:items-baseline w-full">
        <div className="pb-2">
            <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                ----location----
            </a>
        </div>

        <div className="flex items-center justify-center pb-2">
            <h4>+91 6203035528</h4>
        </div>

        <div className="pb-2">
          <a href="/one" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">One</a>
          <a href="/two" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Two</a>
          <a href="/three" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Three</a>
        </div>
      </nav>

      <nav id="header" className="w-full z-30 text-white bg-indigo-400">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
                <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">
                    <svg className="fill-current text-gray-800 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"></path>
                    </svg>
                    NORDICS
                </a>
            </div>
            <div class="block lg:hidden pr-4">
                <button id="nav-toggle"
                    className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3">
                        <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                            href="#">link</a>
                    </li>
                    <li className="mr-3">
                        <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                            href="#">link</a>
                    </li>
                </ul>
                <button id="navAction"
                    className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Action
                </button>
            </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
        </div>
    )
}

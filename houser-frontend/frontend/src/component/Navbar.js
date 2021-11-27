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
        </div>
    )
}

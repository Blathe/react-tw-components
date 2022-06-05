import React from 'react'
import { Link } from 'react-router-dom'

const linkStyling = "p-2 hover:bg-slate-300 transition-all";

const SideNavbar = () => {
  return (
    <div className="flex flex-col bg-white w-80 h-screen bg-slate-500">
      <div className="mb-12">
        <h1 className="font-bold text-center mt-6 text-lg">react-tw-components</h1>
        <p className="p-2 text-center">Explore react/tailwind css components below</p>
      </div>
        <Link className={linkStyling} to="/">Home</Link>
        <Link className={linkStyling} to="/about">About</Link>
        <Link className={linkStyling} to="/contact">Contact</Link>
    </div>
  )
}

export default SideNavbar
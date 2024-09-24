import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {


  return (
    <div>
      
      <nav className="bg-indigo-900 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-xl font-bold">
          MyApp
        </div>
        <ul className="flex space-x-5">
          <li>
          <Link to='/' className="text-white hover:text-blue-200 hover:text-lg">Home</Link>
          </li>
          <li>
            
            <Link to='/login' className="text-white hover:text-blue-200 hover:text-lg">Login</Link>
          </li>
          <li>
          <Link to='/Signup' className="text-white hover:text-blue-200 hover:text-lg">sign Up</Link>
          </li>
          <li>
          <Link to='/Profile' className="text-white hover:text-blue-200 hover:text-lg">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Nav

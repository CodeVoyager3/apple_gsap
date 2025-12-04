import React from 'react'
import {navLinks} from '../constants/index.js'


function Navbar() {
  
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className='flex-center gap-3'>
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Search" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

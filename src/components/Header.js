import React, { useEffect, useState } from 'react'




export default function Header() {




  const logo = `https://www.pngkit.com/png/detail/78-788100_fire-logo-png-svg-free-download-fire-logo.png`


  return (
    <div>
      <nav className="navbar bg-body-tertiary navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Logo" width="90" className=" rounded-5" />
            <h2 className='fw-bolder text-info-emphasis mt-3'> Unicorn Code Editor</h2>
          </a>

        </div>

      </nav>
    </div>
  )
}

import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-blueColor'>
          <strong>Arch</strong>Terim
        </h1>
      </div>
      <div className='menu flex gap-8'>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Offres</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Entreprises</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>A propos</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Contact</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Connexion</li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Inscription</li>
      </div>
      
    </div>
  )
}

export default NavBar
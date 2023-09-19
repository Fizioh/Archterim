import React from 'react'

import {FcSearch} from 'react-icons/fc'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {MdHomeWork} from 'react-icons/md'
import {BiSolidLocationPlus} from 'react-icons/bi'


const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action="">

        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
          
          <div className='flex gap-2 items-center'>
            <FcSearch className='text-[25px] icon' />
            <input 
              type='text'
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder='Recherche par Mot-clé...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>
          <div className='flex gap-2 items-center'>
            <MdHomeWork className='text-blue-500 text-[25px] icon' />
            <input 
              type='text'
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder='Recherche par Entreprise...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>
          <div className='flex gap-2 items-center'>
            <BiSolidLocationPlus className='text-blue-500 text-[25px] icon' />
            <input 
              type='text'
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder='Recherche par Emplacement...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon' />
          </div>

          <button className='bg-blueColor h-full p-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-500'>Rechercher</button>

        </div>
      </form>

      <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-center gap-2'> 
          <select name="" id="relevance" className='bg-white-rounded-[3px] px-4 py-1'>
            <option value="">Pertinence</option>
            <option value="">Date</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <select name="" id="relevance" className='bg-white-rounded-[3px] px-4 py-1'>
            <option value="">Horaires</option>
            <option value="">Templs Plein</option>
            <option value="">Temps partiel</option>
            <option value="">Tout</option>
          </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <select name="" id="relevance" className='bg-white-rounded-[3px] px-4 py-1'>
            <option value="">Durée</option>
            <option value="">-1 mois</option>
            <option value="">+1 mois</option>
            <option value="">+6 mois</option>
            <option value="">+1 an</option>
            <option value="">Toutes</option>
          </select>
        </div>
        <div className='singleSearch flex items-center gap-2'>
          <select name="" id="relevance" className='bg-white-rounded-[3px] px-4 py-1'>
            <option value="">Télétravail</option>
            <option value="">Télétravail Partiel</option>
            <option value="">Présentiel</option>
            <option value="">Tous</option>
          </select>
          <div className='singleSearch flex items-center gap-2'>
          <select name="" id="relevance" className='bg-white-rounded-[3px] px-4 py-1'>
            <option value="">Niveau</option>
            <option value="">Junior</option>
            <option value="">Confirmé</option>
            <option value="">Senior</option>
            <option value="">Expert</option>
            <option value="">Tous</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Effacer Tout</span>
        </div>
      </div>
    </div>
  )
}

export default Search
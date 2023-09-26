import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo1 from '../../Assets/logo1.png'

const Jobs = () => {
  return (
    <div>
      <div className="py-10 jobContainer flex gap-10 justify-center flex-wrap items-center">
        <div className='group group/item singleJob w-[250px] p-[10px] bg-white rounded-[10px] 
        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>
              Architecte Senior
            </h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive /> 1jour
            </span>
          </span>
          <h6 className='text-[#ccc]'>Paris</h6>
          <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
          Architecte pour travail en équipe sur des projets de réhabilitation (hôtels, SPA, restaurants, bureaux) haut de gamme à Paris.
          </p>
          <div className='company flex items-center gap-2'>
            <img src={logo1} alt="Logo" className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>
            EJ & Associés
            </span>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Jobs
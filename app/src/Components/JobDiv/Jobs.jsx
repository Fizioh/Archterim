import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo1 from '../../Assets/logo1.png'
import moment from 'moment'
import jobsData from '../../../scripts/offres_emploi.json'


const Jobs = () => {
  return (
    <div>
      <div className="py-10 jobContainer flex gap-10 justify-center flex-wrap items-center">
        {jobsData.map((item, index) => { 
      if(item.salaire.libelle){
        return(
            <div key={index} className='group group/item singleJob w-[270px] h-[320px] p-[10px] bg-white rounded-[10px] 
        hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

          <span className='flex justify-between items-center gap-4'>
            <a src={item.contact.urlPostulation} target="_blank">
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>
                {item.appellationlibelle}
              </h1>
            </a>
            <span className='flex items-center text-[#939191] gap-2'>
              <BiTimeFive /> {moment(item.dateCreation).format('DD/MM/YYYY')}
            </span>
          </span>
          <h6 className='text-[#acaaaa]'>{item.lieuTravail.libelle}</h6>
          <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white overflow-hidden truncate w-32'>
          {item.description}
          </p>
          <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white overflow-hidden w-32 truncate'>
          {item.salaire.libelle}
          </p>
          <div className='company flex items-center gap-2'>
            <img src={logo1} alt="Logo" className='w-[10%]' />
            <span className='text-[14px] py-[1rem] block group-hover:text-white'>
            {item.entreprise.nom}
            </span>

          </div>
        </div>)}
          
        })}
      </div>

    </div>
  )
}

export default Jobs
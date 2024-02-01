import React from 'react'
import {socialMedia} from '../constants'

const Social = () => {
  return (
    <div
    className='w-full flex justify-center p-auto m-auto'
    >
    <div className='w-1/5 flex justify-between'>
    {socialMedia.map((social,index)=>(
      <div key={index} className='w-[3rem] h-[3rem]'>
        <img src={social.image} alt={social.alt} className='w-full h-full object-contain cursor-pointer' onClick={()=> window.open(social.link, "_blank")} />
      </div>
    ))}
    </div>
    </div>
  )
}

export default Social
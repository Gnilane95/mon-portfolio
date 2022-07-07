import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
  return (
    <div className='flex justify-center items-center text-accent-lightest'>
        <p className='pr-2'>Copyright</p>
        <AiOutlineCopyright/>
        <p>2022 All rights reserved</p>
    </div>
  )
}

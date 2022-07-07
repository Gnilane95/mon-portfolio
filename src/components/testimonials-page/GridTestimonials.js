import React from 'react'
import "react-circular-progressbar/dist/styles.css";

export default function GridTestimonials({ src, title, description, name }) {
  return (
    <div className=" bg-white mb-10">
      <div className="ml-4  px-9 py-5">
        <h2 className="text-primary-dark font-bold text-md">{title}</h2>
        <p className="text-accent-dark font-medium text-sm pt-5">{description}</p>
      </div>
      <div className="px-14 md:px-9 py-5 pt-5">
        <img src={src} alt="" className='rounded-full'/>
        <div className="flex font-medium text-sm pt-3">
          <p className='text-primary-light'> {name} </p>
          <p className="pl-2 text-accent-dark">Customer</p>
        </div>
      </div>
    </div>
  );
}

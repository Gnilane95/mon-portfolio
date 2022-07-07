import React from 'react'
import "react-circular-progressbar/dist/styles.css";

export default function GridService({src, title, description}) {
  return (
    <div className='flex mb-9'>
      <div>
        <img src={src} alt="" className='w-64'/>
      </div>
      <div className='md:ml-4 ml-12'>
        <h2 className="text-primary-dark font-bold text-lg">{title}</h2>
        <p className="text-accent-dark font-medium text-sm">{description}</p>
      </div>
    </div>
  );
}

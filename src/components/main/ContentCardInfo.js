import React from 'react'

export default function ContentCardInfo({src, label, title}) {
  return (
    <div>
      <div className="flex items-center pt-4">
        <img src={src} alt="" />
        <p className="text-md md:text-sm pl-4">
          <span className="text-accent-lightest">{label} </span>
          <span className="text-accent-light">{title}</span>
        </p>
      </div>
    </div>
  );
}

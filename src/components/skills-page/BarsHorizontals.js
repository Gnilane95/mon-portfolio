import React from 'react'

export default function BarsHorizontals({titre, percent, bg}) {
  return (
    <div>
      <div className=" mb-1 items-center">
        <span className="text-xs font-medium text-primary-dark pr-40">{titre}</span>
        <span className="text-xs font-medium text-primary-dark">
          {`${percent}`}
        </span>
      </div>
      <div className="w-full bg-white h-1 mb-5">
        <div className={`${bg} h-1`} style={{ width: percent }}></div>
      </div>
    </div>
  );
}

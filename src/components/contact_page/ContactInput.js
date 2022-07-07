import React from 'react'

export default function ContactInput() {
  return (
    <div>
        <input
                type="email"
                id="email"
                className="bg-gray-50 border border-t-2 border-l-2 italic border-primary-dark text-gray-900 text-sm rounded-lg  w-full p-2.5 mr-5"
                placeholder="Name"
                required=""
              />
    </div>
  )
}

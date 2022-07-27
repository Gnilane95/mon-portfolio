import React from 'react'
import { Link,  } from "react-router-dom";


export default function NavItems({ linkItem, titleItem}) {

  return (
    <li >
      <Link
        
        to={linkItem}
        className=" md:border-l border-l-accent-dark md:py-4 md:pl-3 md:px-5 md:text-white md:bg-primary-dark  md:hover:bg-primary-light hover:text-primary-light"
        aria-current="page"
      >
        {titleItem}
      </Link>
    </li>
  );
}

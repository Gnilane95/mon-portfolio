import React from 'react'
import { Link,  } from "react-router-dom";

export default function NavItems({ linkItem, titleItem }) {

  return (
    <li>
      <Link
        to={linkItem}
        className=" md:border-l border-l-accent-dark block md:py-4 py-3 pr-4 md:pl-3 pl-12 md:px-5 md:text-white text-primary-dark md:bg-primary-dark bg-white md:hover:bg-primary-light hover:text-primary-light"
        aria-current="page"
      >
        {titleItem}
      </Link>
    </li>
  );
}

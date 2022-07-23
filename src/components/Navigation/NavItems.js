import React from 'react'
import { Link,  } from "react-router-dom";

export default function NavItems({ linkItem, titleItem }) {

  return (
    <li>
      <Link
        to={linkItem}
        className=" border-l border-l-accent-dark block py-4 pr-4 pl-3 md:px-5 text-white bg-primary-dark hover:bg-primary-light active:bg-primary-light"
        aria-current="page"
      >
        {titleItem}
      </Link>
    </li>
  );
}

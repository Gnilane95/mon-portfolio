import React from 'react'
import ContentCardInfo from './ContentCardInfo';
import { FaArrowDown } from "react-icons/fa";
import {
  GrGooglePlus,
  GrPinterest,
  GrFacebookOption,
  GrTwitter,
} from "react-icons/gr";

export default function CardLeft() {
  return (
    <div className="md:flex  lg:grid mt-72 md:mt-0">
      <div className='relative'>
        <img
          src="img/xsmith.jpg.pagespeed.ic.-fvXWI23nq.webp"
          alt=""
          className="md:w-auto lg:w-96  relative "
        />
        <div className='lg:hidden absolute bottom-10 left-16 flex'>
          <p className=' bg-primary-light py-5 px-10 text-lg text-white'> Actuellement Disponible</p>
          <FaArrowDown className='bg-primary-dark text-white w-20 h-20 py-5'/>
        </div>
      </div>
      
      <div className=" bg-primary-dark  py-16 md:p-3 md:w-auto lg:w-96">
        <p className="capitalize text-3xl md:text-xl font-semibold text-white  text-center">
          General information
        </p>
        <div className='px-24 md:px-10'>
          <ContentCardInfo
            src=" img/téléchargement (4).webp"
            label="Name :"
            title="Agathe DIOUF"
          />
          <ContentCardInfo
            src="img/téléchargement (1).webp"
            label="Location :"
            title="Rouen"
          />
          <ContentCardInfo
            src=" img/téléchargement (17).webp"
            label="agathegnilanediouf@gmail.com"
            title=""
          />
          <ContentCardInfo
            src=" img/téléchargement (14).webp"
            label="+33 07 72 14 80 41"
            title=""
          />
          <ContentCardInfo
            src=" img/téléchargement (3).webp"
            label="www.linkedin.com/in/agathe-diouf/"
            title=""
          />
        </div>
        <div className=" flex justify-center pt-3 text-accent-lightest gap-7">
          <GrGooglePlus />
          <GrPinterest />
          <GrFacebookOption />
          <GrTwitter />
        </div>
      </div>
    </div>
  );
}

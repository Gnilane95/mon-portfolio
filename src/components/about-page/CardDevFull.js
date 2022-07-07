import React from 'react'
import ProgressBars from './ProgressBars'

export default function CardRight() {
  const percentage = [
    {
      percentage: 75,
      title: "Intuition",
      id: 1,
    },
    {
      percentage: 83,
      title: "Créativity",
      id: 2,
    },
    {
      percentage: 25,
      title: "Pure Luck",
      id: 3,
    },
    {
      percentage: 95,
      title: "Awesomeness",
      id: 4,
    },
  ];
  return (
    <div className="px-10 md:px-5 py-24 md:py-10">
      <span className="text-accent-dark text-xl font-medium leading-none">
        Développeur full stack
        <h1 className="text-5xl md:text-xxl text-primary-dark font-black">
          Agathe Diouf
        </h1>
      </span>
      <div className="md:pr-32">
        <h2 className="pt-20 md:pt-7 text-xl text-primary-dark font-bold md:font-semibold">
          Description
        </h2>
        <p className="pt-20 md:pt-7  text-accent-dark font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab
          aspernatur eligendi quisquam praesentium magni maxime modi, asperiores
          officiis, alias, recusandae a. Corporis animi, tempora assumenda
          magnam doloribus et veritatis dolorum reprehenderit molestias cum
          facere sint odio ullam error. Eum aliquid quam vel neque dolores. Odit
          excepturi deserunt incidunt quae non praesentium in sapiente maiores
          possimus? Beatae aut sed nobis.
        </p>
      </div>
      <div className=" px-44 space-y-16 md:space-y-0 md:px-5 pt-10 md:pt-7 md:flex md:justify-center md:gap-9 md:items-center">
        {percentage.map((bar) => (
          <ProgressBars
            percentage={bar.percentage}
            title={bar.title}
            key={bar.id}
          />
        ))}
      </div>
    </div>
  );
}

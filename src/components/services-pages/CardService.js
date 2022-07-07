import React from 'react'
import GridService from './GridService';

export default function CardService() {
  const service = [
    {
      src: "img/téléchargement (6).webp",
      title: "Développement de site web",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa.",
      id: 1,
    },
    {
      src: "img/téléchargement (7).webp",
      title: "Maintenance",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa, laboriosam fugiat laborum officiis expedita dolor nostrum eos! Asperiores consectetur ullam rem sit libero.",
      id: 2,
    },
    {
      src: "img/téléchargement (8).webp",
      title: "Référencement CEO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa.",
      id: 3,
    },
  ];
  return (
    <div className="px-24 py-10">
      <span className="text-accent-dark text-lg font-medium leading-none">
        Ce que je vous offre
        <h1 className="text-4xl md:text-xxl text-primary-dark font-black">Mes services</h1>
      </span>

      <div className="pt-16 md:pt-28 md:grid md:grid-cols-3 md:gap-5">
        {service.map((services) => (
          <GridService
            src={services.src}
            title={services.title}
            description={services.description}
            key={services.id}
          />
        ))}
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-primary-light hover:bg-primary-dark text-sm px-10 mt-20 py-2.5 mr-2 mb-2 ">
          Contactez-moi
        </button>
      </div>
    </div>
  );
}

import React from 'react'
import GridTestimonials from './GridTestimonials';

export default function CardTestimonials() {
  const testimonials = [
    {
      src: "img/téléchargement (18).webp",
      title: "Rapide et efficace",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa.",
      name: "Diane Smith",
      id: 1,
    },
    {
      src: "img/téléchargement (19).webp",
      title: "Fort de proposition",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa.",
      name: "Diane Smith",
      id: 2,
    },
    {
      src: "img/téléchargement (20).webp",
      title: "Agréable et proffessionel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa.",
      name: "Diane Smith",
      id: 3,
    },
  ];
  return (
    <div className="px-20 py-10">
      <span className="text-accent-dark text-lg font-medium leading-none">
        Ce que les gens disent
        <h1 className="text-4xl md:text-xxl text-primary-dark font-black">Témoignages</h1>
      </span>

      <div className="pt-28 md:grid md:grid-cols-3 md:gap-5 ">
        {testimonials.map((testimonial) => (
          <GridTestimonials
            src={testimonial.src}
            title={testimonial.title}
            description={testimonial.description}
            name={testimonial.name}
            key={testimonial.id}
          />
        ))}
      </div>
    </div>
  );
}

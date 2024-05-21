import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
        id: 1,
        title: "Gear Up",
        description: "Gear Up is a car rental web application that allows users to create an account, rent cars from providers, and checkout while viewing their rental history. Users also have the option to register as providers, offering their cars for rent with detailed information.",
        tech:"React, TailwindCSS, TypeScript, JavaScript, NodeJS, ExpressJS, MongoDB, Stripe API.",
        image:"/images/projects/1.jpg",
        gitUrl: "https://github.com/2110503TACEDT66/cedt-se-project-borisat_yaeng_tua",
        previewUrl: "https://cedt-se-project-frontend.vercel.app/"
    }
]

export default function ProjectSection() {
  return (
    <div className='pt-10'>
        <h2 className='text-center text-4xl font-bold text-black mt-4'>
            My Projects
        </h2>
        <div className='flex justify-center gap-8 md:gap-12 text-black'>
            {projectsData.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
        </div>
    </div>
  );
}
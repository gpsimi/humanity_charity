import { ProjectHero, ProjectList } from '@/components/sections/ProjectSection';
import React from 'react'

const OurProjects = () => {
  return (
    <section className="flex size-full flex-col">
      <ProjectHero />
      <ProjectList />
    </section>
  )
}

export default OurProjects;

import { BlogHero, BlogLists } from '@/components/sections/BlogSection'
import React from 'react'

const Blog = () => {
  return (
    <section className="flex size-full flex-col">
      <BlogHero />
      <BlogLists />

      <h1></h1>
    </section>
  )
}

export default Blog

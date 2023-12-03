import AnimatedImg from '@/components/AnimatedImg'
import ListProjects from '@/components/ListProjects'
import PageIntro from '@/components/PageIntro'
import React from 'react'

function index() {
  return (
    <>
     <PageIntro centered={true} eyebrow="Our work" title="Proven solutions for real-world problems.">
        <p>
        We believe in efficiency and maximizing our resources to provide the best value to our clients. The primary way we do that is by re-using the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <AnimatedImg />
      <ListProjects />
    </>
  )
}

export default index
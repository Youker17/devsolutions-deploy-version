import Button from '@/components/Button'
import React from 'react'

function index() {
  return (  
<section>
  <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
      <h1 className="mb-4 text-4xl font-bold md:text-6xl">404 Error</h1>
      <p className="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-base md:mb-6 lg:mb-8">Commodo, consequat turpis placerat ultrices sapien, tortor tincidunt. Sit quisque est metus auctor sed turpis lectus quis.</p>
        <Button href={"/contact"} invert={false} className={" hidden sm:flex"}>
                Back Home
        </Button>
    </div>
  </div>
</section>
  )
}

export default index
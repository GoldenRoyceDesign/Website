import React from 'react'
import { itServiceHero } from '../../assets'

const ITServiceHead = () => {
  
  return (
    <main className="pt-20">
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
            <h1 className=" text-4xl ">
            IT Services & Solutions
            </h1>
            <p className="">
            Elevate your business with our comprehensive IT solutions, tailored for all - small ventures, startups, and enterprises. From optimizing infrastructure to boosting productivity, we're your partners in IT excellence.
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto max-w-xs p-4"
          >
            <img src={itServiceHero} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default ITServiceHead
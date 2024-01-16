import React from 'react'

const Card2 = ({img, title, content}) => {
  return (
    <section className="bg-primary text-white pb-12">
    <div className="container ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div data-aos="zoom-in">
          <img
            src={img}
            alt=""
            className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
          />
        </div>
        <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="uppercase text-5xl"
          >
            {title}
          </h1>
          <p data-aos="fade-up" data-aos-delay="700">
            {content}
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Card2
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from 'react'
import Card from "@/components/Card"
import { cardData, CardData } from "@/components/cardData"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import localFont from 'next/font/local';

const regularFont = localFont({
  src: '../fonts/SaansTRIAL-Regular.ttf',
  style: 'normal',
})


const Home = () => {
  let sliderRef = useRef<Slider>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#F8F7F3] relative">
      <div className=" px-12 pt-12 pb-24 mx-auto max-w-screen-xl relative">
        <div className="md:flex md:-mx-6">
          <div className="mt-8 md:w-1/3 lg:w-1/4 lg:mt-0 lg:border-r-2">
            <div>
              <div>
                <p className={`text-[#4A5FF7] capitalize text-xl leading-[27px]`}>COMPETENCIES</p>
                <h2 className={`block mt-2 text-black text-5xl leading-[1.15em]`}>
                  Future-proof your workforce
                </h2>
              </div>
              <div className='pt-4 text-start'>
                <p className={`${regularFont.className} leading-[1.35em] tracking-wide text-lg text-black max-w-64`}>Stay ahead of emerging technologies and trends</p>
              </div>

            </div>
          </div>
          <div className="md:w-2/3 lg:w-3/4 lg:px-4 px-2 py-4 lg:py-0">
            <div className="grid grid-cols-1 gap-4 justify-items-stretch">
              <Slider
                ref={sliderRef}
                {...settings}
              >
                {cardData.map((card: CardData) => (
                  <div key={card.key} className="px-2">
                    <Card
                      imgUrl={card.imgUrl}
                      title={card.title}
                      description={card.description}
                      tags={card.tags}
                    />
                  </div>
                ))}

              </Slider>
            </div>
            <div className={`absolute bottom-[3rem] right-[4.5rem] flex ${regularFont.className}`} >
              <button className="button rounded-full bg-[#4A5FF7] p-2 " onClick={previous}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="button ml-4 rounded-full bg-[#4A5FF7] p-2" onClick={next}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section >
  )
}

export default Home

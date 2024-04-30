/* eslint-disable @next/next/no-img-element */
"use client";
import React from 'react'
import Card from "@/components/Card"
import { cardData, CardData } from "@/components/cardData"
import localFont from 'next/font/local';

const regularFont = localFont({
  src: '../fonts/SaansTRIAL-Regular.ttf',
  style: 'normal',
})

const Home = () => {

  return (
    <section className="bg-[#F8F7F3]">
      <div className="container px-12 py-12 mx-auto max-w-screen-xl">
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
            <div className="flex">
              {cardData.map((card: CardData) => (
                <div key={card.key} className="px-2 flex">
                  <Card
                    imgUrl={card.imgUrl}
                    title={card.title}
                    description={card.description}
                    tags={card.tags}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}

export default Home

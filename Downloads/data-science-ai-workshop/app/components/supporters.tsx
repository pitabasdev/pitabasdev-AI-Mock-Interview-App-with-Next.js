"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Slider from "react-slick"

const supporters = [
  {
    name: "Centurion University of Technology",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images__1_-removebg-preview-lGhTXd7GWN0dorzpTLzpPlpf4D2Cf5.png",
  },
  {
    name: "DevsIndia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dilogo-CoWW6xX4hFOxoUyIBacsIEY04XUaGh.webp",
  },
  {
    name: "Smart Agronni",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smart%20agronni%20final%205-ksnB51Ms5GyFQempM2C9gRl6MxWvw5.png",
  },
]

export default function Supporters() {
  const [showCarousel, setShowCarousel] = useState(false)

  useEffect(() => {
    setShowCarousel(true)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Supported By</h2>
      {showCarousel ? (
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {supporters.map((supporter, index) => (
              <div key={index} className="px-4">
                <div className="bg-white p-6 rounded-lg shadow-md h-40 flex flex-col justify-center">
                  <div className="relative h-24">
                    <Image
                      src={supporter.image || "/placeholder.svg"}
                      alt={supporter.name}
                      fill
                      className="mx-auto object-contain"
                      priority={index === 0}
                    />
                  </div>
                  <p className="text-center text-sm font-medium mt-4">{supporter.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="flex justify-center items-center h-32">
          <p>Loading...</p>
        </div>
      )}
    </section>
  )
}


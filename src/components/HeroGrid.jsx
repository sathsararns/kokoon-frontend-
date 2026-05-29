"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import hero_1 from "@/assets/images/hero_1.png"
import hero_2 from "@/assets/images/hero_2.jpg"
import hero3 from "@/assets/images/hero3.jpg"

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function HeroGrid() {
  const slides = [
    {
      subtitle: "YOUR TRUSTED HUB FOR LOCATION-AWARE PROFESSIONALS",
      title: "FIND TRUSTED LOCAL PROFESSIONALS",
      description: "Discover trusted and experienced local experts for any job. Check verified user reviews and book certified professionals with ease. We bring reliable and top-rated services right to your doorstep.",
      buttonText: "FIND SERVICES NOW",
      image: hero_1,
    },
    {
      subtitle: "LBS DISTRIBUTION SOLUTIONS",
      title: "PRECIOUS LOCATION SERVICES",
      description: "Connect your business  to location intelligence. Distribute and integrate high-accuracy map data and services for precise, real-0time insights across your network.",
      buttonText: "FIND SERVICES NOW",
      image: hero_2,
    },
    {
      subtitle: "AI-POWERED ASSISTANT",
      title: "CHATBOT FOR SMART SERVICE DISPATCH",
      description: "Get instant help finding the right local professional. Our intelligent chatbot understands your location, service needs, and availability to connect you with trusted experts in seconds — anytime, anywhere.",
      buttonText: "FIND SERVICES NOW",
      image: hero_3,
    },
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row w-full">
              {/* Image Section */}
              <div className="relative w-full lg:w-1/2 bg-gray-50 flex items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 order-1 lg:order-2">
                <img
                  src={slide.image}
                  alt="Interior design showcase"
                  className={`w-full h-auto object-contain px-4 sm:px-6 md:px-8 ${
                    index === 1 
                      ? "max-h-80 sm:max-h-[400px] md:max-h-[500px] lg:max-h-[500px]" 
                      : "max-h-96 sm:max-h-[450px] md:max-h-[550px] lg:max-h-[500px]"
                  }`}
                />

                {/* Get Lifetime Access Button - Top Right */}
                <button className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 bg-[#0ca59d] hover:bg-[#0a8a84] text-white font-bold py-2 px-4 sm:px-6 text-xs sm:text-sm transition-colors duration-200">
                  GET LIFETIME
                  <br className="sm:hidden" /> ACCESS
                </button>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center order-2 lg:order-1">
                <div className="max-w-2xl w-full lg:text-left text-center">
                  {/* Subtitle */}
                  <div className="text-xs sm:text-sm font-semibold text-gray-600 tracking-widest uppercase mb-4 sm:mb-6">
                    {slide.subtitle}
                  </div>

                  {/* Main Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black leading-tight mb-6 sm:mb-8 text-balance">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10 md:mb-12">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <button className="bg-[#0ca59d] hover:bg-[#0a8a84] text-white font-bold py-3 px-8 sm:px-10 md:px-12 text-sm sm:text-base transition-colors duration-200 mb-12 sm:mb-16">
                    {slide.buttonText}
                  </button>

                  {/* Slide Indicators */}
                  <div className="flex gap-2 lg:justify-start justify-center">
                    {slides.map((_, slideIndex) => (
                      <button
                        key={slideIndex}
                        className={`h-2 rounded-full transition-all ${
                          slideIndex === index ? "bg-[#0ca59d] w-8" : "bg-gray-300 w-2"
                        }`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
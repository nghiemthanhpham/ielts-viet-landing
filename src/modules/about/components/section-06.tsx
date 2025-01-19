"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Image from "next/image";
import '../../../styles/contact.css'
import { DATA } from "@/utils/data";

const images = DATA.REAL_IMAGES

export default function Section06() {

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const getFullSlides = (images: any, perSlide = 4) => {
    const result = [];
    const totalImages = images.length;
    let index = 0;
    while (result.length < Math.ceil(totalImages / perSlide)) {
      const slide = [];
      for (let i = 0; i < perSlide; i++) {
        slide.push(images[index % totalImages]);
        index++;
      }
      result.push(slide);
    }
    return result;
  };

  const slides = getFullSlides(images);

  useEffect(() => {
    if (isGalleryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isGalleryOpen]);

  const openGallery = (index: any) => {
    setStartIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <main className="flex flex-col items-center justify-between mb-8">
      <div className="text-center mb-10 mt-8">
        <p className="text-[rgb(var(--secondary-rgb))] text-lg font-semibold mb-3">
          Our Reality
        </p>
        <div className="relative inline-block">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Hình ảnh thực tế
          </h2>
          <div className="absolute top-1/2 right-0 w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
        </div>
      </div>
      {!isGalleryOpen ? (
        <div className="w-full max-w-screen-xl h-full">
          <Swiper
            navigation
            pagination={{
              clickable: true,
            }}
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            resistanceRatio={0}
          >
            {slides?.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-rows-12 gap-2 h-full">
                  <div className={`grid grid-cols-12 gap-2 ${index % 2 === 0 ? "row-span-6" : "row-span-7"}`}>
                    <div className="col-span-7 flex justify-center items-center relative group"
                      onClick={() => openGallery(slide[0]?.id - 1)}
                    >
                      {slide[0] && (
                        <>
                          <Image
                            alt={`Photo ${slide[0]?.id}`}
                            className="w-full h-full rounded-lg shadow-lg brightness-95 transition-transform duration-200 object-cover"
                            src={slide[0]?.thumbnail}
                            width={1000}
                            height={100}
                            sizes="(max-width: 640px) 100vw,
                                   (max-width: 1024px) 50vw,
                                   (max-width: 1280px) 33vw,
                                   25vw"
                          />
                          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
                        </>
                      )}
                    </div>
                    <div className="col-span-5 flex justify-center items-center relative group"
                      onClick={() => openGallery(slide[1]?.id - 1)}
                    >
                      {slide[1] && (
                        <>
                          <Image
                            alt={`Photo ${slide[1]?.id}`}
                            className="w-full h-full rounded-lg shadow-lg brightness-95 transition-transform duration-200 object-cover"
                            src={slide[1]?.thumbnail}
                            width={1000}
                            height={1000}
                            sizes="(max-width: 640px) 100vw,
                                   (max-width: 1024px) 50vw,
                                   (max-width: 1280px) 33vw,
                                   25vw"
                          />
                          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className={`grid grid-cols-12 gap-2 ${index % 2 === 0 ? "row-span-7" : "row-span-6"}`}>
                    <div className="col-span-5 flex justify-center items-center relative group"
                      onClick={() => openGallery(slide[2]?.id - 1)}
                    >
                      {slide[2] && (
                        <>
                          <Image
                            alt={`Photo ${slide[2]?.id}`}
                            className="w-full h-full rounded-lg shadow-lg brightness-95 transition-transform duration-200 object-cover"
                            src={slide[2]?.thumbnail}
                            width={1000}
                            height={1000}
                            sizes="(max-width: 640px) 100vw,
                                   (max-width: 1024px) 50vw,
                                   (max-width: 1280px) 33vw,
                                   25vw"
                          />
                          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
                        </>
                      )}
                    </div>
                    <div className="col-span-7 flex justify-center items-center relative group"
                      onClick={() => openGallery(slide[3]?.id - 1)}
                    >
                      {slide[3] && (
                        <>
                          <Image
                            alt={`Photo ${slide[3]?.id}`}
                            className="w-full h-full rounded-lg shadow-lg brightness-95 transition-transform duration-200 object-cover"
                            src={slide[3]?.thumbnail}
                            width={1000}
                            height={1000}
                            sizes="(max-width: 640px) 100vw,
                                   (max-width: 1024px) 50vw,
                                   (max-width: 1280px) 33vw,
                                   25vw"
                          />
                          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 bg-[rgb(var(--secondary-rgb))] text-white px-4 py-2 rounded-md shadow-lg hover:bg-[rgb(var(--secondary-rgb))] transition z-50"
            onClick={closeGallery}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ImageGallery
            items={images?.map((image) => ({
              original: `${image?.thumbnail}`,
              thumbnail: image?.thumbnail,
              description: image?.description,
            }))}
            startIndex={startIndex}
            showFullscreenButton={true}
            showPlayButton={false}
            onSlide={(index) => setStartIndex(index)}
          />
        </div>
      )}
    </main>
  );
}

'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, UserRound } from 'lucide-react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Calendar } from 'lucide-react';
import "swiper/css";
import { HELPER } from '@/utils/helper';
import { ROUTES } from '@/utils/route';
import { DATA } from '@/utils/data';
import { IMAGES } from '@/utils/image';
import { Button } from '../ui/button';

const BlogCard = ({ id, image, title, excerpt, date, author, isMain = false }: any) => (
  <Card onClick={() => window.location.href = `${ROUTES.BLOG}/${id}`} className={`cursor-pointer overflow-hidden ${isMain ? 'mb-4' : 'flex items-center gap-4 mb-4'}`}>
    <div className={`${isMain ? 'w-full' : 'w-24 h-28 flex-shrink-0'}`}>
      <Image
        src={image}
        alt={title}
        className={`w-full ${isMain ? 'h-48' : 'h-28'} object-cover`}
        width={200}
        height={200}
        priority
      />
    </div>
    <div className={`${isMain ? 'p-4' : 'py-2 pr-4'}`}>
      <h3 className={`font-semibold line-clamp-2 text-navy-900 ${isMain ? 'text-xl mb-2' : 'text-sm mb-2'}`}>
        {title}
      </h3>
      <p className="text-gray-600 text-xs mb-2 line-clamp-2">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500 gap-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <UserRound className="w-4 h-4" />
          <span>{author}</span>
        </div>
      </div>
    </div>
  </Card>
);

const ProductCard = (
  {
    image,
    title,
    price,
    levelStart,
    levelEnd,
    duration,
    commitment,
  }: any) => (
  <Card className="bg-white h-full rounded-lg overflow-hidden">
    <div className="relative">
      {/* {hot && (
        <div className="absolute top-2 left-2 bg-[rgb(var(--primary-rgb))] text-white px-2 py-1 rounded-md text-sm">
          Bán chạy
        </div>
      )} */}
      <Image src={image} alt={title} className="w-full h-full object-contain" width={1000} height={1000} priority />
    </div>
    <div className="flex flex-col justify-between p-4">
      <div className="flex justify-center font-bold py-4 border-b-2 hover:text-[rgb(var(--secondary-rgb))] cursor-pointer">{title}</div>
      <div className="flex flex-col lg:flex-row justify-center items-stretch">
        <div className="flex flex-col justify-around text-sm mt-2 lg:px-2 lg:border-r-2 lg:pr-5">
          <div className='font-bold text-[rgb(var(--secondary-rgb))] text-center'>{HELPER.formatVND(price)}</div>
          <div className='text-center'>{duration}</div>
        </div>
        <div className="flex flex-col justify-around text-sm mt-2 lg:px-2 lg:pl-5">
          <div className=''>Đầu vào: {levelStart}</div>
          <div className=''>Đầu ra: {levelEnd}</div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className="text-sm flex flex-col items-center py-2 w-full lg:w-4/5">
          <div className="text-[rgb(var(--secondary-rgb))] font-medium flex justify-self-center">★ Cam kết đầu ra</div>
          {commitment?.map((c4c: any, index: number) => (
            <div key={index} className="flex justify-self-center text-center">{c4c}</div>
          ))}
        </div>
      </div>
      <button className="mt-5 px-4 py-2 bg-[rgb(var(--secondary-rgb))] text-white font-semibold rounded-full">Tìm hiểu thêm</button>
    </div>
  </Card>
);

const MainProductCard = (
  {
    image,
    title,
    price,
    duration,
    commitment,
  }: any) => (
  <div className="grid grid-rows-2 lg:grid-cols-12 gap-6 rounded-lg overflow-hidden border border-dashed border-[rgb(var(--secondary-rgb))] p-4">
    <Image
      src={image}
      alt="alt"
      className="row-span-6 lg:col-span-6 w-full h-full object-cover rounded-lg"
      width={1000}
      height={1000}
      priority />
    <div className="row-span-6 lg:col-span-6 text-left flex flex-col justify-around mt-4">
      <div>
        <h3 className="text-xl font-extrabold text-gray-800">{title}</h3>
        <div className="flex justify-start items-center gap-2 my-4">
          <p className="text-[rgb(var(--secondary-rgb))] font-bold text-lg">{HELPER.formatVND(price)}</p>
          <p className="text-gray-500 text-sm">{duration}</p>
        </div>
        <ul className="mt-2 text-gray-700 text-sm lg:text-base space-y-1">
          {commitment?.map((tg: any, index: number) => (
            <li className='grid grid-cols-12' key={index}>
              <Check color='#FA812F' className='col-span-1' />
              <div className='col-span-11 ml-2'>
                {tg}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Button
          className="w-full md:w/1-3 lg:w-6/12 bg-[rgb(var(--secondary-rgb))] hover:bg-[#6B3410] text-white mt-4 rounded-full">
          Đăng ký ngay
        </Button>
      </div>
    </div>
  </div>
);

const CategoryCard = ({ title, isSelected, onClick }: any) => (
  <div className={`border border-gray-300 border-dashed rounded-lg cursor-pointer ${isSelected ? 'bg-[rgb(var(--secondary-rgb))] text-white' : ''
    }`}
    onClick={onClick}>
    <div className="w-28 lg:w-60 rounded-lg flex-1 p-4 flex flex-col items-center justify-center space-y-2 hover:bg-[rgb(var(--secondary-rgb))] hover:text-white">
      {/* {icon} */}
      <span className="text-xs lg:text-lg">{title}</span>
    </div>
  </div>
);

export const GlobalComponent = {
  BlogCard,
  ProductCard,
  CategoryCard,
  MainProductCard
}

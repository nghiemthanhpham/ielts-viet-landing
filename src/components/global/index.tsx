'use client'

import React from 'react';
import { Card } from '@/components/ui/card';
import { UserRound } from 'lucide-react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Calendar } from 'lucide-react';
import "swiper/css";
import { HELPER } from '@/utils/helper';
import { ROUTES } from '@/utils/route';

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
    hot,
    sold,
  }: any) => (
  <Card className="bg-white h-full rounded-lg overflow-hidden">
    <div className="relative">
      {hot && (
        <div className="absolute top-2 left-2 bg-[rgb(var(--primary-rgb))] text-white px-2 py-1 rounded-md text-sm">
          Bán chạy
        </div>
      )}
      <Image src={image} alt={title} className="w-full h-48 object-cover" width={200} height={200} priority />
    </div>
    <div className="flex flex-col justify-between p-4">
      <div className="flex items-center space-x-2">
        <span className="text-xs lg:text-lg font-bold text-black">{HELPER.formatVND(price)}</span>
      </div>
      <h3 className="text-xs lg:text-lg font-medium text-gray-900 line-clamp-2 mt-2">{title}</h3>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-2">({sold} đã bán)</span>
      </div>
    </div>
  </Card>
);

const CategoryCard = ({ title, icon }: any) => (
  <div className="w-28 lg:w-60 flex-1 border border-gray-300 border-dashed rounded-lg p-4 flex flex-col items-center justify-center space-y-2">
    {icon}
    <span className="text-xs lg:text-lg">{title}</span>
  </div>
);

export const GlobalComponent = {
  BlogCard,
  ProductCard,
  CategoryCard
}

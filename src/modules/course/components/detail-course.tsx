'use client'

import { IMAGES } from "@/utils/images";
import { CircleCheckBig, Trophy } from "lucide-react";
import Image from "next/image";

interface CourseDetails {
  title: string;
  startLevel: string;
  endLevel: string;
  guarantee: string;
  method: string;
  duration: string;
  totalHours: string;
  price: string;
  monthlyPayment: string;
  description: string;
  imageUrl: string;
}


export default function CourseDetail(
  //   {
  //   title,
  //   startLevel,
  //   endLevel,
  //   guarantee,
  //   method,
  //   duration,
  //   totalHours,
  //   price,
  //   monthlyPayment,
  //   description,
  //   imageUrl,
  // }: CourseDetails
) {
  return (
    <div className="w-full mx-auto p-6">
      <div className="grid md:grid-cols-12 gap-8 items-start">
        {/* Course Image */}
        <div className="relative col-span-5 h-[400px] rounded-lg overflow-hidden">
          <Image
            src={IMAGES.LOGO}
            alt="logo"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-6 col-span-7">
          <h1 className="text-3xl font-bold text-gray-900">Khoá học IELTS Foundation</h1>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-[rgb(var(--secondary-rgb))]" />
              <span className="font-semibold">Đầu vào: 3.5 - 4.0</span>
              <Trophy className="w-5 h-5 text-[rgb(var(--secondary-rgb))] ml-4" />
              <span className="font-semibold">Đầu ra: 4.5+</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-[rgb(var(--secondary-rgb))]" />
              <span className="font-semibold">Cam kết đầu ra / học lại miễn phí</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-5 h-5 text-[rgb(var(--secondary-rgb))]" />
              <span className="font-semibold">Phương pháp Total Immersion, học nhanh hơn 40%</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <CircleCheckBig size={20} className="text-[rgb(var(--secondary-rgb))]" />
              <span>Thời gian: 1.5 giờ / buổi</span>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheckBig size={20} className="text-[rgb(var(--secondary-rgb))]" />
              <span>Thời lượng: 36 giờ (8 tuần)</span>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheckBig size={20} className="text-[rgb(var(--secondary-rgb))]" />
              <span>Học phí: 9.889.000 đ</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-3">Mục tiêu khóa học</h2>
            <p className="text-gray-600 leading-relaxed">Khóa học Pre IELTS là sự tiếp nối của Foundation, cung cấp các kiến thức nền tảng cho kỳ thi IELTS. Được thiết kế dành riêng cho các bạn chưa tự tin sử dụng tiếng anh trong môi trường học thuật và giao tiếp hằng ngày, khóa học giúp nâng cao khả năng phản xạ, sự tự tin, vốn từ vựng và khả năng phát âm chuẩn xác.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import { ChevronRight } from "lucide-react";

export default function ContactContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full flex flex-col justify-center items-center gap-4 bg-[rgb(var(--quaternary-rgb))] py-24">
        <div>
          <span className="text-gray-800 font-bold text-3xl">LIÊN HỆ CHÚNG TÔI</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span>Trang Chủ</span>
          <ChevronRight />
          <span>Liên Hệ</span>
        </div>
      </div>
    </main>
  );
}
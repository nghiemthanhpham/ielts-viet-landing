'use client'

import { ChevronRight } from "lucide-react";
import ContactSection01 from "./components/section-01";
import ContactSection03 from "./components/section-03";
import ContactSection02 from "./components/section-02";
import ContactSection04 from "./components/section-04";

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

      <div className="w-full flex flex-col justify-center items-center gap-4 my-5">
        <ContactSection01 />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <ContactSection02 />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4 mt-10 mb-20">
        <ContactSection03 />
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <ContactSection04 />
      </div>

    </main>
  );
}
'use client'

import { DATA } from "@/utils/data";

const Marquee = () => {
  const slogans = DATA.SLOGANS
  return (
    <section className="w-full bg-[rgb(var(--quaternary-rgb))] py-8 overflow-hidden">
      <div className="flex justify-center items-center gap-4 animate-marquee whitespace-nowrap">
        {slogans.map((item: any, index: any) => (
          <div key={`item-${index}`} className="bg-white px-10 py-2 rounded-lg shadow-md text-center">
            <h3 className="text-[rgb(var(--secondary-rgb))] font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
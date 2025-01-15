'use client'

import Section02 from "./sections/section-02";
import Section03 from "./sections/section-03";
import Section04 from "./sections/section-04";
import Section05 from "./sections/section-05";
import Section06 from "./sections/section-06";
import Section07 from "./sections/section-07";


export default function HomeContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-20">
      {/* w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white */}
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white lg:w-3/4">
        <span>Section 01</span>
      </section>
      <section className="lg:w-3/4">
        <Section02 />
      </section>
      <section className="bg-[rgb(var(--quaternary-rgb))] lg:w-full">
        <Section03 />
      </section>
      <section className="lg:w-3/4">
        <Section04 />
      </section>
      <section className="bg-[rgb(var(--quaternary-rgb))] lg:w-full">
        <Section05 />
      </section>
      <section className="lg:w-3/4">
        <Section06 />
      </section>
      <section className="bg-[rgb(var(--quaternary-rgb))] lg:w-full">
        <Section07 />
      </section>
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white lg:w-3/4">
        <span>Section 08</span>
      </section>
    </main>
  );
}
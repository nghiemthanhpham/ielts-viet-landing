'use client'

import Section01 from "./sections/section-01";

export default function HomeContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-20">
      <Section01 />
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white">
        <span>Section 01</span>
      </section>
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white">
        <span>Section 02</span>
      </section>
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white">
        <span>Section 03</span>
      </section>
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white">
        <span>Section 04</span>
      </section>
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white">
        <span>Section 05</span>
      </section>
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white">
        <span>Section 06</span>
      </section>
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white">
        <span>Section 07</span>
      </section>
      <section className="w-full flex justify-center items-center bg-[rgb(var(--primary-rgb))] py-40 text-white">
        <span>Section 08</span>
      </section>
    </main>
  );
}
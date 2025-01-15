'use client'

import Section02 from "./sections/section-02";
import Section03 from "./sections/section-03";
import Section04 from "./sections/section-04";
import Section05 from "./sections/section-05";
import Section06 from "./sections/section-06";
import Section07 from "./sections/section-07";
import SectionBanner from "./sections/section-banner";
import SectionFooter from "./sections/section-footer";
import Marquee from "./sections/section-marquee";

export default function HomeContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-20">
      <section className="lg:w-3/4">
        <SectionBanner />
      </section>
      <section className="w-full">
        <Marquee />
      </section>
      <section className="lg:w-3/4">
        <Section02 />
      </section>
      <section className="bg-[rgb(var(--secondary-rgb))] lg:w-full">
        <Section03 />
      </section>
      <section className="lg:w-3/4 -translate-y-3">
        <Section04 />
      </section>
      <section className="bg-[rgb(var(--secondary-rgb))] lg:w-full">
        <Section05 />
      </section>
      <section className="lg:w-3/4 -translate-y-4">
        <Section06 />
      </section>
      <section className="bg-[rgb(var(--secondary-rgb))] lg:w-full">
        <Section07 />
      </section>
      <section className="lg:w-3/4">
        <SectionFooter />
      </section>
    </main>
  );
}
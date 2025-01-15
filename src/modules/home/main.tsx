'use client'

import SectionBanner from "./sections/section-banner";
import SectionFooter from "./sections/section-footer";

export default function HomeContent() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-20">
      <SectionBanner />
      <SectionFooter />
    </main>
  );
}
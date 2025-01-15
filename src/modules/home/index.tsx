'use client'

import Header from '@/layout/header';
import Footer from '@/layout/footer';
import HomeContent from './main';

export default function HomeClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full md:w-3/4 lg:w-full mb-20 mt-10">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}
'use client'

import Header from '@/layout/header';
import Footer from '@/layout/footer';
import HomeContent from './main';

export default function HomeClient() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="w-full md:w-3/4 lg:w-3/4 mt-8 mb-20">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
}
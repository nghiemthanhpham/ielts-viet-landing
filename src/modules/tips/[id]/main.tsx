'use client'

import Link from "next/link";
import { BlogPost } from "./components/tips-post";
import { Sidebar } from "./components/sidebar";
import SectionFooter from "../components/section-footer";

export default function TipsContentDetail() {
  const post = {
    title: "The Surprising Reason College Tuition Is Crazy Expensive",
    author: {
      name: "Jenny Watson",
      image: "https://res.cloudinary.com/farmcode/image/upload/v1737017508/nduhew4idfpqqhucorem.png",
      bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
    },
    date: "24 JUN 2023",
    comments: 25,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };
  return (
    <main className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full relative bg-[#FDF8F5] min-h-[240px] flex items-center overflow-hidden">
        <div className="absolute left-12 bottom-12 grid grid-cols-4 gap-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-[rgb(var(--secondary-rgb))] opacity-60" />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 w-full text-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest Tips
          </h1>
          <nav className="flex justify-center items-center space-x-2 text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Trang Chủ
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-gray-900">Tips</span>
          </nav>
        </div>
        <div className="absolute -right-16 top-1/2 -translate-y-1/2">
          <div className="w-32 h-32 border-4 border-[rgb(var(--secondary-rgb))] rounded-full opacity-20" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="w-3/4 flex gap-12">
          <div className="flex-1">
            <BlogPost {...post} />
          </div>
          <Sidebar />
        </div>
        <div className="w-5/6 pt-8">
          <SectionFooter />
        </div>
      </div>
    </main>
  );
}
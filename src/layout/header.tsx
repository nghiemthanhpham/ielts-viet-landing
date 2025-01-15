'use client'

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { AlignJustify, PhoneCall } from 'lucide-react';

const Header = () => {

    const navigationItems = [
        { label: 'TRANG CHỦ', href: '/' },
        { label: 'VỀ CHÚNG TÔI', href: '/ve-chung-toi' },
        { label: 'KHOÁ HỌC', href: '/khoa-hoc' },
        { label: 'TIPS IELTS', href: '/tips-ielts' },
        { label: 'LIÊN HỆ', href: '/lien-he' },
    ];

    return (
        <header className="w-full flex justify-center items-center border-b">
            <div className="w-full lg:w-3/4 px-6 lg:px-0">
                <div className="flex items-center justify-between h-20">
                    <div className='flex lg:hidden'>
                        <AlignJustify />
                    </div>
                    <Link href="/" className="hidden lg:flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="alt"
                            className="w-12 h-12 object-cover"
                            width={100}
                            height={0}
                        />
                        <span className="text-[22px] font-semibold text-gray-700">IELTS VIET</span>
                    </Link>
                    <nav className="hidden lg:flex items-center gap-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-[16px] font-medium transition-colors hover:text-[rgb(var(--secondary-rgb))] ${item.label === 'TRANG CHỦ' ? 'text-[rgb(var(--secondary-rgb))]' : 'text-gray-600'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                            <Button
                                className="text-[18px] bg-white border border-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))] rounded-full hover:bg-[rgb(var(--secondary-rgb))] hover:text-white"
                            >
                                <PhoneCall size={12} />0939.217.718
                            </Button>
                            <Button
                                className="hidden lg:flex text-[18px] bg-[rgb(var(--secondary-rgb))] text-white rounded-full px-6 hover:opacity-80 hover:bg-[rgb(var(--secondary-rgb))]"
                            >
                                Test Online
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
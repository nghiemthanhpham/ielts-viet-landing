/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { IMAGES } from '@/utils/image';
import { ROUTES } from '@/utils/route';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { LoginModal } from './login';
import Cookies from "js-cookie";
import { Gift, House, Info, NotepadText, PhoneCall } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {

    const isLogin = Cookies.get("isLogin")
    const [logined, setLogined] = useState(false);
    const [open, setOpen] = useState(false);

    const pathname = usePathname()

    const checkTabEnable = (tab: string, pathname: string) => {
        if (pathname === tab) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        if (isLogin) {
            setLogined(true)
        }
    }, [])

    const renderLogin = (isLogin: any) => {
        if (isLogin) {
            return <Image
                src={IMAGES.LOGO}
                alt="logo"
                width={32}
                height={32}
                priority
                className="rounded-full" />
        } else {
            return <LoginModal />
        }
    }

    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerHeight = document.querySelector('.header-top')?.clientHeight || 0;
            setIsFixed(window.scrollY > headerHeight + 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isOpenToggle, setIsOpenToggle] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => setIsOpenToggle((prev) => !prev);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpenToggle(false);
        }
    };

    useEffect(() => {
        if (isOpenToggle) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpenToggle]);

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <header className="w-full lg:w-3/4 relative bg-[rgb(var(--quaternary-rgb))] lg:bg-white p-4 lg:px-0 lg:py-6 flex items-center justify-between">
                <div className="lg:hidden flex flex-col justify-center">
                    <button
                        className="text-gray-800 w-10 h-10 relative focus:outline-none"
                        onClick={() => setOpen(!open)}
                    >
                        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <span
                                aria-hidden="true"
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                                    }`}
                            ></span>
                            <span
                                aria-hidden="true"
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${open ? 'opacity-0' : 'opacity-100'
                                    }`}
                            ></span>
                            <span
                                aria-hidden="true"
                                className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${open ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>
                <div className="flex items-center justify-center gap-4 cursor-pointer">
                    <Image
                        src={IMAGES.LOGO}
                        alt="logo"
                        width={44}
                        height={44}
                        priority
                        className="hidden lg:flex"
                    />
                    <div className="flex flex-col">
                        <span className="font-extrabold text-2xl text-gray-800">IELTS Việt</span>
                        <span className="text-sm font-medium text-[rgb(var(--secondary-rgb))]">English Center</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div className="hidden lg:flex items-center space-x-2 bg-[rgb(var(--quaternary-rgb))] px-4 py-2 rounded-full">
                        <PhoneCall className="w-4 h-4" />
                        <span className="text-gray-700 font-light">Hotline:</span>
                        <span className="font-bold text-gray-800">093 921 77 18</span>
                    </div>
                    <a href="/" className="hidden lg:flex bg-[rgb(var(--secondary-rgb))] text-white font-semibold px-4 py-2 rounded-full">Đặt lịch hẹn</a>
                    <div className="flex items-center space-x-2">
                        <Image src="https://cdn-icons-png.flaticon.com/128/197/197473.png" alt="alt" width={20} height={20} />
                        <span className="text-gray-700 font-semibold">VI</span>
                    </div>
                </div>
                {open && (
                    <div className="absolute mt-2 top-16 left-0 h-[1000px] w-full bg-white shadow-md z-20">
                        <ul className="flex flex-col space-y-10 py-10 px-5">
                            <li className='font-bold '>
                                <a href={`${ROUTES.HOME}`} className="flex items-center justify-start gap-4 text-gray-700 hover:text-black">
                                    <House size={18} /> Trang chủ
                                </a>
                            </li>
                            <li className='font-bold '>
                                <a href={`${ROUTES.ABOUT}`} className="flex items-center justify-start gap-4 text-gray-700 hover:text-black">
                                    <Info size={18} /> Giới thiệu
                                </a>
                            </li>
                            <li className='font-bold '>
                                <a href={`${ROUTES.PRODUCT}`} className="flex items-center justify-start gap-4 text-gray-700 hover:text-black">
                                    <Gift size={18} /> Khóa học
                                </a>
                            </li>
                            <li className='font-bold '>
                                <a href={`${ROUTES.BLOG}`} className="flex items-center justify-start gap-4 text-gray-700 hover:text-black">
                                    <NotepadText size={18} /> Tin tức
                                </a>
                            </li>
                            <li className='font-bold '>
                                <a href={`${ROUTES.BLOG}`} className="flex items-center justify-start gap-4 text-gray-700 hover:text-black">
                                    <NotepadText size={18} /> Đặt lịch hẹn
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </header>
            <div className='w-3/4 bg-white hidden lg:flex justify-center items-center border-b border-t px-5'>

                <div className={`flex justify-center items-center ${isFixed ? 'w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-white hidden lg:flex justify-center items-center border-b border-t px-5' : 'w-full'
                    }`}
                >
                    <div className={`bg-white ${isFixed ? 'w-3/4' : 'w-full'} text-white flex justify-between items-center py-5`}>
                        <a href={`${ROUTES.HOME}`} className={`${checkTabEnable(ROUTES.HOME, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''}  text-black`}>TRANG CHỦ</a>
                        <a href={`${ROUTES.ABOUT}`} className={`${checkTabEnable(ROUTES.ABOUT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>VỀ CHÚNG TÔI</a>
                        {/* <a href={`${ROUTES.PRODUCT}`} className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>ÉP PLASTIC</a>
                        <a href={`${ROUTES.PRODUCT}`} className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>ẢNH KHUNG VIỀN</a>
                        <a href={`${ROUTES.PRODUCT}`} className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>PHOTOBOOK</a>
                        <a href={`${ROUTES.PRODUCT}`} className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>BẢNG GIÁ</a> */}
                        <div className="relative" ref={dropdownRef}>
                            <div onClick={toggleDropdown} className="px-2 py-1 flex flex-row justify-center items-center gap-1 bg-opacity-60 bg-white cursor-pointer rounded-lg">
                                <span className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>KHÓA HỌC</span>
                                <div className={`transition-transform duration-300 ${isOpenToggle ? "-translate-y-0.5" : "-rotate-90"} mt-1`}>
                                    <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="black" aria-hidden="true" data-slot="icon">
                                        <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            {isOpenToggle && (
                                <ul className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black absolute right-0 z-10 mt-2 w-[200px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none py-2`}

                                >
                                    <li className='px-5 py-2'><a href={`${ROUTES.PRODUCT}`} className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>ÉP PLASTIC</a></li>
                                    <li className='px-5 py-2'><a href={`${ROUTES.PRODUCT}`} className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>ẢNH KHUNG VIỀN</a></li>
                                    <li className='px-5 py-2'><a href={`${ROUTES.PRODUCT}`} className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>PHOTOBOOK</a></li>
                                    <li className='px-5 py-2'><a href={`${ROUTES.PRODUCT}`} className={`${checkTabEnable(ROUTES.PRODUCT, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>BẢNG GIÁ</a></li>
                                </ul>
                            )}
                        </div>
                        <a href={`${ROUTES.BLOG}`} className={`${checkTabEnable(ROUTES.BLOG, pathname) ? 'font-extrabold !text-[rgb(var(--secondary-rgb))]' : ''} text-black`}>TIN TỨC</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
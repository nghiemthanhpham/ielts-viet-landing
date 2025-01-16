'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const SectionBanner = () => {
    return (
        <section className="w-full flex items-center px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <p className="text-[rgb(var(--secondary-rgb))] text-md lg:text-lg font-semibold">Trung Tâm Đào Tạo Anh Ngữ</p>
                        <h1 style={{ lineHeight: '1.3' }} className="text-4xl lg:text-5xl font-bold text-gray-900">
                            Đăng Ký Sớm Để Nhận Ngay Ưu Đãi
                        </h1>
                    </div>
                    <p className="text-gray-600 text-lg">
                        Học IELTS cùng chuyên gia đầu ngành. Hỗ trợ toàn diện từ giáo viên bản ngữ, cựu giám khảo và chuyên gia IELTS Việt Nam.
                    </p>
                    <div className="flex items-center gap-4">
                        <Button className="text-[16px] rounded-full px-10 bg-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:opacity-80 text-white">
                            Khám phá ngay
                        </Button>
                        <Button variant="ghost" className="text-[16px] rounded-full text-[rgb(var(--secondary-rgb))] flex items-center gap-2">
                            <PlayCircle className="w-5 h-5" />
                            <span className='hidden lg:flex'>Video giới thiệu</span>
                            <span className='flex lg:hidden'>Video</span>
                        </Button>
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-[rgb(var(--secondary-rgb))] rounded-3xl p-8 text-white relative overflow-hidden">
                        <div className="space-y-6 max-w-md">
                            <div>
                                <h2 className="text-4xl font-bold mb-2">IELTS</h2>
                                <h3 className="text-2xl">Online Admission</h3>
                            </div>
                            <blockquote className="text-white">
                                Sẵn sàng để trở thành học viên của chúng tôi
                            </blockquote>
                            <Button variant="outline" className="text-[rgb(var(--secondary-rgb))] rounded-full px-8 font-semibold border-white hover:bg-white/10 hover:text-white">
                                Đăng ký
                            </Button>
                            <div className="mt-4">
                                <p className="text-white">www.ieltsviet.edu.vn</p>
                            </div>
                        </div>
                        <div className="hidden lg:flex absolute top-4 right-4">
                            <p className="text-lg font-semibold">Power by IELTS VIET</p>
                        </div>
                        <div className="absolute -right-20 bottom-0">
                            <div className="w-80 h-80 bg-white/10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionBanner;
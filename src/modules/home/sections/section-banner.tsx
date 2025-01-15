'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const SectionBanner = () => {
    return (
        <section className="w-full flex items-center px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <p className="text-[rgb(var(--secondary-rgb))] text-[17px] lg:text-[20px] font-semibold">Trung Tâm Đào Tạo Anh Ngữ</p>
                        <h1 className="leading-none text-3xl lg:text-[55px] font-bold text-gray-900">
                            Lets Learn About New Knowledge And Abilities
                        </h1>
                    </div>
                    <p className="text-gray-600 text-lg">
                    Học IELTS cùng chuyên gia đầu ngành. Hỗ trợ toàn diện từ giáo viên bản ngữ, cựu giám khảo và chuyên gia IELTS Việt Nam.
                    </p>
                    <div className="flex items-center gap-4">
                        <Button className="text-[16px] rounded-full px-10 bg-[rgb(var(--secondary-rgb))] hover:bg-[rgb(var(--secondary-rgb))] hover:opacity-80 text-white">
                            Get Started
                        </Button>
                        <Button variant="ghost" className="text-[16px] rounded-full text-[rgb(var(--secondary-rgb))] flex items-center gap-2">
                            <PlayCircle className="w-5 h-5" />
                            Watch Our Video
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
                                If you are not willing to risk the usual, you will have to settle for the ordinary
                            </blockquote>
                            <Button variant="outline" className="text-[rgb(var(--secondary-rgb))] rounded-full px-8 font-semibold border-white hover:bg-white/10 hover:text-white">
                                Visit Us
                            </Button>
                            <div className="mt-4">
                                <p className="text-white">www.ieltsviet.edu.vn</p>
                                <p className="text-white">For more info call</p>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4">
                            <p className="text-lg font-semibold">Crack your IELTS EXAM</p>
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
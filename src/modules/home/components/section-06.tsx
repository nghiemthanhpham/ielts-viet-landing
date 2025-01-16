'use client'

import { Component, FolderCode, Target, TvMinimal } from "lucide-react";

interface CourseCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    backgroundColor: string;
}

const categories: CourseCategory[] = [
    {
        id: 'uiux',
        title: 'Phòng Riêng Biệt',
        description: 'We are providing you the best UI/UX design guideline. That help you be professional.',
        icon: (
            <div className="bg-yellow-400 p-4 rounded-full">
                <div className="text-white font-bold"><Component /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'marketing',
        title: 'Màn Hình, Máy Chiếu',
        description: 'We are providing you the best Digital Marketing guideline. That help you be professional.',
        icon: (
            <div className="bg-emerald-500 p-4 rounded-full">
                <div className="text-white"><TvMinimal /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'development',
        title: 'Tài Liệu Nước Ngoài',
        description: 'We are providing you the best Development guideline. That help you be professional.',
        icon: (
            <div className="bg-blue-600 p-4 rounded-full">
                <div className="text-white"><FolderCode /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    },
    {
        id: 'improvement',
        title: 'Online Linh Hoạt',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-pink-500 p-4 rounded-full">
                <div className="text-white"><Target /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    }
];

const Section06 = () => {
    return (
        <div className="w-full px-4 lg:px-0">
            <div className="text-center mb-12">
                    <p className="text-[rgb(var(--secondary-rgb))] text-md lg:text-lg font-semibold mb-3">
                        Không Gian Học Tập
                    </p>
                    <div className="relative inline-block">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Cơ Sở Vật Chất Hiện Đại
                        </h2>
                        <div className="hidden lg:flex absolute top-1/2 right-0 w-32 h-3 bg-[rgb(var(--tertiary-rgb))] opacity-70 -z-10 transform translate-x-6"></div>
                    </div>
                </div>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`${category.backgroundColor} rounded-lg p-8 border border-gray-200 hover:shadow-md transition-shadow duration-300 cursor-pointer mx-2 lg:mx-0`}>
                            <div className="flex flex-col items-start gap-4">
                                {category.icon}
                                <h3 className="text-xl font-bold">{category.title}</h3>
                                <p className="text-gray-600 text-sm">
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section06;
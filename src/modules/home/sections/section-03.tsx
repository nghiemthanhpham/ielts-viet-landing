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
        title: 'UI/UX Design',
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
        title: 'Digital Marketing',
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
        title: 'Development',
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
        title: 'Self Improvement',
        description: 'We are providing you the best Self Improvement guideline. That help you be professional.',
        icon: (
            <div className="bg-pink-500 p-4 rounded-full">
                <div className="text-white"><Target /></div>
            </div>
        ),
        backgroundColor: 'bg-white'
    }
];

const Section03 = () => {
    return (
        <div className="max-w-7xl mx-auto pb-20 pt-12">
            <div className="text-center mb-12">
                <div className="text-center space-y-1">
                    <p className="text-[#eee] text-[17px] lg:text-[20px] font-semibold mb-3">Our Courses</p>
                    <h2 className="text-3xl mx-2 lg:text-[55px] font-bold text-[rgb(var(--quaternary-rgb))]">
                        Explore Courses By Category
                    </h2>
                </div>
            </div>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-6 lg:mx-2">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`${category.backgroundColor} rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}>
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

export default Section03;
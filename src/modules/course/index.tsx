'use client'

import Header from '@/layout/header';
import Footer from '@/layout/footer';
import CourseContent from './main';

export default function CourseClient() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Header />
            <div className="w-full mb-20">
                <CourseContent />
            </div>
            <Footer />
        </div>
    );
}
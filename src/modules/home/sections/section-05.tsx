'use client'

import { Card, CardContent } from "@/components/ui/card";
import { HELPER } from "@/utils/helper";
import { ArrowRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Testimonial {
    id: string;
    name: string;
    role: string;
    rating: number;
    comment: string;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Leslie Alexander',
        role: 'Students of UX/UI',
        rating: 5.0,
        comment: "I can't express enough gratitude for the awesome experience I had during my education journey. As a beginner they support me as much possible.",
        imageUrl: 'https://wpocean.com/html/tf/eduko/assets/images/testimonial/thumb1.png'
    },
    {
        id: '2',
        name: 'Eleanor Pena',
        role: 'Students of Graphic Designer',
        rating: 4.0,
        comment: "I can't express enough gratitude for the awesome experience I had during my education journey. As a beginner they support me as much possible.",
        imageUrl: 'https://wpocean.com/html/tf/eduko/assets/images/testimonial/thumb2.png'
    },
    {
        id: '3',
        name: 'Annette Black',
        role: 'Students of PHP',
        rating: 5.0,
        comment: "I can't express enough gratitude for the awesome experience I had during my education journey. As a beginner they support me as much possible.",
        imageUrl: 'https://wpocean.com/html/tf/eduko/assets/images/testimonial/thumb3.png'
    }
];



const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                />
            ))}
            <span className="ml-2 text-gray-600">({rating.toFixed(1)})</span>
        </div>
    );
};

const Section05 = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <div className="text-center space-y-1">
                    <p className="text-[rgb(var(--secondary-rgb))] text-[17px] lg:text-[20px] font-semibold mb-3">Testimonials</p>
                    <h2 className="text-3xl mx-2 lg:text-[55px] font-bold">
                        What Our Students Says About Us
                    </h2>
                </div>
            </div>
            <div className="relative">
                <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id}
                            className={`w-full md:w-1/2 lg:w-[32%] lg:flex-shrink-0 transform transition-transform duration-300 ease-in-out`} >
                            <div className="bg-white p-8 rounded-lg shadow-sm">
                                <div className="flex items-center gap-4 mb-4">
                                    <Image
                                        src={testimonial.imageUrl}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                        width={1000}
                                        height={1000} />
                                    <div>
                                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <StarRating rating={testimonial.rating} />
                                <p className="mt-4 text-gray-600">{testimonial.comment}</p>
                                <div className="absolute top-4 right-4 text-yellow-400 text-4xl font-serif opacity-25"><Quote size={40} /></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section05;
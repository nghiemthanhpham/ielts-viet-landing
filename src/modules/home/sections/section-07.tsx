'use client'

import Image from "next/image";

interface BlogPost {
    id: string;
    title: string;
    date: string;
    author: string;
    imageUrl: string;
    link: string;
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Surprising Reason College Tuition Is Crazy Expensive',
        date: '25 Sep 2023',
        author: 'By Anne William',
        imageUrl: 'https://wpocean.com/html/tf/eduko/assets/images/blog/img-1.jpg',
        link: '#'
    },
    {
        id: '2',
        title: 'Become a great WordPress & PHP developer.',
        date: '26 Sep 2023',
        author: 'By Robert Fox',
        imageUrl: 'https://wpocean.com/html/tf/eduko/assets/images/blog/img-2.jpg',
        link: '#'
    },
    {
        id: '3',
        title: 'A critical review of mobile learning integration',
        date: '28 Sep 2023',
        author: 'By Devon Lane',
        imageUrl: 'https://wpocean.com/html/tf/eduko/assets/images/blog/img-3.jpg',
        link: '#'
    }
];

const Section07 = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 cursor-pointer">
            <div className="text-center mb-12">
                <div className="text-center space-y-1">
                    <p className="text-[rgb(var(--secondary-rgb))] text-[17px] lg:text-[20px] font-semibold mb-3">Our Blogs</p>
                    <h2 className="text-3xl mx-2 lg:text-[55px] font-bold">
                        Our Latest News
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article
                        key={post.id}
                        className="relative overflow-hidden group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="relative overflow-hidden group aspect-[4/3]">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-full transform transition-transform duration-500 group-hover:scale-105  object-cover"
                                width={1000}
                                height={1000} />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                <time>{post.date}</time>
                                <span className="text-gray-400">•</span>
                                <span>{post.author}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 line-clamp-2">
                                {post.title}
                            </h3>
                            <div
                                className="inline-block text-yellow-400 font-medium hover:text-yellow-500 transition-colors duration-300 underline-offset-2">
                                Continue Reading
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Section07;
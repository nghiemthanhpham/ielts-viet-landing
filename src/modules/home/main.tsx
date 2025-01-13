/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { IMAGES } from '@/utils/image';
import { DATA } from '@/utils/data';
import "swiper/css";
import Link from 'next/link';
import { ROUTES } from '@/utils/route';
import { ProductService } from '@/services/product';
import { BlogService } from '@/services/blog';
import { GlobalComponent } from '@/components/global';
import LearnerSlider from './components/learners.slider';

export default function HomeContent() {

  const reviews = DATA.REVIEWS as any
  const slogans = DATA.SLOGANS
  const [products, setProducts] = useState([] as any)
  const [filteredData, setFilteredData] = useState([] as any)
  const [blogs, setBlogs] = useState([] as any)
  const [selectedCategory, setSelectedCategory] = useState<string>('plastic');
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const handleSwiper = (swiper: any) => {
    setSwiperInstance(swiper);
  };

  const renderProduct = async () => {
    const res = await ProductService.getAll()
    if (res && res.data.length > 0) {
      setProducts(res.data)
      setFilteredData(res.data.filter((item: any) => item.category === selectedCategory))
    }
  }

  const renderBlog = async () => {
    const res = await BlogService.getAll()
    if (res && res.data.length > 0) {
      setBlogs(res.data)
    }
  }

  const init = async () => {
    renderProduct()
    renderBlog()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <main id="body" className="space-y-6">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8">
        <div className="flex w-full lg:w-1/2 lg:hidden justify-center items-start relative pt-10">
          <div className="w-5/6 min-h-[250px] flex justify-center items-center border border-[rgb(var(--secondary-rgb))] rounded-lg">
            <Image
              src={IMAGES.HOME_MAIN_THUMBNAIL}
              alt="alt"
              className="rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="w-4/5 lg:w-1/2 flex flex-col justify-center items-start gap-3 lg:gap-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
            Học <span className="text-[rgb(var(--secondary-rgb))]">IELTS</span> cùng các chuyên gia đầu ngành
          </h2>
          <ul className="text-gray-700">
            <li>✔️ Phương pháp độc quyền, tiết kiệm 40% thời gian</li>
            <li>✔️ 80% giảng viên là cựu giám khảo IELTS</li>
            <li>✔️ Hệ thống AI độc quyền 4 kỹ năng</li>
            <li>✔️ Hỗ trợ toàn diện từ giáo viên bản ngữ</li>
            <li>✔️ Cam kết đầu ra – 15 năm uy tín</li>
          </ul>
          <div className="flex gap-4">
            <Link href="#">
              <button className="text-[11px] lg:text-base bg-[rgb(var(--secondary-rgb))] hover:opacity-80 transition duration-300 text-white font-semibold px-4 py-2 rounded-full">
                Test trình độ IELTS miễn phí
              </button>
            </Link>
            <Link href="#">
              <button className="text-[11px] lg:text-base border border-[rgb(var(--secondary-rgb))] text-[rgb(var(--secondary-rgb))] hover:text-white hover:bg-[rgb(var(--secondary-rgb))] hover:border-[rgb(var(--secondary-rgb))] transition duration-300 font-semibold px-4 py-2 rounded-full">
                Xem lịch khai giảng
              </button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Image src="https://ktdcgroup.vn/wp-content/uploads/2024/10/hero-image.png" alt="alt" className="w-28 h-auto rounded-full" width={112} height={100} />
            <span className="text-gray-700 font-semibold">500+ học viên tại Cần Thơ</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Image src="https://ktdcgroup.vn/wp-content/uploads/2024/06/british-council-logo.png" alt="alt" className="w-20" width={80} height={100} />
              <Image
                src="https://ktdcgroup.vn/wp-content/uploads/2024/05/logo-idp.svg"
                alt="alt" className="w-20"
                width={80}
                height={100}
              />
            </div>
            <div className="flex items-center gap-4">
              <Link href="#">
                <div className="flex items-center bg-orange-100 p-2 rounded-full">
                  <Image
                    src="https://ktdcgroup.vn/wp-content/uploads/2024/10/google-icon.png"
                    alt="alt"
                    className="w-6 h-6"
                    width={24}
                    height={24} />
                </div>
              </Link>
              <Link href="#">
                <div className="flex items-center bg-orange-100 p-2 rounded-full">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt="alt"
                    className="w-6 h-6"
                    width={24}
                    height={24}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 lg:flex justify-end items-start relative">
          <div className="w-5/6 flex justify-center items-center border border-[rgb(var(--secondary-rgb))] rounded-lg">
            <Image
              src={IMAGES.HOME_MAIN_THUMBNAIL}
              alt="alt"
              className="rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
      <div className='my-72'>
        <div className="w-screen bg-[rgb(var(--quaternary-rgb))] py-8 my-16 -translate-x-[0%] md:-translate-x-[12.5%] lg:-translate-x-[13%] overflow-hidden">
          <div className="flex justify-center items-center gap-4 animate-marquee whitespace-nowrap">
            {slogans.map((item: any, index: any) => (
              <div key={`item-${index}`} className="bg-white px-10 py-2 rounded-lg shadow-md text-center">
                <h3 className="text-[rgb(var(--secondary-rgb))] font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center px-4 lg:py-4">
        <h3 className="text-lg lg:text-2xl font-bold text-navy-blue mb-4 lg:mb-8">DANH MỤC KHÓA HỌC</h3>
        <div className="flex justify-center space-x-4">
          <Link href={`${ROUTES.PRODUCT}`}>
            <GlobalComponent.CategoryCard
              title="Khóa IELTS 4 kỹ năng"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
                // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hard-drive"><line x1="22" x2="2" y1="12" y2="12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /><line x1="6" x2="6.01" y1="16" y2="16" /><line x1="10" x2="10.01" y1="16" y2="16" /></svg>
              }
            />
          </Link>
          <Link href={`${ROUTES.PRODUCT}`}>
            <GlobalComponent.CategoryCard
              title="Khóa IELTS 2 kỹ năng"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-copy"><path d="M2 16V4a2 2 0 0 1 2-2h11" /><path d="M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12" /><path d="M5 14H4a2 2 0 1 0 0 4h1" /></svg>
                // <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-frame"><line x1="22" x2="2" y1="6" y2="6" /><line x1="22" x2="2" y1="18" y2="18" /><line x1="6" x2="6" y1="2" y2="22" /><line x1="18" x2="18" y1="2" y2="22" /></svg>
              }
            />
          </Link>
        </div>
      </div>
      <div className="p-4 md:p-0 lg:p-0 space-y-8">
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className="grid grid-rows-2 lg:grid-cols-12 gap-6 rounded-lg overflow-hidden border border-dashed border-[rgb(var(--secondary-rgb))] p-4">
            <Image
              src={IMAGES.INTRODUCE_COURSE_1}
              alt="alt"
              className="row-span-6 lg:col-span-5 w-full h-full object-cover rounded-lg"
              width={200}
              height={200}
              priority
            />
            <div className="row-span-6 lg:col-span-7 text-left mt-4">
              <h3 className="text-xl lg:text-2xl font-extrabold text-gray-800">Khóa học 1</h3>
              <div className="flex justify-start items-center gap-2 my-4">
                <p className="text-[rgb(var(--secondary-rgb))] font-semibold text-lg">2.000.000 đ</p>
                <p className="text-gray-500 text-sm">36 giờ (8 tuần)</p>
              </div>
              <ul className="mt-2 text-gray-700 text-sm lg:text-base space-y-1">
                {DATA.IELTSROADMAP[0].target.map((tg, index) => (
                  <li key={index}>✔️ {tg}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Button
                  className="w-full md:w/1-3 lg:w-2/5 bg-[rgb(var(--secondary-rgb))] hover:bg-[#6B3410] text-white mt-4"
                >
                  Đăng ký ngay
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:grid grid-rows-2 lg:grid-cols-12 gap-6 rounded-lg overflow-hidden border border-dashed border-[rgb(var(--secondary-rgb))] p-4">
            <Image
              src={IMAGES.INTRODUCE_COURSE_2}
              alt="alt"
              className="row-span-6 lg:col-span-5 w-full h-full object-cover rounded-lg"
              width={200}
              height={200}
              priority
            />
            <div className="row-span-6 lg:col-span-7 text-left mt-4">
              <h3 className="text-xl lg:text-2xl font-extrabold text-gray-800">Khóa học 2</h3>
              <div className="flex justify-start items-center gap-2 my-4">
                <p className="text-[rgb(var(--secondary-rgb))] font-semibold text-lg">2.000.000 đ</p>
                <p className="text-gray-500 text-sm">36 giờ (8 tuần)</p>
              </div>
              <ul className="mt-2 text-gray-700 text-sm lg:text-base space-y-1">
                {DATA.IELTSROADMAP[0].target.map((tg, index) => (
                  <li key={index}>✔️ {tg}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Button
                  className="w-full md:w/1-3 lg:w-2/5 bg-[rgb(var(--secondary-rgb))] hover:bg-[#6B3410] text-white mt-4"
                >
                  Đăng ký ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:py-6'>
          <h2 className="text-lg lg:text-2xl font-bold text-black mb-4 lg:mb-8">KHÓA HỌC NỔI BẬT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {products?.slice(0, 6)?.map((product: any, index: any) => (
              <div key={index}>
                <Link href={`${ROUTES.PRODUCT}/${product?._id}`}>
                  <GlobalComponent.ProductCard
                    image={product?.thumbnail}
                    title={product?.name}
                    price={product?.price}
                    hot={true}
                    sold={product?.sold}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden flex flex-col p-4 md:p-0 lg:p-0 space-y-4 pt-0">
        <div className="text-center space-y-2">
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-navy-900">KHÓA HỌC YÊU THÍCH</h2>
        </div>
        <div className="flex flex-col bg-[rgb(var(--quaternary-rgb))] rounded-lg p-4 space-y-3">
          {[
            { label: "ẢNH PLASTIC", cate: 'plastic' },
            { label: "KHUNG ẢNH", cate: 'frame' },
            { label: "ALBUM", cate: 'album' },
            { label: "MỤC TIÊU 4.5+", cate: 'album1' },
            { label: "MỤC TIÊU 5.5+", cate: 'album2' },
            { label: "MỤC TIÊU 6.0+", cate: 'album3' },
            { label: "MỤC TIÊU 6.5+", cate: 'album4' },
          ].map(({ label, cate }) => (
            selectedCategory === cate ? (
              <div key={cate} className="bg-[rgb(var(--secondary-rgb))] text-white py-3 px-4 rounded-lg flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span className='text-sm font-bold'>{label}</span>
              </div>
            ) : (
              <button
                key={cate}
                onClick={() => setSelectedCategory(cate)}
                className="text-black font-medium w-full text-left py-2"
              >
                <span className='text-sm font-bold'>{label}</span>
              </button>
            )
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredData?.slice(0, 4)?.map((product: any, index: any) => (
            <div key={index}>
              <Link href={`${ROUTES.PRODUCT}/${product?._id}`}>
                <GlobalComponent.ProductCard
                  image={product?.thumbnail}
                  title={product?.name}
                  price={product?.price}
                  hot={true}
                  sold={product?.sold}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 md:p-0 lg:p-0 space-y-10 pt-0">
        <div className="space-y-4 lg:py-10">
          <h2 className="text-2xl font-bold text-navy-900 text-center">
            ĐẶC QUYỀN CỦA HỌC VIÊN IELTS VIỆT
          </h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-start items-center gap-3">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/10435/10435128.png"
                  alt="img"
                  className="rounded-lg"
                  width={40}
                  height={0}
                />
                <h3 className="text-lg font-bold text-gray-800">Phương pháp Total Immersion</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Chúng tôi tạo môi trường học tập 100% tiếng Anh với phương pháp độc quyền, giúp học viên tiến bộ nhanh hơn 40% so với cách học truyền thống. Không chỉ hướng đến điểm số, chúng tôi tập trung vào khả năng ứng dụng kiến thức thực tế của học viên.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-start items-center gap-3">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/5585/5585472.png"
                  alt="img"
                  className=""
                  width={40}
                  height={0}
                />
                <h3 className="text-lg font-bold text-gray-800">Đội ngũ giảng viên đầu ngành</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Được dẫn dắt bởi các cựu giám khảo IELTS, giảng viên với chứng chỉ CELTA, DELTA và nhiều năm kinh nghiệm, học viên nhận được sự hỗ trợ 1:1 cho Speaking và Writing. Mỗi giảng viên đều tận tâm điều chỉnh phương pháp giảng dạy phù hợp nhất với phong cách và nhu cầu học tập của từng học viên.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-start items-center gap-3">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/6873/6873405.png"
                  alt="img"
                  className=""
                  width={40}
                  height={0}
                />
                <h3 className="text-lg font-bold text-gray-800">Công nghệ AI tiên tiến</h3>
              </div>
              <p className="mt-2 text-gray-600">
                IELTS Việt là đơn vị đầu tiên tại Việt Nam ứng dụng AI để luyện tập đủ 4 kỹ năng IELTS. Hệ thống này cung cấp phản hồi chi tiết theo tiêu chuẩn IELTS, đồng thời nền tảng LMS hỗ trợ học viên luyện tập không giới hạn, mọi lúc, mọi nơi, đảm bảo lộ trình học tập tối ưu và hiệu quả.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <div className="flex justify-start items-center gap-3">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/1642/1642322.png"
                  alt="img"
                  className=""
                  width={40}
                  height={0}
                />
                <h3 className="text-lg font-bold text-gray-800">Cam kết kết quả</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Với 15 năm kinh nghiệm đào tạo, chúng tôi cam kết đầu ra hoặc học lại miễn phí. Học viên còn nhận được sự hỗ trợ toàn diện về kiến thức, tâm lý và các kỹ năng cần thiết để sẵn sàng cho kỳ thi, mang đến sự an tâm tuyệt đối trên hành trình chinh phục IELTS.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-navy-900">
            HỌC VIÊN NÓI GÌ VỀ IELTS VIỆT?
          </h2>
          <LearnerSlider />
        </div>
      </div>
      <div className="p-4 md:p-0 lg:p-0 space-y-4">
        <h2 className="text-2xl font-bold text-center text-navy-900 mt-14">TIN TỨC</h2>
        <div className="space-y-2 lg:hidden flex flex-col">
          {blogs?.slice(0, 3)?.map((blog: any, index: any) => (
            <div key={index}>
              <Link href={`${ROUTES.BLOG}/${blog._id}`}>
                <GlobalComponent.BlogCard
                  id={blog?._id}
                  image={blog?.thumbnail}
                  title={blog?.title}
                  excerpt={blog?.excerpt}
                  date={blog?.date}
                  author={blog?.author}
                  isMain={index === 0}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {
            blogs?.map((blog: any, index: any) => (
              <GlobalComponent.BlogCard
                key={index}
                id={blog?._id}
                image={blog?.thumbnail}
                title={blog?.title}
                excerpt={blog?.excerpt}
                date={blog?.date}
                author={blog?.author}
                isMain={true}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
}
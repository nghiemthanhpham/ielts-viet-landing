const CATEGORIES = [
  {
    id: 0,
    tag: "all",
    name: "TẤT CẢ",
  },
  {
    id: 1,
    tag: "plastic",
    name: "ẢNH PLASTIC",
  },
  {
    id: 2,
    tag: "frame",
    name: "KHUNG ẢNH",
  },
  {
    id: 3,
    tag: "album",
    name: "ALBUM",
  },
];

const REVIEWS = [
  {
    id: 1,
    name: "Anh Huy",
    review:
      "Tôi đã mua sản phẩm ở đây rất nhiều lần, sản phẩm tốt cho sức khỏe con, sẽ ủng hộ tiếp.",
    role: "Người Tiêu Dùng",
  },
  {
    id: 2,
    name: "Anh Hùng",
    review:
      "Tôi đã mua sản phẩm ở đây rất nhiều lần, sản phẩm tốt cho sức khỏe con, sẽ ủng hộ tiếp.",
    role: "Người Tiêu Dùng",
  },
  {
    id: 3,
    name: "Anh Trọng",
    review:
      "Tôi đã mua sản phẩm ở đây rất nhiều lần, sản phẩm tốt cho sức khỏe con, sẽ ủng hộ tiếp.",
    role: "Người Tiêu Dùng",
  },
];

const SLOGANS = [
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
  {
    title: "Bảo đảm kết quả",
    content: "Yên tâm học hành",
  },
  {
    title: "Giáo viên chuyên môn",
    content: "Dạy giỏi, tận tâm",
  },
  {
    title: "40% Học nhanh hơn",
    content: "Khoa học chứng minh",
  },
  {
    title: "98% Học Viên",
    content: "Hài lòng với chất lượng",
  },
];

const LEARNERS = [
  {
    id: 1,
    name: "Ngọc Anh",
    cmt: "Mình chỉ mới bắt đầu học IELTS từ hè năm nay, lúc đó kiến thức về tiếng anh của mình chỉ coi là đủ dùng và ở mức 4.5(?). Nhưng sau khi học tại Ielt Việt được 2 tháng và giờ...",
    cmtSrc: "Google",
  },
  {
    id: 2,
    name: "Hồ Nguyên Khang",
    cmt: "Học ở đây vui lắm luôn. Ngày đầu học mình thấy hơi lo lắng tại do học với người bản xứ thì sợ mình không hiểu các thầy nói gì. Nhưng mà sau khi trải nghiệm thì lại thấy nghe...",
    cmtSrc: "Google",
  },
  {
    id: 3,
    name: "Le Nha Thy",
    cmt: "Chương trình học bám sát IELTS và cực kỳ hiệu quả, thấy lại chuyên môn cao và cách học giúp học viên luyện tập khả năng chủ động trong học tập...",
    cmtSrc: "Google",
  },
  {
    id: 4,
    name: "Nguyễn Đình Kha",
    cmt: "Mình đã có trải nghiệm học IELTS tại Ielt Việt vô cùng tuyệt vời. Ngay từ ban đầu, mình đã được đánh giá chi tiết về trình độ và được tư vấn kỹ càng về...",
    cmtSrc: "Facebook",
  },
  {
    id: 5,
    name: "Phương Linh",
    cmt: "Mình học ở đây mới tháng thứ 3 nhưng mà trình độ đã cải thiện rất nhiều, tăng band chỉ sau 1 khóa học. Cơ sở vật chất tốt, giáo trình được soạn bởi cựu examiner. Giáo viên siêu nhiệt tình...",
    cmtSrc: "Facebook",
  },
  {
    id: 6,
    name: "Lý Vĩnh Quân",
    cmt: "Mình đã học xong 2 khoá ở Ielt Việt rồi và trường oke cực. Cơ sở vật chất tốt, giáo trình được soạn bởi cựu examiner của British Councils. Giáo viên siêu nhiệt tình...",
    cmtSrc: "Facebook",
  },
];

const IELTSROADMAP = [
  {
    id: 1,
    cate: 1,
    title: "IELTS Foundation",
    price: 6288000,
    duration: "24 giờ (6 tuần)",
    target: [
      "Đầu vào: A2 | Đầu ra: B1+",
      "Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi",
      "Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp",
      "Học phương pháp làm bài thi IELTS từng bước",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 2,
    cate: 2,
    title: "Pre-IELTS",
    price: 9889000,
    duration: "36 giờ (8 tuần)",
    target: [
      "Đầu vào: A2 | Đầu ra: B1.1+",
      "Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi",
      "Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp",
      "Học phương pháp làm bài thi IELTS từng bước",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 3,
    cate: 3,
    title: "Pre-IELTS 5.5",
    price: 9889000,
    duration: "32 giờ (6 tuần)",
    target: [
      "Đầu vào: A2 | Đầu ra: B1.2+",
      "Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi",
      "Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp",
      "Học phương pháp làm bài thi IELTS từng bước",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 4,
    cate: 3,
    title: "Pre-IELTS 5.5-1",
    price: 7777000,
    duration: "28 giờ (5 tuần)",
    target: [
      "Đầu vào: A2 | Đầu ra: B1.3+",
      "Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi",
      "Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp",
      "Học phương pháp làm bài thi IELTS từng bước",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 5,
    cate: 4,
    title: "Pre-IELTS 6.5-1",
    price: 8888000,
    duration: "28 giờ (5 tuần)",
    target: [
      "Đầu vào: A2 | Đầu ra: B1.4+",
      "Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi",
      "Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp",
      "Học phương pháp làm bài thi IELTS từng bước",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 6,
    cate: 5,
    title: "Pre-IELTS 7.5-1",
    price: 1111000,
    duration: "28 giờ (5 tuần)",
    target: [
      "Đầu vào: A2 | Đầu ra: B1.5+",
      "Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi",
      "Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp",
      "Học phương pháp làm bài thi IELTS từng bước",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 7,
    cate: 5,
    title: "Pre-IELTS 7.5-2",
    price: 2222000,
    duration: "28 giờ (5 tuần)",
    target: [
      "Đầu vào: A2 | Đầu ra: B1.6+",
      "Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi",
      "Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp",
      "Học phương pháp làm bài thi IELTS từng bước",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 8,
    cate: 5,
    title: "Pre-IELTS 7.5-3",
    price: 3333000,
    duration: "28 giờ (5 tuần)",
    target: [
      "Đầu vào: A2 | Đầu ra: B1.7+",
      "Phát triển từ vựng và kỹ năng đọc, viết phù hợp với độ tuổi",
      "Luyện nghe qua các chủ đề quen thuộc, tạo nền tảng giao tiếp",
      "Học phương pháp làm bài thi IELTS từng bước",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
];

const COURSE4SKILLS = [
  {
    id: 1,
    title: "Khóa học IELTS 1",
    duration: "36 giờ (8 tuần)",
    entryPoint: "3.5-4.0",
    outputPoint: "4.5+",
    price: 9448000,
    commitment: [
      "Học hiệu quả, nhanh hơn 40%",
      "Giảng viên Bản Ngữ",
      "Đội ngũ hỗ trợ IELTS người Việt",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 2,
    title: "Khóa học IELTS 2",
    duration: "42 giờ (9 tuần)",
    entryPoint: "4.0-5.5",
    outputPoint: "5.5+",
    price: 1111000,
    commitment: [
      "Học hiệu quả, nhanh hơn 40%",
      "Giảng viên Bản Ngữ",
      "Đội ngũ hỗ trợ IELTS người Việt",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 3,
    title: "Khóa học IELTS 3",
    duration: "36 giờ (8 tuần)",
    entryPoint: "5.5-6.0",
    outputPoint: "6.5+",
    price: 8888000,
    commitment: [
      "Học hiệu quả, nhanh hơn 40%",
      "Giảng viên Bản Ngữ",
      "Đội ngũ hỗ trợ IELTS người Việt",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
  {
    id: 4,
    title: "Khóa học IELTS 4",
    duration: "13 giờ (2 tuần)",
    entryPoint: "8.0-8.5",
    outputPoint: "9.0",
    price: 9999999,
    commitment: [
      "Học hiệu quả, nhanh hơn 40%",
      "Giảng viên Bản Ngữ",
      "Đội ngũ hỗ trợ IELTS người Việt",
    ],
    image: "https://cdn-icons-png.flaticon.com/128/6499/6499530.png",
  },
];

export const DATA = {
  REVIEWS,
  CATEGORIES,
  SLOGANS,
  LEARNERS,
  IELTSROADMAP,
  COURSE4SKILLS,
};

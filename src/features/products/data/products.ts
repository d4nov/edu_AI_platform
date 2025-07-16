// import reactImage from '@/assets/images/react.png'
import type { Product } from '@/features/products/types/product.type.ts'

export const communicateList: Product[] = [
  {
    id: 1,
    name: 'Giao tiếp cơ bản 1',
    price: 290000,
    image: 'https://i.imgur.com/abc123-react1.png',
    description:
      'Khóa học giúp người mới làm quen với các tình huống giao tiếp tiếng Anh hàng ngày: chào hỏi, giới thiệu bản thân, hỏi đường, mua sắm... Thiết kế với bài thực hành mô phỏng, giúp học viên tự tin sử dụng câu cơ bản trong đời sống.',
    views: 480,
    duration: '15h 30m',
    rating: 3.2,
  },
  {
    id: 2,
    name: 'Giao tiếp cơ bản 2',
    price: 590000,
    image: 'https://i.imgur.com/def456-react2.png',
    description:
      'Nâng cao từ phần 1 với các chủ đề mở rộng như kỹ năng trình bày, nói về sở thích, cảm xúc, đặt câu hỏi sâu hơn. Kèm bài tập tương tác và phản hồi giúp phản xạ giao tiếp của bạn linh hoạt hơn.',
    views: 520,
    duration: '18h',
    rating: 3.8,
  },
  {
    id: 3,
    name: 'Giao tiếp cơ bản 3',
    price: 990000,
    image: 'https://i.imgur.com/ghi789-react3.png',
    description:
      'Khóa học tăng cường phản xạ nghe – nói thông qua các tình huống mô phỏng thực tế: tại nhà, văn phòng, hội thoại nhóm. Kết thúc bạn sẽ giao tiếp trôi chảy hơn và tự tin xử lý tình huống bất ngờ.',
    views: 600,
    duration: '20h',
    rating: 4.0,
  },
]

export const toeicList: Product[] = [
  {
    id: 10,
    name: 'TOEIC 450+ (Online)',
    price: 3200000,
    oldPrice: 4000000,
    image: 'https://i.imgur.com/toeic450.png',
    description:
      'Giúp bạn làm quen với cấu trúc đề TOEIC, nâng cao phản xạ nghe – đọc. Có hướng dẫn chiến lược từng phần và bài tập thực hành hàng tuần.',
    views: 900,
    duration: '30h',
    rating: 3.4,
  },
  {
    id: 11,
    name: 'TOEIC 550+ (Online)',
    price: 3500000,
    oldPrice: 4500000,
    image: 'https://i.imgur.com/toeic550.png',
    description:
      'Mở rộng phần đọc hiểu và ngữ pháp xuất hiện trong đề, tích hợp bài nghe nâng cao giúp cải thiện tốc độ và độ chính xác.',
    views: 1100,
    duration: '35h',
    rating: 3.7,
  },
  {
    id: 12,
    name: 'TOEIC 650+ (Online)',
    price: 3800000,
    oldPrice: 4800000,
    image: 'https://i.imgur.com/toeic650.png',
    description:
      'Tăng cường kỹ năng phân tích đề dài, paraphrase, suy luận logic. Bao gồm 5 đề thi thử và feedback chi tiết về lỗi.',
    views: 1250,
    duration: '38h',
    rating: 4.0,
  },
  {
    id: 13,
    name: 'TOEIC 750+ (Online)',
    price: 4200000,
    oldPrice: 5200000,
    image: 'https://i.imgur.com/toeic750.png',
    description:
      'Phù hợp với người cần điểm TOEIC cao để tốt nghiệp hoặc tuyển dụng. Cung cấp đầy đủ đề thi mô phỏng, kỹ thuật xử lý stress khi làm bài.',
    views: 1400,
    duration: '40h',
    rating: 4.3,
  },
  {
    id: 14,
    name: 'TOEIC 900+ (Online)',
    price: 4800000,
    oldPrice: 6000000,
    image: 'https://i.imgur.com/toeic900.png',
    description:
      'Khóa chuyên sâu cho mục tiêu tối đa 990. Bao gồm bài thi thực chiến, chữa đề chi tiết và kỹ năng xử lý câu hỏi khó.',
    views: 1600,
    duration: '45h',
    rating: 4.8,
  },
]

export const ieltsList: Product[] = [
  {
    id: 20,
    name: 'IELTS Cơ bản (3.5–5.0)',
    price: 4500000,
    image: 'https://i.imgur.com/ielts35-50.png',
    description:
      'Thiết kế cho người mất gốc; học phát âm, từ vựng cơ bản, cấu trúc câu và viết câu đơn. Có kiểm tra đầu vào, phân chia lớp theo năng lực.',
    views: 800,
    duration: '50h',
    rating: 3.3,
  },
  {
    id: 21,
    name: 'IELTS 5.5+',
    price: 5000000,
    image: 'https://i.imgur.com/ielts55.png',
    description:
      'Phát triển kỹ năng IELTS 4 kỹ năng: nghe, đọc, viết đoạn và nói. Cung cấp bài mẫu Band 6+, bài tập có hướng dẫn từng bước.',
    views: 950,
    duration: '60h',
    rating: 4.0,
  },
  {
    id: 22,
    name: 'IELTS 6.5+',
    price: 5500000,
    image: 'https://i.imgur.com/ielts65.png',
    description:
      'Tập trung làm đề Full Test, cải thiện Band Speaking thông qua các buổi 1‑1. Có feedback trực tiếp và bài tập nâng cao viết Task 2.',
    views: 1150,
    duration: '70h',
    rating: 4.4,
  },
  {
    id: 23,
    name: 'IELTS 7.5+',
    price: 6000000,
    image: 'https://i.imgur.com/ielts75.png',
    description:
      'Khóa nâng cao cho mục tiêu band 7.5+. Bài thi mô phỏng, chữa đề chuyên sâu, chiến thuật xử lý bài nghe dài và phong cách viết học thuật.',
    views: 1300,
    duration: '80h',
    rating: 4.7,
  },
]

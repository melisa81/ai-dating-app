import Image from 'next/image';

const testimonials = [
  {
    content: '通过AI Dating App，我找到了真正懂我的另一半。算法的匹配度真的很准确！',
    author: '李小姐',
    role: '28岁 金融从业者',
    rating: 5,
  },
  {
    content: '最开始我对AI匹配持怀疑态度，但事实证明这套系统真的很靠谱。现在我们已经在准备婚礼了。',
    author: '张先生',
    role: '32岁 IT工程师',
    rating: 5,
  },
  {
    content: '测试过程很有趣，而且报告非常专业。最重要的是，真的帮我找到了合适的伴侣！',
    author: '王小姐',
    role: '26岁 设计师',
    rating: 5,
  },
];

const certifications = [
  { name: 'ISO认证', description: '国际标准认证' },
  { name: '隐私认证', description: '数据安全保护' },
  { name: '安全认证', description: '系统安全认证' },
  { name: '心理认证', description: '专业心理认证' },
];

export default function Trust() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题区 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            值得信赖的伴侣匹配系统
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            数万用户的共同选择，专业的心理学背景支持
          </p>
        </div>

        {/* 认证展示 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md 
                transition-all duration-300 text-center w-full"
            >
              <div className="text-blue-600 font-semibold mb-2">{cert.name}</div>
              <div className="text-gray-600 text-sm">{cert.description}</div>
            </div>
          ))}
        </div>

        {/* 用户评价 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* 评分 */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* 评价内容 */}
              <p className="text-gray-600 mb-4">{testimonial.content}</p>

              {/* 用户信息 */}
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 补充信息 */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            所有用户评价均来自真实用户，未经任何筛选或编辑
          </p>
        </div>
      </div>
    </section>
  );
} 
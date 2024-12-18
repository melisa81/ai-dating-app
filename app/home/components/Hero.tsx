import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-70" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 主标题 */}
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            AI驱动的智能匹配
            <br />
            找到你的理想伴侣
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            通过先进的AI算法和心理学原理，我们帮助你找到最适合的伴侣
            <br />
            <span className="text-blue-600 font-semibold">95% 的匹配准确率</span>
          </p>

          {/* CTA按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/test"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full 
                font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300
                hover:scale-105"
            >
              开始测试
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold text-lg
                shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200
                hover:border-blue-200"
            >
              了解更多
            </Link>
          </div>

          {/* 数据展示 */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50万+', label: '活跃用户' },
              { number: '95%', label: '匹配准确率' },
              { number: '200+', label: '成功案例' },
              { number: '4.9/5', label: '用户评分' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
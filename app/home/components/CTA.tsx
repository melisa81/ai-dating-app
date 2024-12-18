'use client'

import { useRouter } from 'next/navigation'
import { IconArrowRight } from './icons';

export default function CTA() {
  const router = useRouter()

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* 主标题 */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            开启你的配对之旅
          </h2>

          {/* 描述文本 */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            只需简单几步，让AI帮你找到最适合的伴侣
          </p>

          {/* 步骤说明 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: '01',
                title: '完成测试',
                description: '回答精心设计的性格测试问题',
              },
              {
                number: '02',
                title: '获取报告',
                description: '收到详细的个性化分析报告',
              },
              {
                number: '03',
                title: '开始匹配',
                description: '查看AI推荐的最佳匹配对象',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-200 text-xl mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>

          {/* 添加开始测试按钮 */}
          <button
            onClick={() => router.push('/test')}
            className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold
              hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            开始测试
          </button>

          {/* 补充信息 */}
          <p className="mt-8 text-sm text-blue-100">
            完整测试约需15分钟 · 获取专业报告 · 匹配优质伴侣
          </p>
        </div>
      </div>
    </section>
  )
} 
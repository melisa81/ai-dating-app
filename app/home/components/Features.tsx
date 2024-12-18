import { IconBrain, IconChartPie, IconHeart, IconShieldLock } from './icons';

const features = [
  {
    icon: IconBrain,
    title: 'AI智能算法',
    description: '基于深度学习的多维度匹配系统，准确预测伴侣相容性',
  },
  {
    icon: IconChartPie,
    title: '个性化分析',
    description: '全方位的性格特征分析，深入了解自己和潜在伴侣',
  },
  {
    icon: IconHeart,
    title: '科学匹配',
    description: '结合心理学理论，确保匹配结果的科学性和可靠性',
  },
  {
    icon: IconShieldLock,
    title: '隐私保护',
    description: '严格的数据加密和隐私保护机制，确保个人信息安全',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题区 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            科技赋能，精准匹配
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们运用先进的AI技术和专业的心理学知识，为你提供最精准的伴侣匹配服务
          </p>
        </div>

        {/* 特性网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 
                transition-colors duration-300 group"
            >
              <div className="w-12 h-12 mb-4 text-blue-600 group-hover:text-blue-700">
                <feature.icon />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 补充说明 */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            我们的匹配系统基于
            <span className="text-blue-600 font-semibold">50万+真实用户数据</span>
            训练，持续优化算法以提供最准确的匹配结果
          </p>
        </div>
      </div>
    </section>
  );
} 
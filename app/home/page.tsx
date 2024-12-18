import { Metadata } from 'next';
import Hero from './components/Hero';
import Features from './components/Features';
import Trust from './components/Trust';
import CTA from './components/CTA';

export const metadata: Metadata = {
  title: 'AI Dating App - 首页',
  description: '智能匹配你的理想伴侣，基于AI的科学匹配系统',
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 核心价值展示区 */}
      <Hero />
      
      {/* 特性展示区 */}
      <Features />
      
      {/* 信任建设区 */}
      <Trust />
      
      {/* 行动召唤区 */}
      <CTA />
    </div>
  );
} 
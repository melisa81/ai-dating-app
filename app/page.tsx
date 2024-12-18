import { Metadata } from 'next';
import Hero from './home/components/Hero';
import Features from './home/components/Features';
import Trust from './home/components/Trust';
import CTA from './home/components/CTA';

export const metadata: Metadata = {
  title: 'AI Dating App - 首页',
  description: '智能匹配你的理想伴侣，基于AI的科学匹配系统',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Trust />
      <CTA />
    </div>
  );
}

import { Metadata } from 'next';
import TestAnalysisClient from './components/TestAnalysisClient';

export const metadata: Metadata = {
  title: 'AI Dating App - 测试分析结果',
  description: '查看你的个性化匹配分析报告',
};

export default function TestAnalysisPage() {
  return <TestAnalysisClient />;
} 
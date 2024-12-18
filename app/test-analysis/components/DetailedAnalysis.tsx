'use client'

import { useState } from 'react';
import type { TestResult } from '../types';
import { IconBrain, IconChartPie, IconHeart } from '../../home/components/icons';

interface Props {
  result?: TestResult;
  loading?: boolean;
}

export default function DetailedAnalysis({ result, loading = false }: Props) {
  const [activeTab, setActiveTab] = useState<'traits' | 'potential' | 'science'>('traits');

  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-96 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      {/* 标签页导航 */}
      <div className="flex gap-4 border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('traits')}
          className={`pb-4 px-4 text-lg font-medium transition-colors
            ${activeTab === 'traits' 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          个性特征解读
        </button>
        <button
          onClick={() => setActiveTab('potential')}
          className={`pb-4 px-4 text-lg font-medium transition-colors
            ${activeTab === 'potential'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          关系潜力评估
        </button>
        <button
          onClick={() => setActiveTab('science')}
          className={`pb-4 px-4 text-lg font-medium transition-colors
            ${activeTab === 'science'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
            }`}
        >
          科学依据
        </button>
      </div>

      {/* 个性特征内容 */}
      {activeTab === 'traits' && (
        <div className="space-y-8">
          {/* 优势特质 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              <IconBrain className="w-6 h-6 inline-block mr-2 text-blue-600" />
              优势特质
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.traits.strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-blue-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-800">{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 潜在风险 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              <IconChartPie className="w-6 h-6 inline-block mr-2 text-yellow-600" />
              需要注意
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.traits.risks.map((risk, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-yellow-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></div>
                  <span className="text-gray-800">{risk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 个性标签 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              <IconHeart className="w-6 h-6 inline-block mr-2 text-purple-600" />
              个性标签
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.traits.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 关系潜力内容 */}
      {activeTab === 'potential' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 短期发展 */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                短期发展预测
              </h4>
              <p className="text-gray-600">{result.potential.shortTerm}</p>
            </div>
            
            {/* 长期稳定性 */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                长期稳定性
              </h4>
              <p className="text-gray-600">{result.potential.longTerm}</p>
            </div>
          </div>

          {/* 潜在问题预警 */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">需要注意的问题</h4>
            <ul className="space-y-3">
              {result.potential.warnings.map((warning, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-red-50 rounded-lg"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">{warning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 发展建议 */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">发展建议</h4>
            <ul className="space-y-3">
              {result.potential.suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 bg-green-50 rounded-lg"
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 科学依据内容 */}
      {activeTab === 'science' && (
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              分析模型
            </h4>
            <p className="text-gray-600">
              我们的匹配系统基于���进的机器学习算法,结合心理学中的"大五人格理论"和"依恋理论",
              通过分析超过50个维度的个性特征,为您提供科学、客观的匹配建议。
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              数据支持
            </h4>
            <p className="text-gray-600">
              系统基于50万+真实用户数据训练,预测准确率达到95%。所有数据均经过脱敏处理,
              确保用户隐私安全。
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              持续优化
            </h4>
            <p className="text-gray-600">
              我们的AI模型会不断学习新的数据,优化匹配算法,为用户提供越来越准确的分析结果。
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 
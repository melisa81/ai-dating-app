'use client'

import type { TestResult } from '../types';
import { IconArrowRight } from '../../home/components/icons';

interface Props {
  result?: TestResult;
  loading?: boolean;
}

export default function Suggestions({ result, loading = false }: Props) {
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-48 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">改善建议</h2>
      
      {/* 建议列表 */}
      <div className="space-y-6">
        {result.potential.suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl
              hover:from-blue-100 hover:to-purple-100 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <p className="text-gray-800 text-lg">{suggestion}</p>
                <button className="mt-4 text-blue-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                  了解更多
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 补充说明 */}
      <div className="mt-8 p-6 bg-gray-50 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          温馨提示
        </h3>
        <p className="text-gray-600">
          以上建议基于AI分析结果，仅供参考。每段关系都是独特的，建议结合实际情况灵活运用。
          如需更专业的建议，欢迎咨询我们的情感专家。
        </p>
      </div>

      {/* 行动按钮 */}
      <div className="mt-8 flex justify-center">
        <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold
          hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
          咨询专家
        </button>
      </div>
    </div>
  );
} 
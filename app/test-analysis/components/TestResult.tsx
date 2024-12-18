'use client'

import { useEffect, useState } from 'react';
import type { TestResult, ScoreLevel, ScoreColors } from '../types';

// 根据分数获取颜色配置
const getScoreColors = (score: number): ScoreColors => {
  if (score >= 80) {
    return {
      from: 'from-green-500',
      to: 'to-green-600',
      text: 'text-green-700'
    };
  } else if (score >= 60) {
    return {
      from: 'from-yellow-400',
      to: 'to-yellow-500',
      text: 'text-yellow-700'
    };
  } else {
    return {
      from: 'from-red-400',
      to: 'to-red-500',
      text: 'text-red-700'
    };
  }
};

// 获取评分等级
const getScoreLevel = (score: number): ScoreLevel => {
  if (score >= 80) return 'high';
  if (score >= 60) return 'medium';
  return 'low';
};

interface Props {
  result?: TestResult;
  loading?: boolean;
}

export default function TestResult({ result, loading = false }: Props) {
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="h-48 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  if (!result) return null;

  const colors = getScoreColors(result.overallScore);
  const level = getScoreLevel(result.overallScore);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      {/* 分数和评价 */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className={`text-5xl font-bold ${colors.text}`}>
              {result.overallScore}
            </div>
            <div className="text-gray-500">分</div>
          </div>
          
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${i < result.starRating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-lg text-gray-600">{result.shortComment}</p>
        </div>
        
        <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${colors.from} ${colors.to} 
          flex items-center justify-center text-white text-xl font-bold`}>
          {level === 'high' && '非常匹配'}
          {level === 'medium' && '较为匹配'}
          {level === 'low' && '匹配度低'}
        </div>
      </div>

      {/* 维度得分 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(result.dimensions).map(([key, value]) => (
          <div key={key} className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">
              {key === 'personality' && '性格特征'}
              {key === 'values' && '价值观'}
              {key === 'lifestyle' && '生活方式'}
              {key === 'emotion' && '感情态度'}
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {value}<span className="text-sm">分</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
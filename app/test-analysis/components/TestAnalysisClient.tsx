'use client'

import { useState, useEffect } from 'react'
import type { TestResult as TestResultType } from '../types'
import TestResult from './TestResult'
import DetailedAnalysis from './DetailedAnalysis'
import Suggestions from './Suggestions'

export default function TestAnalysisClient() {
  const [result, setResult] = useState<TestResultType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: 从API获取测试结果
    // 这里暂时使用模拟数据
    setTimeout(() => {
      setResult({
        overallScore: 85,
        starRating: 4,
        shortComment: "你们的匹配度相当不错！",
        dimensions: {
          personality: 88,
          values: 82,
          lifestyle: 85,
          emotion: 84
        },
        traits: {
          strengths: ["性格开朗", "善于沟通", "有同理心"],
          risks: ["工作压力较大", "对未来规划不够明确"],
          tags: ["乐观", "负责", "有爱心", "独立"]
        },
        potential: {
          shortTerm: "短期发展潜力很好",
          longTerm: "长期关系稳定性强",
          warnings: ["需要更多的沟通和理解"],
          suggestions: ["多创造共同话题", "保持开放和真诚的态度"]
        }
      })
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <TestResult result={result} loading={loading} />
        <DetailedAnalysis result={result} loading={loading} />
        <Suggestions result={result} loading={loading} />
      </div>
    </div>
  )
} 
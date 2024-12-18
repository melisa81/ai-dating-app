// 测试结果的类型定义
export interface TestResult {
  overallScore: number;  // 0-100的总分
  starRating: number;    // 1-5星评级
  shortComment: string;  // 简短评价
  dimensions: {
    personality: number;    // 性格特征匹配度
    values: number;        // 价值观契合度
    lifestyle: number;     // 生活方式匹配度
    emotion: number;       // 感情态度相似度
  };
  traits: {
    strengths: string[];   // 优势特质
    risks: string[];       // 潜在风险
    tags: string[];        // 个性标签
  };
  potential: {
    shortTerm: string;     // 短期发展预测
    longTerm: string;      // 长期稳定性
    warnings: string[];    // 潜在问题预警
    suggestions: string[]; // 发展建议
  };
}

// 评分等级的类型定义
export type ScoreLevel = 'low' | 'medium' | 'high';

// 评分颜色的类型定义
export interface ScoreColors {
  from: string;
  to: string;
  text: string;
} 
// 匹配算法的核心计算函数
export function calculateMatchScore(user1: UserProfile, user2: UserProfile) {
  const weights = {
    basicInfo: 0.2,      // 基础信息权重
    personality: 0.4,    // 性格特征权重
    preferences: 0.4     // 伴侣期望权重
  }

  // 1. 基础信息匹配度计算
  const basicScore = calculateBasicScore(user1, user2)
  
  // 2. 性格特征匹配度计算（考虑互补和相似）
  const personalityScore = calculatePersonalityScore(
    user1.personalityAnswers,
    user2.personalityAnswers
  )
  
  // 3. 伴侣期望匹配度计算
  const preferenceScore = calculatePreferenceScore(
    user1.partnerPreferences,
    user2.profile,
    user2.partnerPreferences,
    user1.profile
  )

  // 加权计算总分
  return (
    basicScore * weights.basicInfo +
    personalityScore * weights.personality +
    preferenceScore * weights.preferences
  ) * 100
}

// 性格特征匹配度计算
function calculatePersonalityScore(answers1: Record<number, number>, answers2: Record<number, number>) {
  const dimensions = {
    extraversion: [1],          // 外向性题目ID
    openness: [2],              // 开放性题目ID
    agreeableness: [3],         // 亲和性题目ID
    conscientiousness: [4],     // 尽责性题目ID
    emotionalStability: [5]     // 情绪稳定性题目ID
  }

  // 某些维度倾向于互补（如外向性）
  const complementaryTraits = ['extraversion']
  
  let totalScore = 0
  let dimensionCount = Object.keys(dimensions).length

  for (const [dimension, questionIds] of Object.entries(dimensions)) {
    const score1 = calculateDimensionScore(answers1, questionIds)
    const score2 = calculateDimensionScore(answers2, questionIds)

    if (complementaryTraits.includes(dimension)) {
      // 互补性计算：差异越大分数越高
      totalScore += 1 - Math.abs(score1 - score2) / 4
    } else {
      // 相似性计算：差异越小分数越高
      totalScore += 1 - Math.abs(score1 - score2) / 4
    }
  }

  return totalScore / dimensionCount
}

// 伴侣期望匹配度计算
function calculatePreferenceScore(
  preferences1: string[],
  profile2: UserProfile,
  preferences2: string[],
  profile1: UserProfile
) {
  // 双向匹配：两个人的期望都要考虑
  const match1to2 = calculateDirectionalMatch(preferences1, profile2)
  const match2to1 = calculateDirectionalMatch(preferences2, profile1)
  
  // 取两个方向匹配度的平均值
  return (match1to2 + match2to1) / 2
} 
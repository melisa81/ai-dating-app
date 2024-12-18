'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// 步骤标题
const steps = [
  { number: 1, title: '基础信息' },
  { number: 2, title: '个性特征' },
  { number: 3, title: '伴侣期望' },
  { number: 4, title: '查看结果' }
]

// 在文件顶部添加测试题数据
const personalityQuestions = [
  {
    id: 1,
    text: "我倾向于在社交场合成为话题的中心",
    category: "外向性"
  },
  {
    id: 2,
    text: "我喜欢尝试新事物和新体验",
    category: "开放性"
  },
  {
    id: 3,
    text: "我会为他人着想，乐于助人",
    category: "亲和性"
  },
  {
    id: 4,
    text: "我是一个有条理、做事认真的人",
    category: "尽责性"
  },
  {
    id: 5,
    text: "我能很好地控制自己的情绪",
    category: "情绪稳定性"
  }
  // 可以继续添加更多问题...
]

// 在文件顶部添加伴侣期望相关的数据
const partnerPreferences = [
  {
    id: 1,
    category: "性格特征",
    options: [
      { value: "outgoing", label: "外向开朗" },
      { value: "stable", label: "性格稳重" },
      { value: "creative", label: "富有创造力" },
      { value: "rational", label: "理性务实" },
      { value: "gentle", label: "温柔体贴" }
    ]
  },
  {
    id: 2,
    category: "生活方式",
    options: [
      { value: "workaholic", label: "事业为重" },
      { value: "balanced", label: "工作生活平衡" },
      { value: "relaxed", label: "享受生活" },
      { value: "active", label: "积极向上" },
      { value: "homebody", label: "居家型" }
    ]
  },
  {
    id: 3,
    category: "价值观",
    options: [
      { value: "family", label: "重视家庭" },
      { value: "career", label: "追求事业" },
      { value: "freedom", label: "向往自由" },
      { value: "stability", label: "追求稳定" },
      { value: "growth", label: "注重成长" }
    ]
  }
]

export default function TestPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    gender: '',
    age: '18',
    personalityAnswers: {} as Record<number, number>,
    partnerPreferences: [] as string[],
    partnerAgeMin: '',
    partnerAgeMax: ''
  })

  // 渲染步骤指示器
  const renderStepIndicator = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex justify-between">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
              ${currentStep === step.number 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                : currentStep > step.number 
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {step.number}
            </div>
            <span className={`text-sm ${
              currentStep === step.number ? 'text-blue-600 font-medium' : 'text-gray-500'
            }`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )

  // 渲染基础信息表单
  const renderBasicInfo = () => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800">基础信息</h2>
      
      {/* 性别选择 */}
      <div className="mb-8">
        <label className="block text-gray-700 mb-4">性别</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            className={`p-6 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-300
              ${formData.gender === 'male' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-200'}`}
            onClick={() => setFormData(prev => ({ ...prev, gender: 'male' }))}
          >
            <span className="text-3xl">👨</span>
            <span>男</span>
          </button>
          <button
            className={`p-6 rounded-xl border-2 flex flex-col items-center gap-2 transition-all duration-300
              ${formData.gender === 'female' 
                ? 'border-purple-500 bg-purple-50' 
                : 'border-gray-200 hover:border-purple-200'}`}
            onClick={() => setFormData(prev => ({ ...prev, gender: 'female' }))}
          >
            <span className="text-3xl">👩</span>
            <span>女</span>
          </button>
        </div>
      </div>

      {/* 年龄选择 */}
      <div className="mb-8">
        <label className="block text-gray-700 mb-4">年龄</label>
        <select
          value={formData.age}
          onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
          className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 
            outline-none transition-colors duration-300"
        >
          {[...Array(83)].map((_, i) => (
            <option key={i + 18} value={i + 18}>
              {i + 18} 岁
            </option>
          ))}
        </select>
      </div>

      {/* 下一步按钮 */}
      <button
        onClick={() => setCurrentStep(2)}
        disabled={!formData.gender}
        className={`w-full py-4 rounded-full font-medium text-white text-lg transition-all duration-300
          ${formData.gender 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-[1.02]' 
            : 'bg-gray-300 cursor-not-allowed'}`}
      >
        下一步
      </button>
    </div>
  )

  // 个性特征测试渲染函数
  const renderPersonalityTest = () => {
    const currentQuestion = personalityQuestions[
      Object.keys(formData.personalityAnswers).length
    ]

    if (!currentQuestion) {
      // 所有问题都已回答，进入下一步
      setCurrentStep(3)
      return null
    }

    return (
      <div className="bg-white rounded-2xl shadow-lg p-8">
        {/* 进度条 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">问题 {currentQuestion.id}/5</span>
            <span className="text-sm text-blue-600">{currentQuestion.category}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentQuestion.id / personalityQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* 问题内容 */}
        <h2 className="text-xl font-semibold mb-8 text-gray-800">
          {currentQuestion.text}
        </h2>

        {/* 选项列表 */}
        <div className="space-y-4">
          {[
            { value: 5, label: '非常符合' },
            { value: 4, label: '比较符合' },
            { value: 3, label: '一般' },
            { value: 2, label: '比较不符合' },
            { value: 1, label: '完全不符合' }
          ].map((option) => (
            <button
              key={option.value}
              className="w-full p-4 text-left rounded-xl border-2 border-gray-200 
                hover:border-blue-500 hover:bg-blue-50 transition-all duration-300
                flex justify-between items-center group"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  personalityAnswers: {
                    ...prev.personalityAnswers,
                    [currentQuestion.id]: option.value
                  }
                }))
              }}
            >
              <span>{option.label}</span>
              <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                选择
              </span>
            </button>
          ))}
        </div>

        {/* 进度提示 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          还剩 {personalityQuestions.length - Object.keys(formData.personalityAnswers).length} 题
        </div>
      </div>
    )
  }

  // 添加伴侣期望渲染函数
  const renderPartnerPreferences = () => (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">伴侣期望</h2>
      
      {/* 年龄范围选择 */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">期望年龄</h3>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-2">最小年龄</label>
            <select
              value={formData.partnerAgeMin || '18'}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                partnerAgeMin: e.target.value
              }))}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 
                outline-none transition-colors duration-300"
            >
              {[...Array(83)].map((_, i) => (
                <option 
                  key={i + 18} 
                  value={i + 18}
                  disabled={formData.partnerAgeMax && (i + 18) > parseInt(formData.partnerAgeMax)}
                >
                  {i + 18} 岁
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-2">最大年龄</label>
            <select
              value={formData.partnerAgeMax || '100'}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                partnerAgeMax: e.target.value
              }))}
              className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 
                outline-none transition-colors duration-300"
            >
              {[...Array(83)].map((_, i) => (
                <option 
                  key={i + 18} 
                  value={i + 18}
                  disabled={formData.partnerAgeMin && (i + 18) < parseInt(formData.partnerAgeMin)}
                >
                  {i + 18} 岁
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-8">
        选择你期望的伴侣特质（可多选，建议每类选择1-2项）
      </p>

      <div className="space-y-8">
        {partnerPreferences.map((section) => (
          <div key={section.id}>
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              {section.category}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {section.options.map((option) => {
                const isSelected = formData.partnerPreferences.includes(option.value)
                return (
                  <button
                    key={option.value}
                    className={`p-3 rounded-xl border-2 text-left transition-all duration-300
                      ${isSelected 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-blue-200 text-gray-600'}`}
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        partnerPreferences: isSelected
                          ? prev.partnerPreferences.filter(v => v !== option.value)
                          : [...prev.partnerPreferences, option.value]
                      }))
                    }}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* 下一步按钮 */}
      <button
        onClick={() => router.push('/test-analysis')}
        disabled={formData.partnerPreferences.length === 0 || !formData.partnerAgeMin || !formData.partnerAgeMax}
        className={`w-full py-4 rounded-full font-medium text-white text-lg mt-8
          transition-all duration-300
          ${(formData.partnerPreferences.length > 0 && formData.partnerAgeMin && formData.partnerAgeMax)
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:scale-[1.02]' 
            : 'bg-gray-300 cursor-not-allowed'}`}
      >
        查看结果
      </button>

      {/* 选择提示 */}
      <p className="text-center text-sm text-gray-500 mt-4">
        已选择 {formData.partnerPreferences.length} 项特质
      </p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {renderStepIndicator()}
        {currentStep === 1 && renderBasicInfo()}
        {currentStep === 2 && renderPersonalityTest()}
        {currentStep === 3 && renderPartnerPreferences()}
      </div>
    </div>
  )
} 
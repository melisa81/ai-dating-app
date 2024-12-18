# AI Dating App 项目设计文档

## 项目结构

```
.
├── .git/                   # Git版本控制目录
├── .next/                  # Next.js构建输出目录
├── app/                    # 应用主目录
│   ├── fonts/             # 字体文件目录
│   ├── page.tsx           # 主页面组件
│   ├── layout.tsx         # 全局布局组件
│   ├── favicon.ico        # 网站图标
│   └── globals.css        # 全局样式文件
├── node_modules/          # npm依赖包目录
├── public/                # 静态资源目录
├── .eslintrc.json        # ESLint配置文件
├── .gitignore            # Git忽略文件配置
├── next.config.ts        # Next.js配置文件
├── next-env.d.ts         # Next.js类型声明文件
├── package.json          # 项目配置和依赖管理
├── package-lock.json     # 依赖版本锁定文件
├── postcss.config.mjs    # PostCSS配置文件
├── README.md             # 项目说明文档
├── tailwind.config.ts    # Tailwind CSS配置文件
└── tsconfig.json         # TypeScript配置文件
```

## 技术栈

1. **框架**
   - Next.js - React框架，用于构建服务端渲染和静态网站
   - React - 用户界面库

2. **开发语言**
   - TypeScript - 类型安全的JavaScript超集

3. **样式解决方案**
   - Tailwind CSS - 实用优先的CSS框架
   - PostCSS - CSS处理工具

4. **代码质量**
   - ESLint - 代码检查工具
   - TypeScript - 类型检查

5. **构建工具**
   - npm - 包管理器
   - Next.js内置构建系统

## 项目特点

1. 采用App Router模式的Next.js应用结构
2. 使用TypeScript确保代码类型安全
3. 采用Tailwind CSS实现响应式设计
4. 完整的开发工具链配置（ESLint, PostCSS等）

## 开发注意事项

1. 遵循TypeScript类型系统，确保类型安全
2. 使用Tailwind CSS的工具类进行样式开发
3. 遵循Next.js的文件系统路由约定
4. 注意代码质量，保持ESLint规则一致性 
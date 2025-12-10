eada - 轻量型基础Web项目模板

[![CI](https://github.com/MCQA2580/eada/actions/workflows/ci.yml/badge.svg)](https://github.com/MCQA2580/eada/actions/workflows/ci.yml)

🔍 项目简介

`eada` 是由MCQA2580开发的轻量型基础Web项目模板，具备完整的页面架构、资源组织体系及自动化部署配置。项目采用纯静态开发模式，结构清晰、易于扩展，适用于快速搭建个人主页、静态展示网站、小型工具类Web应用等场景，支持通过GitHub Actions实现代码提交后的自动化构建与部署，开箱即用。

📋 核心特性

- 完整页面体系：包含首页（index.html）、关于页（about/index.html）、归档页（archives/index.html）、提交功能页（submit/index.html）及404错误处理页，覆盖基础Web应用的核心页面需求。

- 规范资源管理：采用CSS、JS、图片资源分离存储的方式，各目录职责明确，便于开发维护与后期迭代。

- 自动化工作流：集成GitHub Actions CI配置，实现代码提交后自动触发构建流程，降低部署成本。

- 良好扩展性：预留响应式样式接口与功能扩展入口，可快速适配移动端、桌面端等多设备场景，支持按需添加交互逻辑。

📂 项目结构

目录/文件路径

核心功能描述

关键操作记录

.github/workflows/

GitHub Actions自动化配置目录，存放CI工作流脚本

创建CI workflow配置文件

about/

「关于我们」页面专属资源目录，含页面入口文件

多次更新index.html页面内容

archives/

内容归档页面资源目录，用于展示历史内容列表

多次更新index.html页面内容

css/

项目样式资源目录，存放全局样式、页面专属样式等

初始提交基础样式文件

images/

图片资源存储目录，含图标、背景图、装饰元素等

初始提交基础图片资源

js/

JavaScript脚本目录，存放交互逻辑、数据处理等代码

初始提交基础脚本文件

submit/

数据提交功能页面目录，如表单提交、信息录入等场景

多次更新index.html页面内容

index.html（根目录）

项目核心入口页面，网站首页展示内容

多次更新页面结构与内容

404.html

页面访问错误时的展示页面，优化用户体验

更新错误页面内容

favicon.ico

项目浏览器图标，提升品牌识别度

初始提交图标文件

🚀 部署与运行指南

1. 环境准备

无特殊依赖环境，仅需满足以下基础条件：

- 拥有GitHub账号（用于代码托管与自动化工作流触发）；

- 可选部署目标：GitHub Pages、Vercel、Netlify、Cloudflare Pages等静态页面托管服务；

- 本地开发推荐工具：VS Code（配合Live Server插件实现热更新预览）。

2. 自动化部署（推荐）

基于GitHub Actions实现提交即部署，步骤如下：

1. 克隆仓库至本地：
        git clone https://github.com/MCQA2580/eada.git
cd eada

2. 根据需求修改项目内容（页面文案、样式、脚本等）；

3. 提交代码至GitHub仓库：
        git add .
git commit -m "feat: 更新项目内容 [具体修改说明]"
git push origin main

4. 代码推送后，GitHub Actions将自动触发CI工作流（配置文件位于.github/workflows/目录），完成构建与部署，可在仓库「Actions」标签页查看流程状态。

3. 本地运行与手动部署

本地预览

克隆仓库后，直接用浏览器打开根目录的index.html文件即可预览基础效果；使用Live Server插件可实现代码修改后的实时页面更新。

手动部署

适用于自定义托管平台场景，步骤如下：

1. 将项目所有文件复制至本地服务器或静态托管平台的根目录；

2. 确保服务器将index.html设置为默认入口文件；

3. 配置域名解析（可选），完成后即可通过域名访问网站。

🛠️ 开发扩展说明

页面内容修改

直接编辑对应页面的HTML文件：

- 首页内容：修改根目录index.html；

- 关于页内容：修改about/index.html；

- 归档/提交页面同理，对应archives/与submit/目录下的index.html。

样式与交互优化

- 样式调整：在css/目录下新增或修改.css文件，通过<link>标签引入对应页面；

- 交互扩展：在js/目录下添加脚本文件，通过<script>标签引入，实现表单验证、数据渲染等功能；

- 资源更新：替换images/目录下的图片资源，或新增图片后在HTML中通过相对路径引用。

🤝 贡献指南

1. Fork本仓库至个人GitHub账号；

2. 创建特性分支（推荐命名规范：feature/功能名称）：
        git checkout -b feature/xxx

3. 提交修改并编写清晰的提交信息：
        git commit -m "feat: 新增xxx功能" 或 "fix: 修复xxx问题"

4. 推送分支至个人仓库：
        git push origin feature/xxx

5. 在原仓库提交Pull Request，描述修改内容与用途，等待审核。

📄 许可证说明

本项目采用MIT开源许可证，允许个人或企业自由使用、修改与二次分发，详情请参考项目根目录的[LICENSE](https://github.com/MCQA2580/eada/blob/main/LICENSE)文件（若未添加，可自行创建并选择MIT协议）。

📞 联系与反馈

- 项目仓库地址：https://github.com/MCQA2580/eada

- 问题反馈：通过GitHub仓库的「Issues」功能提交Bug报告或功能建议；

- 贡献合作：欢迎通过Pull Request参与项目优化，共同完善模板功能。

最后更新时间：2025年12月10日

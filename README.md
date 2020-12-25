- [WebMall](#webmall)
  - [简介](#%E7%AE%80%E4%BB%8B)
  - [前端主要相关技术](#%E5%89%8D%E7%AB%AF%E4%B8%BB%E8%A6%81%E7%9B%B8%E5%85%B3%E6%8A%80%E6%9C%AF)
  - [前端项目结构树](#%E5%89%8D%E7%AB%AF%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84%E6%A0%91)
  - [页面展示](#%E9%A1%B5%E9%9D%A2%E5%B1%95%E7%A4%BA)
  - [后端接口部分图(Swagger生成)](#%E5%90%8E%E7%AB%AF%E6%8E%A5%E5%8F%A3%E9%83%A8%E5%88%86%E5%9B%BEswagger%E7%94%9F%E6%88%90)

# WebMall

组长:[@Kapiushon-HLT](https://github.com/Kapiushon-HLT/WebMall)  
组员:[@deshuo](https://github.com/deng-shuo) , [@hjwforever](https://github.com/hjwforever)

## 简介

WebMall 项目是一个简易的商城系统，采用前后端分离，基于 前端 Vue 及 后端 Spring Boot 2.X 以及相关技术栈开发。  

前台商城系统包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、订单流程、个人订单管理、会员中心、帮助中心等模块。  

后台管理系统包含数据面板、轮播图管理、商品管理、订单管理、会员管理、分类管理、设置等模块。
本仓库中为 WebMall 商城前端的 Vue 项目;

后端基于Spring Boot 的api项目仓库地址:[Kapiushon-HLT/WebMall-api](https://github.com/Kapiushon-HLT/WebMall-api)
后端[在线接口文档](http://api.aruoxi.top:28019/swagger-ui.html)  

WebMall 商城 Vue 版本线上预览地址[WebMall](https://webmall.aruoxi.top)，账号可自行注册，建议使用手机模式打开。

## 前端主要相关技术

- [Vue](https://github.com/vuejs/vue)
- [Vant](https://github.com/youzan/vant)
- [vue2-verify](https://github.com/mizuka-wu/vue2-verify)
- [better-scroll](https://github.com/ustbhuangyi/better-scroll)
- [Vuex](https://github.com/vuejs/vuex)
- [Less](http://lesscss.cn/)

## 前端项目结构树

```code
├─.editorconfig ---------------- // ESLint忽略列表
├─.eslintrc.js ----------------- // ESLint规范代码格式
├─.gitattributes
├─.gitignore ------------------- // git忽略列表
├─.postcssrc.js ---------------- // 导入postcss-pxtorem，设置字体大小，用于移动端适配
├─babel.config.js
├─LICENSE
├─package-lock.json
├─package.json
├─public ----------------------- // 公共资源类
│  ├─favicon.ico
│  ├─index.html
│  └─logo.png
├─README.md -------------------- // README文件
├─server.js -------------------- // 服务器脚本(在build并生成dist目录后，可用作生产环境的线上项目部署)
├─src
│  ├─App.vue
│  ├─assets --------------------- // 静态资源(用作填充为默认图片)
│  │  ├─banner1.jpg -------------- // 轮播图1
│  │  ├─banner2.jpg -------------- // 轮播图2
│  │  ├─banner3.jpg -------------- // 轮播图3
│  │  └─logo.png ----------------- // 项目logo
│  ├─common --------------------- // 通用模块
│  │  ├─js
│  │  │  └─utils.js --------------- // 工具类(含解析查询语句的方法及存储全国地址列表)
│  │  └─style
│  │    ├─base.less -------------- // 基础less样式类
│  │    └─mixin.less ------------- // 混入less样式类
│  ├─components ----------------- // 自定义组件或事件类
│  │  ├─ListScroll.vue ----------- // 列表滚动
│  │  ├─NavBar.vue --------------- // 底部导航栏
│  │  ├─SimpleHeader.vue --------- // 简易顶部栏(含返回及回到主页)
│  │  └─Swiper.vue --------------- // 页面滑动
│  ├─main.js
│  ├─router
│  │  └─index.js
│  ├─service -------------------- // 服务类(将axios请求暴露为函数方法)
│  │  ├─address.js --------------- // 收货地址相关
│  │  ├─cart.js ------------------ // 购物车相关
│  │  ├─good.js ------------------ // 商品相关
│  │  ├─home.js ------------------ // 主页相关(服务器返回主页所需的几组数据，如轮播图列表、热门商品列表等)
│  │  ├─order.js ----------------- // 订单相关
│  │  └─user.js ------------------ // 用户相关
│  ├─store ---------------------- // vuex(全局存储类)
│  │  ├─actions.js
│  │  ├─index.js
│  │  ├─mutations.js
│  │  └─state.js
│  ├─utils
│  │  └─axios.js
│  └─views
│    ├─About.vue ---------------- // 项目相关信息页
│    ├─Address.vue -------------- // 收货地址管理页
│    ├─AddressEdit.vue ---------- // 编辑地址页
│    ├─Cart.vue ----------------- // 购物车页
│    ├─Category.vue ------------- // 商品分类页
│    ├─CreateOrder.vue ---------- // 添加商品订单页
│    ├─Home.vue ----------------- // 首页
│    ├─Login.vue ---------------- // 登录/注册页
│    ├─Order.vue ---------------- // 订单列表页
│    ├─OrderDetail.vue ---------- // 订单详情页(可取消订单)
│    ├─ProductDetail.vue -------- // 商品详情页(可加入购物车或直接下订单)
│    ├─ProductList.vue ---------- // 商品列表页
│    ├─Setting.vue -------------- // 个人信息设置页
│    └─User.vue ----------------- // 用户页(包含"我的订单"、"账号管理"、"地址管理"、"关于我们")
├─static-files ----------------- // 用作README展示
│  ├─WebMall-api-swagger.png
│  ├─商品搜索.png
│  ├─地址管理.png
│  ├─生成订单.png
│  ├─登录.png
│  ├─订单列表.png
│  ├─订单详情.png
│  ├─详情页.png
│  ├─购物车.png
│  └─首页.png
├─vue.config.js
└─yarn.lock
```

## 页面展示

以下为 WebMall 商城 Vue 版本的页面预览：

- 登录页

![登录页](http://img.aruoxi.top/webmall-vue/%E7%99%BB%E5%BD%95.png)

- 首页

![首页](http://img.aruoxi.top/webmall-vue/%E9%A6%96%E9%A1%B5.png)

- 商品搜索

![商品搜索](http://img.aruoxi.top/webmall-vue/%E5%95%86%E5%93%81%E6%90%9C%E7%B4%A2.png)

- 商品详情页

![商品详情页](http://img.aruoxi.top/webmall-vue/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85.png)

- 购物车

![购物车](http://img.aruoxi.top/webmall-vue/%E8%B4%AD%E7%89%A9%E8%BD%A6.png)

- 生成订单

![生成订单](http://img.aruoxi.top/webmall-vue/%E7%94%9F%E6%88%90%E8%AE%A2%E5%8D%95.png)

- 地址管理

![地址管理](http://img.aruoxi.top/webmall-vue/%E5%9C%B0%E5%9D%80%E7%AE%A1%E7%90%86.png)

- 订单列表

![订单列表](http://img.aruoxi.top/webmall-vue/%E8%AE%A2%E5%8D%95%E5%88%97%E8%A1%A8.png)

- 订单详情

![订单详情](http://img.aruoxi.top/webmall-vue/%E8%AE%A2%E5%8D%95%E8%AF%A6%E6%83%85.png)

## 后端接口部分图(Swagger生成)
__!! 详情请看->__[在线接口文档](http://api.aruoxi.top:28019/swagger-ui.html)
![后端接口部分图(Swagger生成)](http://img.aruoxi.top/webmall-vue/WebMall-api-swagger.png)

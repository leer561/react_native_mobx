# React Native 快速开发脚手架

项目基于RN搭建，将会按照以下顺序列出说明
- 安装说明
- 集成的库
- 尚未测试与集成的库
- 文件结构目录以及使用
- RN相关资料


# 安装说明
- 首先请准备好 RN的开发环境，可参照官网或者国内的中文网进行。
- Clone项目后，推荐使用Yarn进行安装，若使用NPM安装，在提示修复后，请进行修复
- 按照各个库的说明进行安装与集成
	>React Navigation 
	请注意按照 [https://reactnavigation.org/docs/en/getting-started.html](https://reactnavigation.org/docs/en/getting-started.html) 说明进行link和修改MainActivity.java
	
	>react-native-vector-icons
	Android已手动设置过，IOS可以参照link的方式进行安装
	字体集成[`Feather`](http://feathericons.com/) [`EvilIcons`](http://evil-icons.io/) 两个线框类图标
- 开两个终端，分别运行
		```
		npm start
		  ```
		  ```
		react-native run-android
		  ```或者 ```
		react-native run-ios
		  ```
	

# 已集成的库
- React Navigation 

     目前顶级导航为Drawer navigation，然后是底部的Tab navigation，每个底部的Tab集成了Stack navigation，
     这样保证侧边栏滑出处于最顶部，
    ![预览]("https://github.com/leer561/react_native_mobx/blob/develop/src/assets/images/1.png" "预览")
    
    navigation并未与Mobx集成，React Navigation自行管理导航相关处理。
    
    [网站](https://reactnavigation.org/docs/en/getting-started.html)

- react-native-vector-icons
    
    用于管理字体图标的图，目前很多UI框架都在使用。
    
    [网站](https://github.com/oblador/react-native-vector-icons)
    
    
- Mobx

    数据管理使用了Mobx，并未使用Redux，主要因为移动端页面内容较少，并且大部分页面之间不会处理相同的业务逻辑，
    因此，选用比较轻量级的Mobx，比较类似于单例模式的使用。
    
    [中文网址](https://cn.mobx.js.org/)
    
- react-native-elements

    比较轻量级的UI库，目前RN的UI库主要表现为两个方向，
    
    一是Android和IOS平台表现为各平台设计规范的，不一致的。
    
    二是两个平台表现一致的，然后分别偏向IOS或者Android的。
    
    所以UI框架后期应该根据设计需求进行调整。
    
    [网站](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)
    
- styled-components
    
    采用Web CSS写法写样式的库，可以引用变量使用，当封装部分样式后，从组件主js文件中分离出样式来。
    
    [网站](https://www.styled-components.com/docs/basics#react-native)

# 尚未测试与集成的库
- 应用部署/热更新-CodePush
    
    解决方案：
    
    >1、CodePush 是微软提供的一套用于热更新 React Native 和 Cordova 应用的服务。
    
    >2、不采用CodePush，自己搭建服务器并实现React Native应用的动态更新相关的方案
- 启动页管理  react-native-splash-screen 
    App启动页设置  [说明](https://github.com/crazycodeboy/react-native-splash-screen)
    
- 消息推送

- 统计模块

- 原生IOS或者Android集成

- 多语言设置

# 文件结构目录以及使用

- 项目文件结构目录
```
project
│   index.js   IOS或Android的入口 
|   app.json   APP的JSON文件
│
└───ios
│   原生 ios 工程
│   
└───android
|   原生 android 工程
|
└───src     react native js 代码目录
    |───App.js      App入口组件以及drawer导航
    |
    |───tab-navigation.js       底部导航文件
    |
    |───assets      资源
    |       |
    |       |───images      图片
    |
    |───common      APP内公用文件，例如组件
    |       |
    |       |───components      公用组件文件夹
    |    
    |───drawer      侧边内容组件  
    |
    |───home        底部Tab Home页的组件文件
    |       |
    |       |───index.js        Home的入口文件，结合Stack navigation
    |       |
    |       |───home.js         Home的组件文件
    |       |
    |       |───components      Home内的组件文件
    |
    |───store        Mobx公共数据管理文件
    |       |     
    |       |───index.js        store的入口文件，融合子store，并且加入插件
    |       |
    |       |───counter.js      counter相关的数据，action等文件
    |   
    |───style        公用样式文件夹
    |       |     
    |       |───variables.js       定义公共样式的文件
               
```
- 样式的使用
     > 1。公共样式主要分为color与size两个部分，使用时引用即可，配合styled-components库，
     使用时，如果样式较多，新建一个style.js文件分离出去，避免出现行数超大的组件文件。
     使用变量可以方便的保持APP的风格统一与易于修改。

     >2。react-native-elements组件可以通过ThemeProvider提供主题，ThemeProvider可以包裹多个组件，但是跨组件不可。
     所以一些常用的可以象是common----component----button里简单封一下。
     
- Mobx的使用
     > 1。主要使用Mobx来处理多页面共用数据的情况，例如home和侧滑页面公用的counter计数。
     如果数据不公共，不需要放入Mobx，维持各个组件自治。
     
     > 2。Mobx生成方式就是单例模式，容易修改数据，所以目前启用严格模式，
     必须要通过action修改，否则容易引发混乱，后期难以调试。

# RN相关资料
  
  - 1 RN环境搭建
  
    按照教程一般没什么问题
    [中文搭建开发环境](https://reactnative.cn/docs/getting-started.html)
    [英文官网教程](https://facebook.github.io/react-native/docs/getting-started)
    
    > 注意，配置环境变量后，要重新打开一个终端，配置不会在已打开的终端起作用,如果在IDE里打开的，则需要关闭再次打开IDE。
    
  - 2 RN开发相关
    Hot Reload 和 Live Reload 按照 教程开启即可, [说明](https://reactnative.cn/docs/debugging/#%E8%87%AA%E5%8A%A8%E5%88%B7%E6%96%B0)
    
    不过，远程调试使用 [react-native-debugger](https://github.com/jhen0409/react-native-debugger) 更好一些。
    同时需要注意一些更改必须要重新运行整个App项目才可以。
    
  - 3 RN组件以及样式
    
    参照 [RN中文网](https://reactnative.cn/docs/style/) 一步一步往下即可，但是要仔细阅读，因为虽与CSS类似，却也不同。
    
  
    不过RN无法构建Web那样的样式体系，只能使用JS的方式进行公共变量的传递。
    另外，使用 [styled-components](https://www.styled-components.com/docs/basics#react-native)，大部分情况下，可以按照CSS的写法开发，
    在IDE例如Webstorm，VScode需要加装插件才能给于提示。
  
  -4 其他相关学习资料     
  
  。  [React-Native 样式指南](https://github.com/doyoe/react-native-stylesheet-guide)   
  
  。  [React 必备基础知识](http://www.imooc.com/article/279228)    
  
  。  [React 中文介绍](https://react.docschina.org/docs/introducing-jsx.html)
  
  。  [ES6 使用介绍](http://es6.ruanyifeng.com/)
    
          
     
        
     
    
    
    
    
    
    
     



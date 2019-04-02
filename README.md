# React Native 快速开发脚手架

项目基于RN搭建，将会按照以下顺序列出说明
- 安装说明
- 集成的库
- 尚未测试与集成的库
- 文件结构目录以及使用
- 其他学习资料


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
    ![预览]("./assets/images/1.png" "预览")
    
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
    |───tab-navigation.js       底部导航文件
    |───assets      资源
        |───images      图片
    |───common      APP内公用文件，例如组件
        |───components      公用组件文件夹
    |───common      APP内公用文件，例如组件    
        
```
       
    
    
    
    
    
    
     



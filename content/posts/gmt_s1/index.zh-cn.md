---
title: "GMT简单示例"
subtitle: "GMT就像一个集装箱，又像一位魔术师！🧙"
date: 2022-11-02T20:40:19+08:00
lastmod: 2022-11-02T20:40:19+08:00
draft: false
author: "俺是大好人啊"
authorLink: "https://zanelewes.github.io"
description: "GMT绘图系列"

tags: ["GMT","Mapping"]
categories: ["GMT"]

featuredImage: "https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202210250831583.png"
featuredImagePreview: "https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202211091452127.JPG"

hiddenFromHomePage: false
hiddenFromSearch: false
twemoji: false
lightgallery: true
ruby: true
fraction: true
fontawesome: true
linkToMarkdown: true
rssFullText: false

toc:
  enable: true
  auto: true
code:
  copy: true
  maxShownLines: 50
math:
  enable: false
  # ...
mapbox:
  # ...
share:
  enable: true
  # ...
comment:
  enable: true
  # ...
library:
  css:
    # someCSS = "some.css"
    # located in "assets/"
    # Or
    # someCSS = "https://cdn.example.com/some.css"
  js:
    # someJS = "some.js"
    # located in "assets/"
    # Or
    # someJS = "https://cdn.example.com/some.js"
seo:
  images: []
  # ...
---

<!--more-->
## 先来一个常常
#### 开始总要先说点啥
我们在使用GMT的过程中，其实是不用理解其核心🧬是怎么工作的（其实是我不懂🧠），只要明白了其绘图逻辑，就可以很快上手。因为在GMT中文社区提供了较多的绘图实例，因此我们在实际应用中，可用直接套用，即可满足大多数场景下的需求。💯  
抛开其核心这个我不懂的事实🤯，GMT在我的理解中就是调取其内置的各种模块和绘图人手头上的资料并呈现，模块调用的先后顺序就代表了图层摆放的先后顺序，后编写的代码绘出的图层在先绘出的图层，一层一层向上叠加覆盖（图层覆盖的效果，会在后边的内容中具体呈现）。
## 上菜
地图，就是把三维球面投影到二位的平面上，因此投影的概念在绘图中是很重要的。在GMT中同样也是，不同的投影方式，通过不同的选项来控制。  
我们先用最简单的命令绘制一张全球地图。🌏
``` PostScript 
gmt begin GLobalMap png
	gmt coast -JH180/12c -R0/360/-90/90 -W0.5p -A10000
gmt end
```
首先需要说明，完整的GMT绘图命令永远都是以"***gmt begin***"开始，以"***gmt end***"结束。  
***gmt begin*** 后边的***GLobalMap***是输出文件的文件名；***png***是输出的文件格式，也可以是*pdf*、*jpg*等等。  
在调用模块时，一行代码的开始要先写***gmt***，***coast***是gmt中的其中一个模块，其作用是绘制全球的海岸线。  
此外：  
1. -JH180/12c 指定地图投影参数，H 表示使用 Hammer 投影，地图中心位于经度 180° 处，地图宽度为 12 厘米（12c，c 表示单位厘米）；  
2. -R0/360/-90/90 指定要绘制的区域范围，即经度 0° 到 360°，纬度 -90° 到 90°，四个数字之间用斜杠 / 分隔。（使用 -Rg 代替了 -R0/360/-90/90。这二者是完全等效的。由于绘制全球地图是很常见的需求，因而 GMT 为其设计了一个更简单的写法。 -Rg 中 g 代表 global。）
#### 绘图效果如下
如下图所示，在运行代码以后，文件目录中自动出现了一个***GLobalMap.png***的文件，即输出文件。    
![GMT绘制窗口](https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202210250831581.png "GMT绘制窗口")  

----------------------------------
> 同时欢迎关注我导的微信公众号***为有源头热水来*** ，里边有更高级的内容值得我好好学习！
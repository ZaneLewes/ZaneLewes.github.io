---
title: "绘制一个简单的中国地图"
subtitle: "GMT调用文件是很方便的，可以将手中资料呈现在地图上！🗺"
date: 2022-11-02T20:55:55+08:00
lastmod: 2022-11-02T20:55:55+08:00
draft: false
author: "俺是大好人啊"
authorLink: "https://zanelewes.github.io"
description: "GMT绘图系列"


tags: ["GMT","Mapping"]
categories: ["GMT"]

featuredImage: "https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202210250934310.png"
featuredImagePreview: "https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202210250934310.png"

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
## 利用GMT绘制中国国界
#### 首先要说明
利用GMT绘制的中国地图很可能存在问题，例如**阿克赛钦地区、藏南地区边界**等均存在明显差异，在发表论文时要十分注意。
为避免这种原则性的错误，因此要提前下载中国国界、省界数据，同时与xxx.bat文件放在同一文件夹内。  
<br><center><font face="楷体"> 中国地图哪里容易出错</font></center> 
{{< bilibili BV1e3411i7q8  >}}  
<br>


### 还是先展示代码
~~~PostScript
gmt begin ChinaMap png
    gmt coast -JM12c -R71/136.5/2.5/54.3 -Baf -W0.5p -A10000 -Ggray -Sskyblue
    gmt plot CN-border-La.gmt -W0.5p
gmt end
~~~
![绘图窗口](https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202210250959312.png )   
<center><font face="楷体">绘图窗口</font></center>  
<br>

### 代码解释
先利用coast模块确定出绘制的经纬度范围**70/136/2.5/54.3**。70/136为经度范围，2.5/54.3为维度范围。  
<br>**在coast命令行中**
1. -B选项控制图框，a为经纬度标注，f为图框，详细参数控制在后边的文章中介绍；

2. -W选项为控制海岸线的粗细，p为单位；

3. -A选项为控制大陆内部湖泊的参数，10000表示10000KM<sup>2</sup>以下的湖泊不绘制；

4. -G和-S均为填充颜色的选项，分别为填充大陆颜色和填充海洋颜色。      

**在plot命令行中**
1. plot模块功能为绘制线条；
2. **CN-border-La.gmt**为所调用的国界、省界的文件；
3. -W 选项为控制线条的粗细。
<br>
### 出图
![绘制简单的中国地图](https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202210251021010.png)   
<center><font face="楷体">绘制简单的中国地图</font></center>  
<br>  

### 文件格式
在GMT的文件调用过程中，**xxx.gmt**格式是利用最多的格式，格式转换也比较方便，会在后边的文章中另外介绍。  







-------------------------------------------

{{< admonition tip "欢迎关注" >}}
同时欢迎关注我导的微信公众号***为有源头热水来*** ，里边有更高级的内容值得我好好学习！
{{< /admonition >}}

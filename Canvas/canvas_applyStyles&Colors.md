## 色彩 (Colors)

* fillStyle = color -->  设置图形的填充颜色
* strokeStyle = color -->  设置图形轮廓的颜色

*例：*

```javascript
ctx.fillStyle = "orange";// "#FFA500"/"rgb(255,165,0)"/"rgba(255,165,0,1)"
```



## 透明度 （Transparency）

* globalAlpha = transparencyValue --> 设置canvas里所有图形的透明度（0～1）



## 线型（Line styles）

*设置线的样式：*

* lineWidth = value --> 设置线条宽度
* lineCap = type --> 设置线条末端样式：butt(默认) / round / square
* lineJoin = type --> 设定线条与线条间接合处的样式：round / bevel / miter(默认)
* miterLimit = value --> 限制**当两条线相交时交接处最大长度**；（线条交接处内角顶点到外角顶点的长度）
* getLineDash() --> 返回一个包含当前虚线样式，长度为非负偶数的数组
* setLineDash(segments) --> 设置当前虚线样式
* lineDashOffset = value --> 设置虚线样式的起始偏移量



## 渐变（Gradients）

**创建对象：**

* createLinearGradient(x1, y1, x2, y2) --> 渐变的起点(x1, y1)与终点(x2, y2)
* createRadialGradient(x1, y1, r1, x2, y2, r2) --> 以(x1, y1)为原点r1位半径的圆一 ...

**给对象上色：**

* gradientObj.addColorStop(position, color) --> position表示渐变中颜色的相对位置(0~1)

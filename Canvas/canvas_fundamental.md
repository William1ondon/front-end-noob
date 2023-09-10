## Canvas特性

`<Canvas>`只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段），但拥有众多路径生成的方法让复杂图形的绘制成为了可能。

* 三种矩形画法

  · fillRect(x, y, width, height) // 绘制一个填充的矩形

  · strokeRect(x, y, width, height) // 绘制一个矩形的边框 【译:stroke[strəʊk] 描边】

  · clearRect(x, y, width, height) // 清除指定矩形区域，让清除部分完全透明

* 绘制路径相关

  · 绘制路径的步骤

   <ul>
     <li>创建路径起始点</li>
     <li>使用画图命令画出路径</li>
     <li>把路径封闭</li>
     <li>使用描边或填充区域路径来渲染图形</li>
   </ul>

  · beginPath() *//新建一条路径，生成后，图形绘制命令被指向到路径上生成路径*

  · closePath() *//闭合路径之后图形绘制命令又重新指向到上下文中（若已闭合则不需要）*

  · stroke() *//通过线条来绘制图形轮廓*

  · fill() *//通过填充路径的内容区域生成实心的图形*

  · moveTo(x, y) *//将笔触移动到指定的坐标x及y上*

  · lineTo(x, y) *// **绘制路径**：绘制一条从当前位置到指定xy位置的直线*

  · arc(x, y, radius, startAngle, endAngle, anticlockwise)

  *//画一个以(x, y)为圆心的、以radius为半径的圆弧，从startAngle开始到endAngle结束，按照anticlockwise给定的方向(默认顺时针)来生成（这里的**Angle**是弧度，弧度=(Math.PI/180)x角度）*

  · quadraticCurveTo(cp1x, cp1y, x, y) *// 二次贝塞尔曲线，cp1xy为控制点，xy为结束点*

  · bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) *// cp1xy为控制点1，cp2xy为控制点2，xy为结束点*

  · rect(x, y, width, height) *// 绘制一个左上角坐标为(x, y)，宽高为width,height的矩形，此方法执行时，moveTo()方法自动设置坐标参数(0,0)*

  · **Path2D对象**

  Path2D对象已可以在较新版本的浏览器中使用，用来缓存或记录绘画命令，这允许我们快速地回顾路径。

  用法：

  ```javascript
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var rectangle = new Path2D();
  rectangle.rect(10, 10, 50, 50);
  ctx.stroke(rectangle);
  ```

  
JS的异步是通过回调函数实现的。
一般而言，异步任务有以下三种类型：
1. 普通事件，如click、resize 等
2. 资源加载，如load、error 等
3. 定时器，包括 setinterval、setTimeout 等
异步任务相关添加到任务队列中（任务队列也称为消息队列）。

### 所以JS的执行机制如下：
#### 1.先执行栈中的同步任务
#### 2.异步任务放入任务队列中
#### 3.一旦执行栈中所有的同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈开始执行。
![IMG_0081](/Users/williamlondon/Downloads/IMG_0081.jpg)
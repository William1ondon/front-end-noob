## `<Transition>` 组件

`<Transition>`可以将进入和离开动画应用到 通过默认插槽传递给它的 元素或组件上。进入或离开可以由以下的条件之一触发：

- 由 `v-if` 所触发的切换
- 由 `v-show` 所触发的切换
- 由特殊元素 `<component>` 切换的动态组件
- 改变特殊的 `key` 属性

**TIP : `<Transition>` 仅支持单个元素或组件作为其插槽内容。如果内容是一个组件，这个组件必须仅有一个根元素。**

当一个 `<Transition>` 组件中的元素*被插入或移除时*，会发生下面这些事情：

1. Vue 会自动检测目标元素是否应用了 CSS 过渡或动画。如果是，则一些 [CSS 过渡 class](https://cn.vuejs.org/guide/built-ins/transition.html#transition-classes) 会在适当的时机被添加和移除。
2. 如果有作为监听器的 [JavaScript 钩子](https://cn.vuejs.org/guide/built-ins/transition.html#javascript-hooks)，这些钩子函数会在适当时机被调用。
3. 如果没有探测到 CSS 过渡或动画、也没有提供 JavaScript 钩子，那么 DOM 的插入、删除操作将在浏览器的下一个动画帧后执行。

## 基于 CSS 的过渡效果

### CSS 过渡 class

一共有 6 个应用于进入与离开过渡效果的 CSS class。

![过渡图示](https://cn.vuejs.org/assets/transition-classes.f0f7b3c9.png)

1. `v-enter-from`：进入动画的起始状态。在元素插入之前添加，**在元素插入完成后的下一帧移除**。
2. `v-enter-active`：进入动画的生效状态。应用于整个进入动画阶段。在元素被插入之前添加，在过渡或动画完成之后移除。**这个 class 可以被用来定义进入动画的持续时间、延迟与速度曲线类型**。
3. `v-enter-to`：进入动画的结束状态。在元素插入完成后的下一帧被添加 (也就是 `v-enter-from` 被移除的同时)，**在过渡或动画完成之后移除**。
4. `v-leave-from`：离开动画的起始状态。在离开过渡效果被触发时立即添加，**在一帧后被移除**。
5. `v-leave-active`：离开动画的生效状态。应用于整个离开动画阶段。在离开过渡效果被触发时立即添加，在过渡或动画完成之后移除。**这个 class 可以被用来定义离开动画的持续时间、延迟与速度曲线类型**。
6. `v-leave-to`：离开动画的结束状态。在一个离开动画被触发后的下一帧被添加 (也就是 `v-leave-from` 被移除的同时)，**在过渡或动画完成之后移除**。

### 为过渡效果命名

我们可以给 `<Transition>` 组件传一个 `name` prop 来声明一个过渡效果名：

```html
<Transition name="fade">
  ...
</Transition>
```

对于一个有名字的过渡效果，对它起作用的过渡 class 会以其名字而不是 `v` 作为前缀。比如，上方例子中被应用的 class 将会是 `fade-enter-active` 而不是 `v-enter-active`。这个“fade”过渡的 class 应该是这样：

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```
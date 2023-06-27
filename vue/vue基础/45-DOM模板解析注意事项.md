## First at all!

请注意下面讨论只适用于直接在 DOM 中编写模板的情况。如果你使用来自以下来源的字符串模板，就不需要顾虑这些限制了：

- 单文件组件
- 内联模板字符串 (例如 `template: '...'`)
- `<script type="text/x-template">`



#### 大小写区分

HTML 标签和属性名称是不分大小写的，所以浏览器会把任何大写的字符解释为小写。

**这意味着当你使用 DOM 内的模板时，需要转换为相应等价的 kebab-case (短横线连字符) 形式：**



#### 闭合标签

vue的模板解析器中允许：

```html
<MyComponent />
```

然而在DOM中，我们需要显式地写出关闭标签：

```html
<my-component></my-component>
```



#### 元素位置限制

某些 HTML 元素对于放在其中的元素类型有限制，例如 `<ul>`，`<ol>`，`<table>` 和 `<select>`，相应的，某些元素仅在放置于特定元素中时才会显示，例如 `<li>`，`<tr>` 和 `<option>`。

这样将导致在带有此类限制元素的组件时，自定义的组件将作为无效的内容被忽略：

```html
<table>
  <blog-post-row></blog-post-row>
</table>
```

可以使用 `is` attribute来解决：

```html
<table>
  <tr is="vue:blog-post-row"></tr>
  <!-- TIP
	当使用在原生 HTML 元素上时，is 的值必须加上前缀 vue: 才可以被解析为一个 Vue 组件。这一点是必要的，为了避	免和原生的自定义内置元素相混淆。 -->
</table>
```


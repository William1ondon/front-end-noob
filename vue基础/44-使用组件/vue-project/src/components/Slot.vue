<template>
    <div class="alert-box">
        <strong>Congratulations!!!</strong>
        <br>
        <slot/>
        <div>这里的slot是作为一个占位符使用的，父组件传递进来的内容就会渲染在这里</div>
    </div>
</template>

<!-- <style scoped> 是 Vue 组件中的一个特殊语法，用于在组件中定义局部作用域的样式。
当在组件中使用 <style scoped> 标签时，该样式仅适用于当前组件的模板，并不会影响其他组件或全局样式。这样做的好处是可以避免样式的冲突和污染，提高组件的可维护性。
-->
<style scoped>
    .alert-box {
        color: #666;
        border: 1px solid lightgray;
        border-radius: 4px;
        padding: 20px;
        background-color: #f8f8f8;
    }

    strong {
        color: skyblue;
    }
</style>
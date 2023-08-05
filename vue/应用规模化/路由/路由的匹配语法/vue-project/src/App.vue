<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter();

function resolvePath() {
  let result = router.resolve({ name: 'manyNumber', params: { chapters: ['123', '456'] } }).href;
  console.log(result);// [Log] /123/456
  // 看了一下，这个的应用场景应该是动态生成路由地址，然后怎么使用自己决定
  // 比如说我选配了一辆幻影，定制了一块星空顶，根据这些生成的路由地址就跟基础版幻影不一样
  // 最终我决定预定，点击按钮，使用这个定制的路由地址路由到下订界面。
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/123456/123/123">to number</RouterLink>
        <br>
        <RouterLink to="/anyChapters">to not number</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <button @click="resolvePath">解析地址</button>
</template>
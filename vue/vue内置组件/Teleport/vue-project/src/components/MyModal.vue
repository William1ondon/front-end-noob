<template>
  <button @click="open = true">Open</button>

  <Teleport to="body">
    <Transition name="Alert">
      <div v-if="open" class="background">
        <div class="myModal">
          <p>Hello from the modal!</p>
          <button @click="open = false">Close</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  import { ref } from 'vue';

  const open = ref(false);
</script>

<style scoped>
.Alert-enter-from .myModal,
.Alert-leave-to .myModal {
  opacity: 0;
  transform: scale(1.3);
}

.Alert-enter-active .myModal,
.Alert-leave-active .myModal {
  transition: all 1s ease-in-out;
}

.Alert-enter-to .myModal,
.Alert-leave-from .myModal {
  opacity: 1;
  transform: scale(1);
}

.Alert-enter-from,
.Alert-leave-to {
  opacity: 0;
}

.Alert-enter-active,
.Alert-leave-active {
  transition: all 1s ease-in-out;
}

.Alert-enter-to,
.Alert-leave-from {
  opacity: 1;
}

.background {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(192, 192, 192, 0.8);
}

.myModal {
  position: fixed;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  padding: 10px;
  border: solid 1px gray;
  border-radius: 10px;
  background-color: aliceblue;
  text-align: center;
}
</style>
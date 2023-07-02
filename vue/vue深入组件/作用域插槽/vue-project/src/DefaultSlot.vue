<template>
    <slot
        :childText="text"
        :childCount="count"></slot>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const text = ref('Hello Vue Slot!');
        const count = ref(1);

        return {
            text,
            count
        }
    }
}
</script>
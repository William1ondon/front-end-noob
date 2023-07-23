import { onMounted, onBeforeUnmount } from "vue";

export function listenOn(target, e, func){
    onMounted(() => target.addEventListener(e, func));
    onBeforeUnmount(() => target.removeEventListener(e, func));
}
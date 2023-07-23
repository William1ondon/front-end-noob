import { onMounted, onUnmounted, ref } from 'vue';
import { listenOn } from './ListenOnSth.js';

export function useMouse(){
    const x = ref(0);
    const y = ref(0);

    function update(e){
        x.value = e.pageX;
        y.value = e.pageY;
    }

    listenOn(window, 'mousemove', update);

    // 通过返回值暴露所管理的状态
    return { x, y };
}
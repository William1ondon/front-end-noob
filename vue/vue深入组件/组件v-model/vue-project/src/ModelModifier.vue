<template>
    <input type="text"
        v-bind:value="$props.modelValue"
        v-on:input="modifyEvent">
</template>

<script>
export default {
    props: {
        modelValue: null,
        modelModifiers: {default: ()=>{}}
        // 如果是v-model:title，那这里的就是titleModifiers，依此类推
    },
    emits: {
        'update:modelValue': null
    },
    setup(props, {emit}) {
        function modifyEvent(e) {
            let tempStr = e.target.value;
            if(props.modelModifiers.capitalize){
                emit('update:modelValue', tempStr.charAt(0).toUpperCase() + tempStr.slice(1));
            }else{
                emit('update:modelValue', tempStr);
            }
        }

        return {
            modifyEvent
        }
    }
}
</script>
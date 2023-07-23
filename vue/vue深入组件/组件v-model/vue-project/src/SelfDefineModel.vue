<template>
    <input type="text"
        :value="$props.selfDefinedVal"
        @input="$emit('update:selfDefinedVal', $event.target.value)">
</template>

<script>
export default {
    props: {
        selfDefinedVal: String
    },
    emits: {
        'update:selfDefinedVal': null
    },
    setup(props, ctx) {
        return {
        }
    }
}
</script>
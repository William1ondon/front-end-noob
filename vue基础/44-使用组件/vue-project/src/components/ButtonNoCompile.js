// 当不使用构建步骤时，一个Vue组件以一个包含Vue特定选项JavaScript对象来定义
const MyComponent = {
    setup() {
        const count = Vue.ref(0);
        return { count };
    },
    template:  `
        <button @click="count++">
            You clicked me {{ count }} times. --By ButtonNoCompile.
        </button>
    `
};

export default MyComponent;
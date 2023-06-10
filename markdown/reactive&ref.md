```javascript
(function logFunc(){
  console.log('num', num);
  console.log('num.value', num.value);
  num.count++;
  console.log('num', num);
  console.log('num.value', num.value);
})();
```



### 当使用reactive时

let num = reactive({count:0});

![image-20230608233022397](/Users/williamlondon/Library/Application Support/typora-user-images/image-20230608233022397.png)

### 当使用ref时

let num = reactive({count:0});

![image-20230608233235928](/Users/williamlondon/Library/Application Support/typora-user-images/image-20230608233235928.png)
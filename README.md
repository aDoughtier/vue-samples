## 1.注意事项
- 组件template标签里面可以有多个同级根标签（vue2是不行的）
- setup函数里面的this指向的是undefined
- setup函数的参数是一个对象，里面包含props,attrs,slots,emit
- setup函数的返回值是一个对象，里面包含数据和方法(返回值也可以是渲染函数【直接把返回值渲染到页面上】)
- setup函数的执行顺序是在beforeCreate之前
- data和setup里面的数据不能重名，重名的话setup里面的数据会覆盖data里面的数据（编译器也会警告说重名）
- setup函数里面的数据和方法，在模板里面可以直接使用
- data里面可以读取到setup里面的数据和方法（通过this.Xxx），setup里面不可以读取到data里面的数据和方法（生命周期）
```js
 setup: () => {
    //ref函数返回一个响应式的对象
    const name = ref('张三')
    //这个属性不是响应式的
    let age = 18
    const changeName = () => {
      name.value = '李四'
    }
    const changeAge = () => {
      age++
      console.log(age)
    }
    //return才能够被模板使用
    return {
      name, age, changeName, changeAge
    }
  },
```
```js
//setup语法糖

```
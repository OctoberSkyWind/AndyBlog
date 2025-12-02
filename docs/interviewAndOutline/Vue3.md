# Vue3

[TOC]
[[TOC]]

## 组合式 API

#### setup组合式API入口函数

#### ref函数定义响应式数据

#### toRefs与toRef函数

#### readonly与shallowReadonly函数

#### shallowRef与shallowReactive函数

#### toRaw与markRaw函数

#### computed函数

#### watch函数

#### 生命周期函数

## 样式

#### 组件作用域 CSS

#### CSS Modules

#### CSS 中的 v-bind()

## 组件

#### 父与子通信之props————简单数组接收，简单对象接收，复杂对象接收

#### 组件通信之ref与defineExpose（通过触发事件）

#### 组件通信之attrs（非Prop属性透传，获取父组件传递给子组件、但子组件未在 props 或 emits 中声明的所有属性和事件）

- vue3父组件的class 和 style，这两个属性会自动合并到子组件的根元素
    - class：父组件的类名与子组件根元素的类名会合并（去重），不会覆盖（优先级由 CSS 规则决定）。
    - style：父组件的内联样式与子组件根元素的内联样式会合并，若存在相同 CSS 属性，父组件的样式会覆盖子组件（遵循 “后定义覆盖先定义”+
      父透传优先级更高）。
- Vue 3 推荐通过 useAttrs() 函数获取 attrs 对象，不可直接解构（会丢失响应式），需通过 toRefs 或直接访问
- 父组件通过 v-on 传递的事件，会自动被 attrs 收集并支持透传—— 本质是：v-on:xxx 会被转化为 attrs 中的 onXxx （驼峰命名）属性，通过
  v-bind="$attrs" 可直接透传给子组件内部元素，无需额外处理。

#### 组件通信之provide与inject（跨层级组件通信）

#### 组件通信之mitt（第三方类库），基于发布-订阅模式

#### 组件通信之slot（默认插槽，具名插槽，插槽默认值，作用域插槽）

#### 内置组件之Component（在<component></component>上通过的is属性指定，可以实现动态切换组件）

#### 内置组件之KeepAlive（缓存组件）

#### 内置组件之Teleport(实现将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置)

#### 代码封装之自定义directive（指令,自定义指令）

#### 代码封装之自定义hook（钩子，）

#### 代码封装之plugin（插件）（todo study）


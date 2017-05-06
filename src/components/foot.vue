<template>
  <footer class="footer">
    <ul class="">
      <router-link tag="li" v-for="menu in menus" :key="menu.text" :to="menu.path" :class="{selected: $route.path.match(menu.path)}">{{ menu.text }}</router-link>  
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      title: '拉勾网',
      selected: 0,
      menus: [{
        path: '/home',
        text: '职位'
      },{
        path: '/search',
        text: '搜索'
      },{
        path: '/user',
        text: '我的'
      }]
    }
  }
}
</script>

<style lang="less">
@import '../style/mixin';

.footer {
  .fixed;
  bottom: 0;
  border-top: 1px solid #eee;
  background-color: #f6f6f6;
  font-size: 18px;
  ul {
    display: flex;
  }
  li {
    width: 100%;
    text-align: center;
    font-weight: 500;
    color: #c2cfcc;
    &.selected {
      background-color: #e7f3f0;
      color: #00b38a;
    }
  }
}
</style>
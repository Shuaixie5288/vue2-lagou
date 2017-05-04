<template>
  <div id="app">
    <header class="header">
      <span>{{ title }}</span>
    </header>
    <section class="main">
      <router-view></router-view>
    </section>
    <footer class="footer">
      <ul class="">
        <router-link tag="li" v-for="menu in menus" :key="menu.text" :to="menu.path" :class="{selected: selectedAction(menu.path)}">{{ menu.text }}</router-link>  
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: '拉勾网',
      menus: [{
        path: '/home',
        text: '职位'
      },{
        path: '/search',
        text: '搜索'
      },{
        path: '/user',
        text: '我的'
      }],
    }
  },
  methods: {
    selectedAction (path) {
      return this.$router.currentRoute.path === path;
    }
  }
}
</script>

<style lang="less">
@import './style/mixin';

#app {
  font-family: microsoftyahei, Arial, sans-serif;
  padding: @navHeight 0;
}
.header {
  .fixed;
  top: 0;
  font-size: 18px;
  text-align: center;
  color: #fff;
  background-color: #00b38a;
}
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

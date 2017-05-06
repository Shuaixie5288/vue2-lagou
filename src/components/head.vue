<template>
  <header class="header">
    <span class="go-back" v-show="goBack" @click="$router.go(-1)"></span>
    <span>{{ title }}</span>
  </header>
</template>

<script>
export default {
  data() {
    return {
      title: '拉勾网',
    }
  },
  props: ['goBack']
}
</script>

<style lang="less" scoped>
@import '../style/mixin';

.header {
  .fixed;
  top: 0;
  font-size: 18px;
  text-align: center;
  color: #fff;
  background-color: #00b38a;
}
.go-back {
  float: left;
  width: 50px;
  height: 100%;
  background: url(../images/icon2.png) no-repeat 20px -31px;
  //background-size: 350px 350px;
}
</style>
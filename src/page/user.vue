<template>
  <div id="user">
    <head-top></head-top>
    <div id="content">
      <div class="logininfo">
        <div class="nologin center">
          <router-link :to="'login'" class="loginbut">登录 / 注册</router-link>
        </div>
      </div>
      <div class="buttons">
        <a class="button deliver" href="/user/deliverlist.html">
          <span>投递</span>
        </a>
        <a class="button interview" href="/minterview/interviewlist.html">面试</a>
        <a class="button invitation" href="/minvite/invitation.html">
          <span>邀约</span>
        </a>
        <a class="button collect" href="/user/collectlist.html">收藏</a>
      </div>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import headTop from '../components/head'
  import footNav from '../components/foot'

  export default {
    components: { headTop, footNav }
  }

</script>

<style lang="less">
#content {
    margin-bottom: 45px;
    padding: 0 15px;
}
#content .center {
    text-align: center;
    width: 125px;
    margin: 0 auto;
}
#content .logininfo {
    margin: 10px 0;
}
#content .nologin {
    height: 111px;
}
#content .nologin .loginbut {
    font-size: 1.2rem;
    color: #fff;
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin: 0 auto;
    background-color: #1fc8a1;
    position: relative;
    top: 33px;
}
#content .buttons {
    margin-bottom: 10px;
}
#content .buttons .deliver {
    float: left;
}
#content .buttons .button {
    display: block;
    width: 48%;
    height: 86px;
    line-height: 86px;
    background-color: #1fc8a1;
    text-align: center;
    color: #fff;
    font-size: 1.4rem;
    margin-top: 10px;
    position: relative;
}
#content .buttons .interview {
    float: right;
}
#content .buttons .invitation {
    float: left;
}
#content .buttons .collect {
    float: right;
}
#content .buttons:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
#content:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
</style>
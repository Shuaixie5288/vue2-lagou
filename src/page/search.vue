<template>
  <div id="search">
    <div class="linputer">
      <div class="lbutton" @click="toggleCitys()">
        <span class="city">{{positionName}}</span>
        <span class="cityicon"></span>
      </div>
      <div class="rinput">
        <input class="inputer" type="text" placeholder="搜索职位或公司">
        <span class="search"><em class="searchicon"></em></span>
      </div>
    </div>
    <div v-if="citys">
      <div class="cities-header">热门城市</div>
      <table class="cities-list" @click="setPosition($event)">
        <tbody>
          <tr class="cities-list-item">
            <td class="cities-item" data-item="北京">北京</td>
            <td class="cities-item" data-item="上海">上海</td>
            <td class="cities-item" data-item="广州">广州</td>
          </tr>
          <tr class="cities-list-item">
            <td class="cities-item" data-item="深圳">深圳</td>
            <td class="cities-item" data-item="成都">成都</td>
            <td class="cities-item" data-item="杭州">杭州</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      positionName: '全国',
      citys: false,
      list: []
    }
  },
  methods: {
    toggleCitys () {
      this.citys = !this.citys;
    },
    setPosition (e) {
      e.target.innerText && (this.positionName = e.target.innerText);
      this.citys = false;
    }
  }
}
</script>

<style lang="less">
@import '../style/mixin';

#search .linputer {
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  height: 45px;
}
#search .lbutton {
  float: left;
  height: 45px;
  line-height: 45px;
  font-size: 1.5rem;
  text-align: center;
  width: 88px;
  border-right: 1px solid #e8e8e8;
}
#search .city {
  display: inline-block;
}
#search .cityicon {
  display: inline-block;
  width: 8.5px;
  height: 7px;
  background: url(../images/icon.png) no-repeat -1px -2.5px;
  background-size: 250px 250px;
  vertical-align: middle;
}
#search .rinput {
    height: 45px;
    margin-left: 89px;
    position: relative;
}
#search .inputer {
    display: block;
    border: none;
    padding: 10px 0;
    height: 25px;
    line-height: 25px;
    color: #333;
    width: 75%;
    margin: 0 0 0 5%;
    font-size: 1.5rem;
    float: left;
}
#search .search {
    display: inline-block;
    width: 20%;
    height: 45px;
    line-height: 45px;
    float: right;
    position: relative;
}
#search .searchicon {
    display: block;
    margin: 14px auto 0 auto;
    width: 17px;
    height: 17px;
    background: url(../images/icon.png) no-repeat -14px -2.5px;
    background-size: 250px 250px;
}
.cities-list {
    width: 100%;
    border-bottom: 1px solid #e8e8e8;
}
.cities-header {
    border-bottom: 1px solid #e8e8e8;
    height: 25px;
    line-height: 25px;
    padding: 0 15px;
    font-size: 1.2rem;
    color: #888;
}
.cities-item {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 1.5rem;
    color: #333;
    min-width: 100px;
    .activeBg;
}
</style>
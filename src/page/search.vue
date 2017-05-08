<template>
  <div id="search">
    <head-top></head-top>
    <div class="linputer">
      <div class="lbutton" @click="showCitys()">
        <span class="city">{{curCity}}</span>
        <span class="cityicon"></span>
      </div>
      <div class="rinput">
        <input class="inputer" type="text" v-model="key" @keydown.13="getSearchData(1)" placeholder="搜索职位或公司">
        <span class="search" @click="getSearchData(1)"><em class="searchicon"></em></span>
      </div>
    </div>
    <job-list :list="list" @loadMore="getSearchData"></job-list>
    <div v-if="citys" v-for="v in citiesData" @click="setCurCity($event)">
      <div class="cities-header">{{v.nameStr}}</div>
      <ul style="overflow: hidden;">
        <li class="cities-item" v-for="city in v.cityList">{{city}}</li>
      </ul>
    </div>
    <div class="list-empty" v-show="noDataTips">
      <span class="icon"></span>
      <span class="text">拉勾上暂时没有这样的职位</span>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import headTop from '../components/head'
import footNav from '../components/foot'
import jobList from '../components/jobList'
import citiesData from '../service/citiesData'
import {getSearchData} from '../service/getData'

export default {
  name: 'search',
  data () {
    return {
      citiesData: citiesData, // 城市列表
      curCity: '全国', // 当前选择的城市
      citys: true,
      key: '', // 搜索关键字
      list: [], // 搜索的职位数据
      pageNo: 1,
      noDataTips: false
    }
  },
  methods: {
    showCitys () {
      this.list = [];
      this.citys = !this.citys;
      this.noDataTips = false;
    },
    setCurCity (e) {
      if(!e.target.className.match('cities-item')) return;
      e.target.innerText && (this.curCity = e.target.innerText);
      this.citys = false;
    },
    getSearchData (pageNo) {
      if(pageNo === 1) {
        this.list = [];
      } else {
        this.pageNo = pageNo;
      }
      this.citys = false;
      this.$router.push('/search?city=' + this.curCity + '&key=' + this.key)
      getSearchData(this.curCity, this.key, this.pageNo).then((result) => {
        if(result.body.content.data.page.result.length === 0) {
          this.noDataTips = true;
        } else {
          this.list = this.list.concat(result.body.content.data.page.result);
          this.noDataTips = false;
        }
      })
    }
  },
  mounted() {
    if(this.$route.fullPath === '/search') {
      document.body.scrollTop = 0;
      return
    }
    this.citys = false;
    this.curCity = this.$route.query.city;
    this.key = this.$route.query.key;
    getSearchData(this.$route.query.city, this.$route.query.key, 1).then((result) => {
      if(result.body.content.data.page.result.length === 0) {
        this.noDataTips = true;
      } else {
        this.list = this.list.concat(result.body.content.data.page.result);
        this.noDataTips = false;
      }
    })
  },
  watch: {
    $route(to, from) {
      //console.log(to, from)
    }
  },
  components: {
    headTop,
    footNav,
    jobList
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
  .activeBg;
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
    .activeBg;
}
#search .searchicon {
    display: block;
    margin: 14px auto 0 auto;
    width: 17px;
    height: 17px;
    background: url(../images/icon.png) no-repeat -14px -2.5px;
    background-size: 250px 250px;
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
    float: left;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 1.5rem;
    color: #333;
    min-width: 100px;
    .activeBg;
}
.list-empty {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 30px;
    color: #c2cfcc;
}
.list-empty .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(../images/icon.png) no-repeat -70px -18.5px;
    background-size: 250px 250px;
    vertical-align: middle;
}
</style>
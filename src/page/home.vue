<template>
  <div class="home">
    <head-top></head-top>
    <job-list :list="list" @loadMore="loadMore"></job-list>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import headTop from '../components/head'
import footNav from '../components/foot'
import jobList from '../components/jobList'
import {getHomeData} from '../service/getData'

export default {
  name: 'home',
  data () {
    return {
      list: [] // 职位数据
    }
  },
  methods: {
    loadMore: function(pageNo) {
      getHomeData(pageNo).then((result) => {
        this.list.push.apply(this.list, result.body.content.data.page.result);
      })
    }
  },
  mounted () {
    this.loadMore(1)
  },
  events: {
    'loadMore': function() {
      console.log(arguments)
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

</style>
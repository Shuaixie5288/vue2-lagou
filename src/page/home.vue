<template>
  <div class="home">
    <job-list :list="list" @loadMore="loadMore"></job-list>
  </div>
</template>

<script>
import jobList from '../components/jobList'
import getData from '../service/getData'

export default {
  name: 'home',
  data () {
    return {
      list: []
    }
  },
  methods: {
    loadMore: function(pageNo) {
      getData.getHomeData(pageNo).then((result) => {
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
    jobList
  }
}
</script>

<style lang="less">

</style>
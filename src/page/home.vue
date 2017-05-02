<template>
  <div class="home">
    <job-list :list="list"></job-list>
  </div>
</template>

<script>
import jobList from '../components/jobList'

export default {
  name: 'home',
  data () {
    return {
      list: []
    }
  },
  mounted () {
      this.$http.get('http://localhost:8080/listmore.json?pageNo=1&pageSize=15').then((result) => {
        this.list.push.apply(this.list, result.body.content.data.page.result);
      })
  },
  components: {
    jobList
  }
}
</script>

<style lang="less">

</style>
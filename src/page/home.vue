<template>
  <div class="home">
    <job-list></job-list>
  </div>
</template>

<script>
import jobList from '../components/jobList'

export default {
  name: 'home',
  components: {
    jobList
  },
  created: function() {
    // this.loadMore(1);
  }
}
</script>

<style lang="less">

</style>
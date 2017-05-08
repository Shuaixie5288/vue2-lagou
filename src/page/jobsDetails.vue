<template>
  <div>
    <head-top go-back="true" title="职位详情"></head-top>
    <div id="content">
      <div v-html="postDetailsHtml"></div>
      <div class="positioneval" v-if="postEvaluate">
        <div class="eval-title">面试评价
          <span>(<span>{{postEvaluate.length}}</span>)</span>
        </div>
        <ul class="list">
          <li class="list-item" v-for="item in postEvaluate">
            <div class="info-wrap">
              <img :src="'//www.lgstatic.com/' + item.portrait" alt="reviewer avatar">
              <span class="name">{{item.username}}</span>
              <span class="time">{{item.createTime | date}}</span>
              <ul class="score-wrap">
                <li>
                  <span class="type">综合评分</span>
                  <span class="score">{{item.companyScore}}</span>
                </li>
                <li>
                  <span class="type">描述符合</span>
                  <span class="score">{{item.describeScore}}</span>
                </li>
                <li>
                  <span class="type">面试官</span>
                  <span class="score">{{item.interviewerScore}}</span>
                </li>
                <li>
                  <span class="type">公司环境</span>
                  <span class="score">{{Math.round(item.comprehensiveScore)}}</span>
                </li>
              </ul>
            </div>
            <ul class="tags-wrap">
              <li v-for="item in item.tagArray">{{item}}</li>
            </ul>
            <div class="review-content">{{item.content}}</div>
            <div class="zan-wrap">
              <span class="zan" data-id="557000">
                <i></i>
                <span class="count">有用(<span>{{item.usefulCount}}</span>)</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import headTop from '@/components/head'
  import { getPostDetails } from '@/service/getData'

  export default {
    data() {
      return {
        postId: null, // 职位ID
        postDetailsHtml: null, // 职位详情html
        postEvaluate: null, //职位评价
      }
    },
    created() {
      this.postId = this.$route.query.id;
      // 提取后台返回的html中的职位数据
      getPostDetails(this.postId).then((data) => {
        var $dom = document.createElement('div');
        $dom.innerHTML = data.body;
        var $content = $dom.querySelector('#content');
        $content.querySelector('#push_bottom').remove();
        $content.querySelector('#deliver_resume').remove();
        $content.querySelector('.positioneval').remove();
        this.postDetailsHtml = $content.innerHTML;
        // 提取评价数据
        var script = $dom.querySelectorAll('script:last-child')[0].innerText.replace(/require\(.+?\);?/g, '');
        this.postEvaluate = new Function('', script + ';return global;')().page.result;
      })
    },
    mounted() {
      
    },
    components: {
      headTop
    }
  }

</script>

<style lang="">
  #content .postitle {
    height: 48px;
    line-height: 48px;
    padding: 0 15px;
    border-bottom: 1px solid #e8e8e8
  }
  
  #content .postitle:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }
  
  #content .postitle .title {
    color: #333;
    font-size: 1.4rem;
    font-weight: bold;
    max-width: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left
  }
  
  #content .postitle .collicon {
    float: right;
    width: 39px;
    position: relative;
    text-align: center;
    padding: 6px 10px 0 10px;
    height: 43px
  }
  
  #content .postitle .icon {
    display: block;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    background: url(../images/icon.png) no-repeat -150px -41px;
    background-size: 250px 250px
  }
  
  #content .postitle .text {
    display: block;
    color: #888;
    font-size: 12px;
    line-height: 30px
  }
  
  #content .postitle .notcoll {
    background: url(../images/icon.png) no-repeat -170px -41px;
    background-size: 250px 250px
  }
  
  #content .detail {
    border-bottom: 1px solid #e8e8e8;
    min-height: 10px;
    padding: 15px
  }
  
  #content .detail .items:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }
  
  #content .detail .item {
    float: left;
    color: #333;
    font-size: 1.2rem;
    position: relative;
    width: 33.33%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 11px
  }
  
  #content .detail .item:nth-child( 3n) {
    text-align: right
  }
  
  #content .detail .item:nth-child( 3n - 1) {
    text-align: center
  }
  
  #content .detail .icon {
    display: inline-block;
    height: 13px;
    width: 13px;
    vertical-align: middle
  }
  
  #content .detail .text {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -1px
  }
  
  #content .detail .salary .icon {
    background: url(../images/icon.png) no-repeat -66px -48px;
    background-size: 250px 250px
  }
  
  #content .detail .workaddress .icon {
    background: url(../images/icon.png) no-repeat -79px -49px;
    background-size: 250px 250px
  }
  
  #content .detail .jobnature .icon {
    background: url(../images/icon.png) no-repeat -93px -49px;
    background-size: 250px 250px
  }
  
  #content .detail .workyear .icon {
    background: url(../images/icon.png) no-repeat -110.5px -49.5px;
    background-size: 250px 250px
  }
  
  #content .detail .education .icon {
    background: url(../images/icon.png) no-repeat -127.5px -49px;
    background-size: 250px 250px
  }
  
  #content .detail .temptation {
    color: #888;
    word-break: break-all;
    font-size: 1.2rem
  }
  
  #content .company {
    border-bottom: 1px solid #e8e8e8;
    min-height: 10px;
    padding: 15px
  }
  
  #content .company:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }
  
  #content .company .logo {
    width: 60px;
    height: 60px;
    float: left
  }
  
  #content .company .desc {
    margin-left: 70px;
    min-height: 10px
  }
  
  #content .company .desc:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }
  
  #content .company .dleft {
    float: left;
    min-height: 10px;
    min-width: 10px;
    max-width: 80%
  }
  
  #content .company .dleft .title {
    color: #00b38a;
    font-size: 1.5rem;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px
  }
  
  #content .company .dleft .info {
    color: #888;
    font-size: 1rem
  }
  
  #content .company .dright {
    float: right;
    display: inline-block;
    width: 23px;
    height: 29px;
    background: url(../images/icon.png) no-repeat -222.5px -3.5px;
    background-size: 250px 250px;
    margin-top: 10px
  }
  
  #content .positiondesc {
    min-height: 10px
  }
  
  #content .positiondesc .header {
    background-color: #00b38a;
    height: 36px;
    line-height: 36px;
    padding-left: 15px;
    color: #00b38a;
    font-size: 1.4rem;
    background-color: #d2f9f0
  }
  
  #content .positiondesc .content {
    word-break: break-all;
    padding: 15px;
    color: #555;
    font-size: 1rem;
    line-height: 22px
  }
  
  #content .bgc_grey {
    background-color: #d5d5da
  }
  
  #content .positioneval .eval-title {
    background-color: #00b38a;
    height: 36px;
    line-height: 36px;
    padding-left: 15px;
    color: #00b38a;
    font-size: 1.4rem;
    background-color: #d2f9f0
  }
  
  #content .positioneval .list-item {
    padding: 15px;
    padding-bottom: 14px;
    border-bottom: none
  }
  
  #content .positioneval .list-item .info-wrap {
    position: relative;
    height: 32px
  }
  
  #content .positioneval .list-item .info-wrap:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }
  
  #content .positioneval .list-item .info-wrap img {
    position: absolute;
    width: 32px;
    height: 32px;
    vertical-align: text-top;
    border-radius: 50%
  }
  
  #content .positioneval .list-item .info-wrap .name {
    position: absolute;
    margin-left: 40px;
    font-size: 1.4rem;
    color: #333;
    top: -3px
  }
  
  #content .positioneval .list-item .info-wrap .time {
    font-size: 1.1rem;
    position: absolute;
    right: 0;
    top: -4px;
    color: #b2b2b2
  }
  
  #content .positioneval .list-item .info-wrap .score-wrap {
    font-size: 0;
    position: absolute;
    width: 85%;
    bottom: -3px;
    left: 40px
  }
  
  #content .positioneval .list-item .info-wrap .score-wrap li {
    font-size: 1.1rem;
    display: inline-block
  }
  
  #content .positioneval .list-item .info-wrap .score-wrap .type {
    color: #888
  }
  
  #content .positioneval .list-item .info-wrap .score-wrap .score {
    color: #ffba0d
  }
  
  #content .positioneval .list-item .info-wrap .score-wrap li+li {
    margin-left: 3.125%
  }
  
  #content .positioneval .list-item .tags-wrap {
    font-size: 0;
    margin-top: 14px;
    margin-bottom: 4px
  }
  
  #content .positioneval .list-item .tags-wrap li {
    font-size: 1.1rem;
    display: inline-block;
    color: #b2b2b2;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 2px 6px;
    margin-bottom: 10px;
    margin-right: 1.63%
  }
  
  #content .positioneval .list-item .review-content {
    color: #333;
    font-size: 1.3rem;
    line-height: 20px;
    word-break: break-all
  }
  
  #content .positioneval .list-item .reply-wrap {
    position: relative;
    padding: 12px;
    margin-top: 15px;
    background-color: #f7faf9;
    border-top: 1px solid #e8e8e8
  }
  
  #content .positioneval .list-item .reply-wrap .triangle-in {
    position: absolute;
    left: 23px;
    top: -7px;
    z-index: 1;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    border-left: 5.25px solid transparent;
    border-right: 5.25px solid transparent;
    border-bottom: 7px solid #f7faf9
  }
  
  #content .positioneval .list-item .reply-wrap .triangle-out {
    position: absolute;
    top: -8px;
    left: 22px;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
    border-left: 6.25px solid transparent;
    border-right: 6.25px solid transparent;
    border-bottom: 8px solid #e8e8e8
  }
  
  #content .positioneval .list-item .reply-wrap .reply-info-wrap {
    position: relative;
    height: 32px
  }
  
  #content .positioneval .list-item .reply-wrap .reply-info-wrap img {
    width: 32px;
    height: 32px;
    position: absolute;
    border-radius: 50%
  }
  
  #content .positioneval .list-item .reply-wrap .reply-info-wrap .name {
    font-size: 1.394rem;
    color: #777;
    position: absolute;
    top: -3px;
    left: 42px
  }
  
  #content .positioneval .list-item .reply-wrap .reply-info-wrap .time {
    position: absolute;
    font-size: 1.1rem;
    color: #b2b2b2;
    top: -3px;
    right: 0
  }
  
  #content .positioneval .list-item .reply-wrap .reply-info-wrap .company-title {
    position: absolute;
    font-size: 1.0955rem;
    color: #888;
    bottom: -4px;
    left: 42px
  }
  
  #content .positioneval .list-item .reply-wrap .reply-content {
    margin-top: 15px;
    font-size: 1.3rem;
    color: #777;
    line-height: 20px;
    word-break: break-all
  }
  
  #content .positioneval .list-item .zan-wrap {
    font-size: 0;
    text-align: right;
    margin-top: 17px
  }
  
  #content .positioneval .list-item .zan-wrap i {
    display: inline-block;
    background: url(../images/icon2.png) no-repeat -43.5px -218px;
    background-size: 250px 250px;
    width: 15.5px;
    height: 15px;
    margin-bottom: -2px
  }
  
  #content .positioneval .list-item .zan-wrap span {
    font-size: 1.3rem;
    color: #00b38a
  }
  
  #content .positioneval .list-item .zan-wrap span .count {
    margin-left: 2.5px
  }
  
  #content .positioneval .list-item+.list-item {
    border-top: 1px solid #e8e8e8
  }
  
  #content .positioneval .eval-all {
    display: block;
    color: #00b38a;
    font-size: 1.5rem;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    margin-top: 12px
  }
</style>
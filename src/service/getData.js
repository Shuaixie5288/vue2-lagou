import Vue from 'vue'

function http(url, data) {
  return Vue.http.get(url, data)
}
//https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=w&pageNo=1&pageSize=15
export default {
  getSearchData(city, positionName, pageNo) {
    var data = {
      params: {
        city,
        positionName,
        pageNo,
        pageSize: 15
      }
    }
    return http('/search.json', data);
  }
}
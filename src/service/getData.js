import Vue from 'vue'

function http(url, data) {
  return Vue.http.get(url, data)
}

var getHomeData = (pageNo) => {
  var data = {
    params: {
      pageNo, // 当前页
      pageSize: 15
    }
  }
  return http('/listmore.json', data);
}

var getSearchData = (city, positionName, pageNo) =>{
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

var getPostDetails = (postId) => {
  return http(`/jobs/${postId}.html`);
}

export {getHomeData, getSearchData, getPostDetails}
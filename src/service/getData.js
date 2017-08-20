import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

var http = Vue.http;
var getHomeData = (pageNo) => {
  var data = {
    params: {
      pageNo, // 当前页
      pageSize: 15
    }
  }
  return http.get('/listmore.json', data);
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
  return http.get('/search.json', data);
}

var getPostDetails = (postId) => {
  return http.get(`/jobs/${postId}.html`);
}

var userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    http.get('/login/login.html').then((data) => {
      var $dom = document.createElement('div');
      $dom.innerHTML = data.body;
      new Function('', $dom.querySelector('script').innerText)();
      var options  = {
        body: {
          username,
          password,
          isValidate: true,
        },
        headers: {
          X_Anti_Forge_Token: window.X_Anti_Forge_Token,
          X_Anti_Forge_Code: window.X_Anti_Forge_Code
        },
        emulateJSON: true
      }
      resolve(http.post(`/login/login.json`, options.body, options));
    })
  })
}

export {getHomeData, getSearchData, getPostDetails, userLogin}
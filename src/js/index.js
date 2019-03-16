$(function () {
  // 发送请求-首页菜单
  $.ajax({
    url: 'http://193.112.55.79:9090/api/getindexmenu',
    type: 'get',
    dataType: 'json',
    success: result => {
      let data = result.result;
      console.log(data);
      let html = template('indexList', {
        arr: data
      });
      $('#menu').html(html);
    }
  }); // 发送请求-超值折扣

  $.ajax({
    url: 'http://193.112.55.79:9090/api/getmoneyctrl',
    type: 'get',
    dataType: 'json',
    success: result => {
      let data = result.result;
      data.forEach(item => {
        item.productComCount = getNum(item.productComCount);
      });
      console.log(data);
      let html = template('lessPrice', {
        arr: data
      });
      $('.recommen-list').html(html);
    }
  }); // 返回顶部

  $('.index_top').on('tap', function () {
    $('html , body').css('scrollTop', 0);
  }); // 截取字符串数据

  function getNum(str) {
    // console.dir(/\d+/.exec(str));
    //exec()  返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null
    if (!str || str.length == 0) {
      return "";
    } else {
      var ret = /\d+/.exec(str);

      if (!ret) {
        return "";
      }

      return parseInt(/\d+/.exec(str)[0]);
    }
  }
});
//# sourceMappingURL=index.js.map

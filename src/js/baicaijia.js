$(function () {
  init();

  function init() {
    getNavData();
    getGoodsList();
    tapEvent();
  } // 请求导航栏


  function getNavData() {
    $.ajax({
      url: 'http://193.112.55.79:9090/api/getbaicaijiatitle',
      type: 'get',
      dataType: 'json',
      success: result => {
        let data = result.result;
        let html = template('navTpl', {
          arr: data
        });
        $('.nav_title').html(html);
        /* 产品部分 用插件iscroll实现简单的左右滑动看见tab标签 */
        //获取li元素

        var allLi = $('.nav_title li');
        var ulWidth = 0;
        allLi.each((index, value) => {
          ulWidth += $(value).innerWidth() + 1;
        });
        $('#wrapper .nav_title').width(ulWidth); //初始化iscroll

        var myScroll = new IScroll('#wrapper', {
          scrollX: true,
          scrollY: false
        });
      }
    });
  } // 请求商品列表


  function getGoodsList(id) {
    $.ajax({
      url: 'http://193.112.55.79:9090/api/getbaicaijiaproduct',
      type: 'get',
      data: {
        titleid: id || getUrl('id')
      },
      dataType: 'json',
      success: result => {
        let data = result.result;
        let html = template('goodsTpl', {
          arr: data
        });
        $('.goddsItems').html(html);
      }
    });
  } // 点击切换页面


  function tapEvent() {
    $('.nav_title').on('click', 'li', function () {
      $('.nav_title li').removeClass('active');
      $(this).addClass('active');
      getGoodsList($(this).attr('value'));
    });
  } // 获取 url 上的 id


  function getUrl(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
  }
});
//# sourceMappingURL=baicaijia.js.map

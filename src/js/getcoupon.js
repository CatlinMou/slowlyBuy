$(function(){
    init();
    function init (){
        eventList();
    }
    function eventList(){
        
// console.log(getQueryString('couponid'))
      $.ajax({
          type: "get",
          url: "http://193.112.55.79:9090/api/getcouponproduct",
          data:{
            couponid: getQueryString('couponid')
          },
          dataType: "json",
          success: function (result) {
            let data=result.result;
            // console.log(data)
            let html=template('lessPrice',{arr:data});
            // console.log(html)
            $('.List_nav').html(html)
          }
      });

    }



        //获取url参数
    /*取到url的参数*/
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return unescape(r[2]);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
})


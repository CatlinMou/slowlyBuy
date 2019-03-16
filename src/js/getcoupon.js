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
            let html2 = template('slidertpl',{arr:data});
            $('.swiper-wrapper').html(html2)
            
            
          }
      });

      //点击弹出遮罩层
      $('.List_nav').on('tap','li',function(){
          $(".mask").css("display","block")
            // var gallery = mui('.mui-slider');
            // gallery.slider({
            // interval:500//自动轮播周期，若为0则不自动播放，默认为0；
            // }); 
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
                scrollbar: {
                  el: '.swiper-scrollbar',
                },
              })        
      })

      
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


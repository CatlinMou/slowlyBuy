$(function(){
    init();
    function init(){
        eventList()
    }
    function eventList(){
      //渲染数据
      $.ajax({
          type: "get",
          url: "http://193.112.55.79:9090/api/getsitenav",
          dataType: "json",
          success: function (result) {
              let data=result.result;
              let html=template('sitenTpl',{arr:data})
              console.log(html)
              $('.siten_List').html(html)
          }
      });

    }
})
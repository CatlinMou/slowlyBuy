$(function(){
    init();
    function init (){
        eventList();
    }
    function eventList(){

        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getinlanddiscount",
            data: "data",
            dataType: "json",
            success: function (result) {
               if(result){
                   let data=result.result
      
                 let html=template('discountTpl',{arr:data})
                   
                 $('.discountList').html(html)
               }
            }
        });
    }
})
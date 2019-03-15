$(function(){
    init();
    function init(){
        evenList()
    }
    function evenList(){

        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getcoupon",
            success: function (result) {
                if(result){
                    let data =result.result;
                    let html=template('coupTpl',{arr:data})
                    $('.viewList').html(html)
                }
                
            }
        });

    }
})
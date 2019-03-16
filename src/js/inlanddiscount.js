$(function(){
    init();
    function init (){
        eventList();
    }
    let newData={};
    function eventList(){
       
        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getinlanddiscount",
            dataType: "json",
            success: function (result) {
               if(result){   
               
                let data=result.result;
                newData={
                    productId:data.productId,
                    productName:data.productName,
                    productPrice:data.productPrice
            
                  }   
            // console.log(newData)
                console.log(result)
                 let html=template('discountTpl',{arr:data})                  
                 $('.discountList').html(html)

               }
            }
        });
    }
})
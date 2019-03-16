$(function () {
    init();
    function init() {
        evenList()
    }
    function evenList() {
        let newData = {};
        // productId:getQueryString("productid"),


  console.log(getQueryString('productId'))
        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getdiscountproduct",
            data: {
                productid: getQueryString('productId')
            },
            dataType: "json",
            success: function (result) {
                console.log(1)
                if (result) {

                    let data = result.result;
                    console.log(data)
                    // newData = {
                    //     productId: data.productId,
                    //     productName: data.productName,
                    //     productPrice: data.productPrice

                    // }
                    let html=template('discountTpl',{data:data})
                    console.log(html)
                    $('.product').html(html);
                }
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
$(function () {
    init();

    function init() {
        getproduct();
        getproductcom();
    }

    // 获取商品详情
    function getproduct() {
        $.ajax({
            url: 'http://193.112.55.79:9090/api/getproduct',
            type: 'get',
            data: {
                productid : getUrl('productid') || 1
            },
            success: (result) => {
                let data = result.result;
                let html = template('getProduct', {arr : data});
                $('.bijia_goods').html(html);
            }
        });
    }

    function getproductcom() {
        $.ajax({
            url: 'http://193.112.55.79:9090/api/getproductcom',
            type: 'get',
            data: {
                productid : getUrl('productid') || 1
            },
            success: (result) => {
                let data = result.result;
                let html = template('getProductcom', {arr : data});
                $('.comment_list').html(html);
            }
        });
    }

    // 获取 url 上数据
    function getUrl(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
})
$(function () {
    
    init();

    function init() {
        getBrand();
        getBrandProductList();
    }

    // 请求商品排行
    function getBrand() {
        $.ajax({
            url: 'http://193.112.55.79:9090/api/getbrand',
            type: 'get',
            data: {brandtitleid:1},
            success: (result) => {
                let data = result.result;
                let html = template('brandList', {arr : data});
                $('.category-title').html(html);
            }
        });
    }

    // 请求销量排行
    function getBrandProductList() {
        $.ajax({
            url: 'http://193.112.55.79:9090/api/getbrandproductlist',
            type: 'get',
            data: {brandtitleid:1},
            success: (result) => {
                console.log(result);
                // let data = result.result;
                // let html = template('brandList', {arr : data});
                // $('.category-title').html(html);
            }
        });
    }

});

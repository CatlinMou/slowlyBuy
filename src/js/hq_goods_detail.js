$(function() {

    init();

    function init() {
        main();
    }

    function main() {
        // $.get(
        //     "http://193.112.55.79:9090/api/getmoneyctrl", {productid: getQueryString(productid) },
        //     function(result) {
        //         let data = result.result;
        //         let html = template("mainTpl", { arr: data })
        //         $(".main").html(html)
        //     }
        // )

        console.log(getQueryString('productid'));

        $.ajax({
            type: "get",
            url: "http://193.112.55.79:9090/api/getdiscountproduct",
            data: {
                productid: getQueryString('productid')
            },
            success: function(result) {
                console.log(result)
                let data = result.result;
                console.log(data)
                let html = template("mainTpl", { arr: data })
                console.log(html)
                $(".container").html(html)
            }
        });
    }






    /*取到url的参数*/
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return unescape(r[2]);
        if (r != null) return decodeURI(r[2]);
        return null;
    }
})
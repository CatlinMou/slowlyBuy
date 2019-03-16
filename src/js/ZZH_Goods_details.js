$(function () {
    zzhGoodsDetails();
    zzhDetailsList();

    // 详情页ajax


    // 面包屑导航
    function zzhGoodsDetails() {
        let productid = getUrl("productid")
        $.get("http://193.112.55.79:9090/api/getproduct", { productid: productid }, (result) => {
            let data = result.result;
            // console.log(data)
            let HTML = template("zzh_navtpl", { zhu: data });
            $(".zzh_nav").html(HTML);

        })

        function getUrl(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        }



    }



    // 详情页内容
    function zzhDetailsList() {
        let productid = getUrl("productid")
        $.get("http://193.112.55.79:9090/api/getproduct", { productid: productid }, (result) => {
            let data = result;
            console.log(data)
            // let HTML = template("zzh_navtpl", { zhu: data });
            // $(".zzh_nav").html(HTML);

        })

        function getUrl(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        }


    }







})
$(function () {
    zzhListOfGoods();
   

    //商品列表
    function zzhListOfGoods() {
        let categoryid = getUrl("categoryid")
        $.get("http://193.112.55.79:9090/api/getcategorybyid", { categoryid: categoryid }, (result) => {
            let data = result.result;
            // console.log(data)
            let HTML = template("zzh_navtpl", { zhu: data })
            $(".zzh_nav").html(HTML)
        })
        function getUrl(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        }

        $.get("http://193.112.55.79:9090/api/getproductlist", { categoryid: categoryid }, (result) => {
            // console.log(result)
            let data = result.result;
            let HTML = template("zzh_detailstpl", { zhu: data })
            $(".zzh_details_box").html(HTML)
        })
    }

})




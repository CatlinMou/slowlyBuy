$(function() {


    init();

    function init() {
        recomment_list();

    };


    // 首页菜单数据渲染
    function recomment_list() {
        $.get(
            "http://193.112.55.79:9090/api/getmoneyctrl",
            function(result) {
                // console.log(result);
                let data = result.result;
                console.log(data)
                let html = template("mainTpl", { arr: data });
                $(".recomment_list").html(html);
            })
    }



})
$(function(){
    let gsobj = {
        shopid:0,
        areaid:0
    }
    init()
    function init(){
        showProduceList(gsobj)
        getShopId()
        getAreaId()
    }

    function getShopId(){
        $.get("http://193.112.55.79:9090/api/getgsshop",result=>{
        // console.log(result)
        let data = result.result;
        // console.log(data)
        let html = template("shoptpl",{data:data})
        // console.log(html)
        $(".shopAndArea").html(html)
        $(".shopAndArea .shop").on("tap","li",function(){
        let initialLi = $(this).parent().parent().parent()[0]
        $(initialLi).removeClass("mui-active")
        // console.log($(this)[0].innerText);
        $(".shopAndArea .shopinnerText")[0].innerText = $(this)[0].innerText
        gsobj.shopid = $(this).attr("data-shopId")
        showProduceList(gsobj)
    })
    })
    }
    function getAreaId(){
        $.get("http://193.112.55.79:9090/api/getgsshoparea",result=>{
        // console.log(result)
        let data = result.result;
        // console.log(data)
        let html = template("areatpl",{data:data})
        // console.log(html)
        $(".shopAndArea").append(html)
        $(".shopAndArea .area").on("tap","li",function(){
        let initialLi = $(this).parent().parent().parent()[0]
        $(initialLi).removeClass("mui-active")
        // console.log($(this)[0].innerText);
        $(".shopAndArea .areainnerText")[0].innerText = $(this)[0].innerText
        gsobj.areaid = $(this).attr("data-areaId")
        showProduceList(gsobj)
    })
    })
    }

    function showProduceList(){
        $.get("http://193.112.55.79:9090/api/getgsproduct",gsobj,result=>{
        let data = result.result;
        console.log(data)
        let html = template("productlisttpl",{data:data})
        // console.log(html)
        $("#theListHimself").html(html)
    })
    }
   
})
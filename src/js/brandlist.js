$(function(){
    $.get("http://193.112.55.79:9090/api/getbrandtitle",result=>{
        console.log(result.result)
        let data = result.result;
        let html = template("brandlisttpl",{arr:data})
        $(".brand-list").html(html)
    })
})
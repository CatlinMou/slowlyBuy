$(function(){
    init()
    function init(){
        getTitle()
    }
    function getTitle(){
        $.get("http://193.112.55.79:9090/api/getcategorytitle",result=>{
            let data = result.result;
            let html = template("categorytitletpl",{arr:data})
            // console.log(data[0])
            $(".mmm_view").html(html)
            getListItem()
        })
    }
    function getListItem(){
        $(".mui-table-view-cell").on("tap","a",function(){
            let titleid =  $(this).attr("data-titleId")
            console.log(titleid)
            $.get("http://193.112.55.79:9090/api/getcategory",{titleid:titleid},result=>{
                let data = result.result;
                console.log(data)
                let html = ``
                for(let i = 0;i<data.length;i++){
                    html += `
                    <li><a href="ZZH_List_of_goods.html?categoryid=${data[i].categoryId}">${data[i].category}</a></li>
                    `
                }
               let thisUl = $(".cat_list")[titleid]
               $(thisUl).html(html)
                
            })
         })
    }

})
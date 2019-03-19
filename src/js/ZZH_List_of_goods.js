$(function () {

    let currentPage = 1;
    let maxPage = 0;

    init();

    function init() {
        getproductlist(currentPage, function (result) {
            maxPage = Math.ceil(result.totalCount / result.pagesize);
            let temp = '';
            for (let i = 0; i < maxPage; i++) {
                temp += `<li role="presentation" value="${i + 1}"><a role="menuitem" tabindex="-1" href="#">第${i + 1}页</a></li>`
            }
            $('.dropdown-menu').html(temp);
            // 选择页面事件
            $('.dropdown-menu li').on('click', function () {
                currentPage = this.value;
                let newPage = `第${currentPage}页`;
                $('#dropdownMenu1').text(newPage);
                getproductlist(currentPage);
            })
        })
    }

    // 获取分类菜单数据
    function getproductlist(pageNum, callback) {
        pageNum = currentPage;
        $.ajax({
            url: 'http://193.112.55.79:9090/api/getproductlist',
            type: 'get',
            data: {
                categoryid: getUrl('categoryid') || 1,
                pageid: pageNum
            },
            success: (result) => {
                console.log(result);
                let data = result.result;
                let html = template('getProductlist', { arr: data });
                $('.fenlei').html(html);
                callback && callback(result);1
            }
        });
    }

    // 下一页按钮事件
    $('.nex').on('click', () => {
        if (currentPage == maxPage) {
            currentPage = 0;
        }
        currentPage++;
        getproductlist(currentPage)
    });

    // 上一页按钮事件
    $('.pre').on('click', () => {
        if (currentPage == 1) {
            currentPage = maxPage + 1;
        }
        currentPage--;
        getproductlist(currentPage);
    });



    // 获取 url 上数据
    function getUrl(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }

})




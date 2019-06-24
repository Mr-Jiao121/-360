

$(function () {

    // 框架
    $('#fullpage').fullpage({

        // sectionsColor是属性名 设置背景色

        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],

        loopTop:true,
        // 滚动到某一屏之后的回调函数 某一屏加载完毕之后
        afterLoad: function (anchorLink, index) {
            // 获取页面中所有section，删除他们的类，
            // 只有当前的添加current，类似开关，加给谁，谁就做动画
            $('.section').removeClass('current');
        // //
        // //     // 延时100毫秒执行 因为页面加载完毕之后才添加
            setTimeout(function () {
                $('.section').eq(index - 1).addClass('current');
            }, 100);
            console.log(index);
        }




    });


});

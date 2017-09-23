/**
 * Created by Hello on 2017/7/3.
 */
$ (function () {
    var items = $ (".carousel-inner .item");
    $ (window).on ("resize", function () {
        var width = $ (window).width ();
        if (width >= 768) { //非移动端 要用背景图片
            $ (items).each (function (index, value) {
                var item = $ (this);
                var imgSrc = item.data ("largeImage");
                item.html ($ ('<a href="javascript:;" class="pcImg"></a>').css ('backgroundImage', "url('" + imgSrc + "')"));
            });
        } else {  //  移动端要用img
            $ (items).each (function (index, value) {
                var item = $ (this);
                var imgSrc = item.data ('smallImage');
                item.html ('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc + '" alt=""></a>')
            });
        }
    }).trigger ('resize');

    /*添加移动端的滑动操作*/
    var startX, endX;
    var carousel_inner = $ (".carousel-inner")[0];// 转换为DOM元素
    var carousel = $ ('.carousel');
    carousel_inner.addEventListener ('touchstart', function (e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener ("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        /*手指离开屏幕之后要用changed来获取距离*/
        if (endX - startX > 0) {
            /*上一张*/
            carousel.carousel ('prev');
        } else if (endX - startX < 0) {
            /*下一张*/
            carousel.carousel ('next');
        }
    });

    /*计算产品块导航项的原始宽度*/
    var ul = $ (".wjs_product .nav-tabs");
    console.log (ul);
    var lis = ul.find ('li');
    var totalWidth = 0;
    lis.each (function (index, value) {
        totalWidth = totalWidth + $ (value).innerWidth ();
        /*
        * width()：只能得到当前元素的内容宽度
        * innerWidth()：能获取当前元素的内容宽度+padding
        * outerWidth()：能获取当前元素的内容的宽度+padding+border
        * outWidth(true)：获取元素的内容宽度+padding+border+maigin
        * */
    });
    ul.width (totalWidth);
    var myScroll = new IScroll ('.tabs_parent',
        {
            scrollX: true, scrollY: false
        });

});
//加载完成后执行
window.addEventListener('load', function () {

    //载入动画
    $("#loading-box").fadeOut();

}, false)

//回到顶部
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        $("#topup").css({
            display: 'block',
            transform: 'translateX(0px)',
            transition: '0.3s',
        });
    } else {
        $("#topup").css({
            transform: 'translateX(60px)',
            transition: '0.3s',
        });
    }
}

//强制夜间模式
function dark() {
    document.body.classList.add('night');
    document.cookie = "night=1;path=/";
}

//页面加载时强制启用夜间模式
window.addEventListener('load', function() {
    dark();
});

//移除模式切换功能
function switchNightMode() {
    // 强制保持夜间模式
    dark();
}

//移除系统偏好检测，强制使用夜间模式
window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', event => {
        // 无论系统设置如何，始终使用夜间模式
        dark();
    })
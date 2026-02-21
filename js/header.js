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

//显示当前时间
function updateCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// 更新背景图片
function updateBackgroundImage() {
    // 使用本地图片作为背景，确保背景能够正常显示
    const body = document.body;
    body.style.backgroundImage = `linear-gradient(rgba(26, 26, 26, 0.7), rgba(38, 38, 38, 0.6)), url('/images/【AI 绘画】1女孩，赤脚.png')`;
}

//页面加载时强制启用夜间模式并开始显示时间
window.addEventListener('load', function() {
    dark();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000); // 每秒更新一次时间
    updateBackgroundImage(); // 初始加载时更新背景
    setInterval(updateBackgroundImage, 60000); // 每分钟更新一次背景图片
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
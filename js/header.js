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

//根据天气设置背景
function setWeatherBackground(weather) {
    const weatherBackgrounds = {
        'clear': 'https://tse4-mm.cn.bing.net/th/id/OIP-C.ClearSky.jpg',
        'clouds': 'https://tse4-mm.cn.bing.net/th/id/OIP-C.CloudySky.jpg',
        'rain': 'https://tse4-mm.cn.bing.net/th/id/OIP-C.RainyWeather.jpg',
        'thunderstorm': 'https://tse4-mm.cn.bing.net/th/id/OIP-C.Thunderstorm.jpg',
        'snow': 'https://tse4-mm.cn.bing.net/th/id/OIP-C.SnowyWeather.jpg',
        'mist': 'https://tse4-mm.cn.bing.net/th/id/OIP-C.FoggyWeather.jpg',
        'default': 'https://tse4-mm.cn.bing.net/th/id/OIP-C.BCoQC5bMBWeJZyDawPWT1AHaEK?w=324&h=182&c=7&r=0&o=7&pid=1.7&rm=3'
    };
    
    let weatherType = 'default';
    if (weather.includes('clear')) weatherType = 'clear';
    else if (weather.includes('cloud')) weatherType = 'clouds';
    else if (weather.includes('rain')) weatherType = 'rain';
    else if (weather.includes('thunder')) weatherType = 'thunderstorm';
    else if (weather.includes('snow')) weatherType = 'snow';
    else if (weather.includes('mist') || weather.includes('fog')) weatherType = 'mist';
    
    const body = document.body;
    const backgroundImage = weatherBackgrounds[weatherType] || weatherBackgrounds.default;
    body.style.backgroundImage = `linear-gradient(rgba(26, 26, 26, 0.7), rgba(38, 38, 38, 0.6)), url('${backgroundImage}')`;
}

//获取当地天气
function getLocalWeather() {
    // 使用OpenWeatherMap API获取天气信息
    // 注意：这里使用了一个示例API key，实际使用时需要替换为真实的API key
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    
    // 首先获取用户的地理位置
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                // 调用OpenWeatherMap API
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=zh_cn`;
                
                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.weather && data.weather.length > 0) {
                            const weatherDescription = data.weather[0].description.toLowerCase();
                            setWeatherBackground(weatherDescription);
                        }
                    })
                    .catch(error => {
                        console.error('获取天气信息失败:', error);
                        // 如果获取天气失败，使用默认背景
                        setWeatherBackground('default');
                    });
            },
            function(error) {
                console.error('获取地理位置失败:', error);
                // 如果获取地理位置失败，使用默认背景
                setWeatherBackground('default');
            }
        );
    } else {
        console.error('浏览器不支持地理位置');
        // 如果浏览器不支持地理位置，使用默认背景
        setWeatherBackground('default');
    }
}

//页面加载时强制启用夜间模式并开始显示时间
window.addEventListener('load', function() {
    dark();
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000); // 每秒更新一次时间
    getLocalWeather(); // 获取当地天气并设置背景
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
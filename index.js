// Worker 脚本，用于处理静态文件请求

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // 处理根路径请求
  if (path === '/') {
    return await fetch('index.html');
  }
  
  // 处理静态文件请求
  // 直接返回静态文件，避免重定向循环
  return await fetch(path);
}

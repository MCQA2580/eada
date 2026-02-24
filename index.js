// Worker 脚本，用于处理静态文件请求

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // 规范化路径
  let filePath = path;
  
  // 处理根路径请求
  if (filePath === '/') {
    filePath = 'index.html';
  }
  // 处理没有扩展名的路径
  else if (!filePath.includes('.')) {
    // 尝试添加.html扩展名
    const htmlPath = filePath + '.html';
    try {
      const response = await fetch(htmlPath);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      // 如果添加.html失败，继续处理
    }
  }
  
  // 处理静态文件请求
  try {
    const response = await fetch(filePath);
    return response;
  } catch (error) {
    // 如果文件不存在，返回404错误
    return new Response('Not Found', {
      status: 404,
      statusText: 'Not Found'
    });
  }
}

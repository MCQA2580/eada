// Worker 脚本，用于处理静态文件请求

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // 处理根路径请求
  if (path === '/') {
    return await serveStaticFile('/index.html');
  }
  
  // 处理静态文件请求
  try {
    const response = await serveStaticFile(path);
    return response;
  } catch (error) {
    // 如果文件不存在，返回 404 页面
    return await serveStaticFile('/errors/404.html', 404);
  }
}

async function serveStaticFile(path, status = 200) {
  // 这里简化处理，实际部署时 Cloudflare Workers 会自动处理静态文件
  // 此脚本主要用于本地开发和测试
  return new Response(
    `Static file: ${path}`,
    {
      status,
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}

const http = require("http");
http.createServer(function (request, response) {
    console.log(request);
    if (request.url == '/') {
        console.log("接收到網頁請求!");
        response.writeHead(200, { "Content-Type": "text/HTML" });
        response.write("<h1>index</h1>");
        response.end();
    }
}).listen(process.env.PORT || 3000);
console.log("Server 已經開啟 port : 3000");
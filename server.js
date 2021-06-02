const http = require("http");

const server = http.createServer((req, res) => {
  setTimeout(() => {
    console.log('KU')
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "Hello World!",
      })
    );
  }, 100);
});

server.listen(8000);

const headers = require("./headers");

function errorHandle(res) {
  res.writeHead(400, headers);
  res.write(
    JSON.stringify({
      status: "false",
      message: "No found or input error",
    })
  );
  res.end();
}

module.exports = errorHandle;

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res)
{
    switch (req.url)
    {
        case '/':
            sendFile('pages/index.html', res);
            break;
        case '/createVoting':
            var temp = '';
            req.on('readable', function()
                 {
                    temp += req.read();
                 })
                .on('end', function()
                  {
                    console.log(temp);
                  });
            break;
    }

}).listen(1337, '127.0.0.1');

function sendFile(fileName, res)
{
    var file = fs.createReadStream(fileName);

    file.pipe(res);

    file.on('error', function()
        {
            res.statusCode = 500;
            res.end('Server error');
        })
        .on('close', function()
          {
            file.destroy();
          });
};
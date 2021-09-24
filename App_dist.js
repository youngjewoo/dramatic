"use strict";

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _express = _interopRequireDefault(require("express"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _dirname = _path["default"].resolve(); // express 는 함수이므로, 반환값을 변수에 저장한다.        


var app = (0, _express["default"])(); // CORS 설정

app.use((0, _cors["default"])());
app.use(_express["default"]["static"](_dirname + '/public')); // 9000 포트로 서버 오픈

app.listen(9000, function () {
    console.log('start! express server on port 9000');
});
app.get('/', function (req, res) {
    res.sendFile(_dirname + '/index.html');
});
app.get('/paste', function (req, res) {
    (0, _nodeFetch["default"])('https://www.naver.com').then(function (result) {
        return result.text();
    }).then(function (html) {
        var $ = _cheerio["default"].load(html);

        var title = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content');
        var description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content');
        var url = $('meta[property="og:url"]').attr('content');
        var image = $('meta[property="og:image"]').attr('content') || $('meta[property="og:image:url"]').attr('content');
        var icon = $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href');
        console.log(title, description, url, image, icon);
        res.send({
            title: title,
            description: description,
            image: image,
            url: url,
            icon: icon
        });
    })["catch"](function (error) {
        console.log(error);
    });
});
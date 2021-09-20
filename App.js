import fetch from 'node-fetch';
import express from 'express';
import cheerio from 'cheerio';
import path from 'path';
import cors from 'cors';

const __dirname = path.resolve();

// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express();

// CORS 설정
app.use(cors());

app.use(express.static(__dirname + '/public'));

// 9000 포트로 서버 오픈
app.listen(9000, function () {
  console.log('start! express server on port 9000');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/paste', (req, res) => {
  fetch('https://www.naver.com')
    .then((result) => result.text())
    .then((html) => {
      const $ = cheerio.load(html);
      const title =
        $('meta[property="og:title"]').attr('content') ||
        $('title').text() ||
        $('meta[name="title"]').attr('content');
      const description =
        $('meta[property="og:description"]').attr('content') ||
        $('meta[name="description"]').attr('content');
      const url = $('meta[property="og:url"]').attr('content');
      const image =
        $('meta[property="og:image"]').attr('content') ||
        $('meta[property="og:image:url"]').attr('content');
      const icon =
        $('link[rel="icon"]').attr('href') || $('link[rel="shortcut icon"]').attr('href');
      console.log(title, description, url, image, icon);
      res.send({
        title,
        description,
        image,
        url,
        icon,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

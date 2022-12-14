var express = require("express");
var router = express.Router();
var cheerio = require("cheerio");
var request = require("request");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
  request(
    "https://www.ptt.cc/bbs/Stock/index.html",
    function (error, response, body) {
      // if (!error && response.statusCode == 200) {
      //   res.send("hello world");
      // }

      const data = [];
      const $ = cheerio.load(body); // 載入 body
      const list = $(".r-list-container .r-ent");
      for (let i = 0; i < list.length; i++) {
        const title = list.eq(i).find(".title a").text();
        const author = list.eq(i).find(".meta .author").text();
        const date = list.eq(i).find(".meta .date").text();
        const link = list.eq(i).find(".title a").attr("href");

        data.push({ title, author, date, link });
      }
      console.log(list);
      console.log(data);
    }
  );
});

module.exports = router;

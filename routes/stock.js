var express = require("express");
var router = express.Router();
var cheerio = require("cheerio");
var request = require("request");
const iconv = require("iconv-lite");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");

  request(
    "https://tw.stock.yahoo.com/future/futures.html",
    function (error, response, body) {

      const data = [];
      const $ = cheerio.load(body); // 載入 body
      const list = $("#ext-wrap .ext-big-tbl tbody");
      for (let i = 0; i < list.length; i++) {
        const title = list.eq(i).find("tr").html();
        // const author = list.eq(i).find(".meta .author").text();
        // const date = list.eq(i).find(".meta .date").text();
        // const link = list.eq(i).find(".title a").attr("href");

        data.push({ title });
      }
      console.log(list);
      console.log(data);
      // console.log(iconv.decode(list, 'big5'));
    }
  );
});

module.exports = router;

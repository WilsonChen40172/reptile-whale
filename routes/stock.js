var express = require("express");
var router = express.Router();
var cheerio = require("cheerio");
var request = require("request");
// const iconv = require("iconv-lite");

/* GET users listing. */
router.get("/", function (req, res, next) {
  request(
    "https://tw.screener.finance.yahoo.net/future/aa03?fumr=futurefull",
    function (error, response, body) {
      const data = [];

      const $ = cheerio.load(body); // 載入 body
      const list = $("#ext-wrap").find("table");

      let tableNumber = 0; // 找第幾個table
      const title = list.eq(tableNumber).find("tbody tr");

      for (let index = 0; index < title.length; index++) {
        const element = title.eq(index).find("td");
        for (let index = 0; index < element.length; index++) {
          const tdElement = element.eq(index).html();
          data.push({ tdElement });
        }
      }
      res.send("respond with a resource" + list);
      console.log(data);

      //   for (let index = 0; index < data.length; index++) {
      //     console.log(data.eq(index).find("tr"));
      //   }
      
    }
  );
});

module.exports = router;

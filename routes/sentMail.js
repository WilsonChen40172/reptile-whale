var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "kk811215@gmail.com",
    pass: "sss",
  },
});

var options = {
    //寄件者
    from: 'kk811215@gmail.com',
    //收件者
    to: 'kelvin811215@gmail.com', 
    //副本
    // cc: 'account3@gmail.com',
    //密件副本
    // bcc: 'account4@gmail.com',
    //主旨
    subject: '這是 node.js 發送的測試信件', // Subject line
    //純文字
    text: 'Hello world2', // plaintext body
    //嵌入 html 的內文
    html: '<h2>Why and How</h2> <p>The <a href="http://en.wikipedia.org/wiki/Lorem_ipsum" title="Lorem ipsum - Wikipedia, the free encyclopedia">Lorem ipsum</a> text is typically composed of pseudo-Latin words. It is commonly used as placeholder text to examine or demonstrate the visual effects of various graphic design. Since the text itself is meaningless, the viewers are therefore able to focus on the overall layout without being attracted to the text.</p>', 
    //附件檔案
    attachments: [ {
        filename: 'text01.txt',
        content: '我是text01.txt的文字'
    }, {
        // filename: 'unnamed.jpg',
        // path: '/Users/Weiju/Pictures/unnamed.jpg'
    }]
};

//發送信件方法
transporter.sendMail(options, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('訊息發送: ' + info.response);
    }
});
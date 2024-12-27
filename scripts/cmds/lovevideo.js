module.exports.config = {
  'name': "lovevideo",
  'version': "1.0.1",
  'role': 0x0,
  'author': "MAHABUB RAHMAN",
  'description': "get love+video",
  'category': "media",
  'usages': "love+video",
  'countDowns': 0x5,
  'dependencies': {
    'request': ''
  }
};
module.exports.onStart = async ({
  api: _0x242074,
  event: _0x3008cd,
  args: _0x2211c7,
  client: _0xd3d2e1,
  Users: _0x18d05d,
  Threads: _0x21a5d0,
  __GLOBAL: _0x497c16,
  Currencies: _0x4d3802
}) => {
  const _0x3e0db4 = require("request");
  const _0x2b39a7 = require("fs-extra");
  var _0x36c200 = ["╔══❖•MAHABUB-BOT•❖══╗\n\n【•LOVE-VIDEO•】\n\n╚══❖•MAHABUB-BOT•❖══╝"];
  var _0x8f0345 = _0x36c200[Math.floor(Math.random() * _0x36c200.length)];
  var _0x13e737 = ["https://drive.google.com/uc?id=1Z-6qll7ACq8Ka1pKpnC3guGcXU0gNvoL", "https://drive.google.com/uc?id=1YHm_oC7xItLokbt_MCWu-VdMGavvx-G4", "https://drive.google.com/uc?id=1YvDanPpMZKK4s547h9Bsf0uL719AvVEG", "https://drive.google.com/uc?id=1YemK-RQH3gUX_I9ThgNJLC89yPF-VtEY", "https://drive.google.com/uc?id=1YN25UGQQCpZvN29Y5a84ZCYlL-rc_JL_", "https://drive.google.com/uc?id=1YXbox7CyKc6Gu-56WAtAPlxSTs51Yo9n", "https://drive.google.com/uc?id=1YNVe1cEM0JM3lj7sU49tuJn4-8ASYVd8", "https://drive.google.com/uc?id=1ZDjeuPfIyUkovgmJCRsE7vE67aOe0Sp2", "https://drive.google.com/uc?id=1YcJciCtidcUxRGihUyx2uDgDg3cBYUE5", "https://drive.google.com/uc?id=1ZIE6xPwXg6_oxG0K7xCWKS04MNyag3QL", "https://drive.google.com/uc?id=1ZF9cOD_fj26rpWDf6WOjUQNz8QuRJhkv", "https://drive.google.com/uc?id=1ZAXQwA5BsnN555FrWii2bb-kdLaoMxLP", "https://drive.google.com/uc?id=1YvWRk-wQ_I8kuJzOuw2Mx7Q-Rrgbw6CT", "https://drive.google.com/uc?id=1Z8vKgEBUkKbwgMPvv_6K_lvVsrBca_X8", "https://drive.google.com/uc?id=1ZG-BJq7pP4oh93U6tHIKuYvZ8XiidlCV"];
  var _0x14bde7 = () => _0x242074.sendMessage({
    'body': '' + _0x8f0345,
    'attachment': _0x2b39a7.createReadStream(__dirname + "/cache/B4D9L.mp4")
  }, _0x3008cd.threadID, () => _0x2b39a7.unlinkSync(__dirname + "/cache/B4D9L.mp4"));
  return _0x3e0db4(encodeURI(_0x13e737[Math.floor(Math.random() * _0x13e737.length)])).pipe(_0x2b39a7.createWriteStream(__dirname + "/cache/B4D9L.mp4")).on("close", () => _0x14bde7());
};

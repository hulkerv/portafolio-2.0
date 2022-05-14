const { Router } = require("express");
const router = Router();
const request = require("request");
const secretKey = "6Lce0eQfAAAAAEtAXf-UE5xFeApwgHldHoQ8T8Bs";

router.post("/send-mail", (req, res) => {
  const { captcha } = req.body;
  if (!captcha) {
    return res.json({ msg: "captcha token is undefined" });
  }
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

  request(verifyUrl, (err, response, body) => {
    if (err) {
      console.log(err);
    }
    body = JSON.parse(body);
    if (!body.success || body.score < 0.4) {
      return res.json({
        msg: "You may be a robot, mail not sended",
        score: body.score,
      });
    }
    return res.json({
      msg: "You have been verified!, mail sended",
      score: body.score,
    });
  });
});

module.exports = router;

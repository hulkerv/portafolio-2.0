const { Router } = require("express");
const router = Router();

router.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  contentHTML = `
    <h1>Contact information</h1>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Phone:</strong> ${subject}</li> 
    </ul>
    <p><strong>Subject:</strong> ${message}</p>
  `;
  console.log(contentHTML);
  res.send("received");
});
module.exports = router;

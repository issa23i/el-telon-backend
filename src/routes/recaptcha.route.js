const express = require("express");
const router = express.Router();
const { verifyToken } = require("../services/recaptcha.service");

router.post("/verify", async (req, res) => {
  const token = req.body.token;

  if (!token) {
    return res
      .status(400)
      .json({ success: false, message: "Token no proporcionado" });
  }

  try {
    const result = await verifyToken(token);
    res.status(result.success ? 200 : 403).json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error interno" });
  }
});

module.exports = router;

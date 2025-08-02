const axios = require("axios");

const verifyToken = async (token) => {
  const secret = process.env.RECAPTCHA_SECRET;

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret,
          response: token,
        },
      }
    );

    const data = response.data;

    if (data.success && (data.score === undefined || data.score >= 0.5)) {
      return { success: true, score: data.score };
    } else {
      return {
        success: false,
        score: data.score,
        message: "Verificación fallida",
      };
    }
  } catch (error) {
    console.error("Error al verificar reCAPTCHA:", error);
    throw error;
  }
};

module.exports = { verifyToken };

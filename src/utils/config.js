export const apiKey = process.env.WEATHER_API_KEY;
export const baseUrl = process.env.BASE_URL;
export const smtpUser = process.env.SMTP_USER;
export const smtpPass = process.env.SMTP_PASS;
export const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}`;
export const secret = process.env.TOKEN_SECRET;
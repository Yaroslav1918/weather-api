import { getWeatherByCity } from "../services/weatherService.js";

export const getWeather = async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const data = await getWeatherByCity(city);
    if (!data) {
      return res.status(404).json({ error: "City not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

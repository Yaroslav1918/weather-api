import axios from "axios";

export const getWeatherByCity = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await axios.get(url);
    const { temp_c, humidity, condition } = response.data.current;

    return {
      temperature: temp_c,
      humidity,
      description: condition.text,
    };
  } catch (error) {
    if (
      error.response.data?.error?.message?.includes(
        "No matching location found"
      )
    ) {
      return null;
    }

    throw new Error("Failed to fetch weather data.");
  }
};

import axios from "axios";

import { weatherUrl } from "../utils/config.js";

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${weatherUrl}&q=${city}`);
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

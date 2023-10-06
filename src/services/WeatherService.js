export const inputData = {
  apiKey: "970e35432c8547c088a95939232309",
  baseUrl: "https://api.weatherapi.com/v1/forecast.json?",
  city: "",
};

export const WeatherService = async function (inputData) {
  try {
    let lat, long;

    if (navigator.geolocation) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => resolve(position),
          (error) => reject(error)
        );
      });

      lat = position.coords.latitude;
      long = position.coords.longitude;
    } else {
      throw new Error("Geolocation is not supported by this browser.");
    }

    let geoCo = [];
    if (inputData.city) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${inputData.city}`
      );

      [geoCo] = await response.json();
    }

    const res = await fetch(
      `${inputData.baseUrl}key=${inputData.apiKey}&q=${geoCo.lat || lat},${
        geoCo.lon || long
      }&days=7&aqi=no&alerts=no`
    );
    const Weatherdata = await res.json();
    return Weatherdata;
  } catch (err) {
    console.error(err.message);
  }
};

import { Spinner } from "@/components/ui/spinner";
import { LucideWind, LucideWindArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWind } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiThunderstorm,
  WiFog,
  WiHumidity,
} from "react-icons/wi";

interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  description: string;
  main: string;
  pressure: number;
}

export default function WeatherCard() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Manado&units=metric&lang=id&appid=${import.meta.env.VITE_OPENWEATHER_KEY}`
      );
      const data = await res.json();

      setWeather({
        temp: Math.round(data.main.temp),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        main: data.weather[0].main,
        pressure: data.main.pressure
      });
    } catch (error) {
      console.error("Gagal ambil cuaca:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();

    const interval = setInterval(fetchWeather, 300000); // 5 menit
    return () => clearInterval(interval);
  }, []);

  const WeatherIcon = () => {
    switch (weather?.main) {
      case "Clear":
        return <WiDaySunny size={80} />;
      case "Rain":
        return <WiRain size={80} />;
      case "Clouds":
        return <WiCloudy size={80} />;
      case "Thunderstorm":
        return <WiThunderstorm size={80} />;
      case "Fog":
      case "Mist":
        return <WiFog size={80} />;
      default:
        return <WiCloudy size={80} />;
    }
  };

  if (loading) {
    return (
      <div className="bg-[#CFE6FF] p-6 rounded-2xl text-center">
            <Spinner />
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className="bg-[#CFE6FF] px-6 py-5 rounded-2xl shadow-md justify-between items-center gap-6">
        <div className="text-[#1C398E] font-semibold text-md flex gap-2 items-center justify-items-start">
            <IoLocationOutline size={20} />
          <span>Manado, Indonesia</span>
        </div>

        <div className="flex flex-row justify-center items-center gap-6 text-center text-[#1C398E]">
          <p className="md:text-6xl text-3xl font-bold">{weather.temp}°C</p>
          <WeatherIcon />
        </div>
        <div className="text-md font-medium text-[#1C398E] text-center">
            <p className="capitalize text-[#1C398E] my-3">
                {weather.description}
            </p>
        </div>
        <div className="flex md:flex-row flex-col gap-4 items-center justify-evenly text-[#1C398E]">
            <div className=" justify-items-center">
                <WiHumidity size={35} />
                <p> Kelembapan: {weather.humidity}%</p>
            </div>
            <div className="justify-items-center">
                <LucideWind size={35} />
                <p> Angin: {weather.wind} m/s</p>

            </div>
            <div className="justify-items-center">
                <LucideWindArrowDown size={35} />
                <p> tekanan: {weather.pressure} hpa</p>
            </div>

        </div>
    </div>
  );
}

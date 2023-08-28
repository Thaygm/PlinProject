import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WeatherData } from '../../types/types';
import { convertDescription, convertImage } from '../../utils/util';

const ClimaTempo: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const API_KEY = process.env.REACT_APP_API_KEY;
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          let weatherData = {
            name: response.data.name,
            temp: `${Math.round(response.data.main.temp)}`,
            description: convertDescription(response.data.weather[0].main)
          };
          setWeatherData(weatherData);
        });
      } else {
        setError('Geolocalização não suportada no seu navegador.');
      }
    } catch (error) {
      setError('Erro ao buscar dados de clima.');
    }
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${convertImage(weatherData?.description)})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '450px',
    minHeight: '37vw',
    minWidth: '40vh'
  };
  return (
    <div
      id="App"
      className="flex flex-grow flex-col items-center justify-center min-h-screen flex justify-between bg-white rounded-b-lg"
      style={backgroundStyle}
    >
      <div className="w-90vw rounded-lg p-6 bg-center">
        <h1 className="text-darkgreen text-2xl font-semibold">Aplicação de Clima</h1>
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : weatherData ? (
          <div>
            <h2 className="text-darkTeal font-semibold justify-content align-items text-xl mt-4">
              Condições em {weatherData.name}
            </h2>
            <p className="text-teal font-semibold">Temperatura: {weatherData.temp}°C</p>
            <p className="text-waterGreen font-semibold">Descrição: {weatherData.description}</p>
          </div>
        ) : (
          <p className="mt-4">Carregando...</p>
        )}
      </div>
    </div>
  );
};

export default ClimaTempo;

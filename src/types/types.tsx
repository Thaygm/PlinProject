export type WeatherData = {
  name: string;
  temp: string;
  description: string | undefined;
};

export type DescriptionMap = {
  Clear: string;
  Clouds: string;
  Drizzle: string;
  Rain: string;
  Haze: string;
};

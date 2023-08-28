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
export type FormAddressData = {
  streetName?: string;
  cityName?: string;
  stateName?: string;
};

export type FormContactData = {
  nome?: string;
  email?: string;
  mensagem?: string;
  arquivo?: {
    nome: string;
  } | null;
};

export type AddressResult = {
  cep?: string;
  logradouro?: string;
  bairro?: string;
};

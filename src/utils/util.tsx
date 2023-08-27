import Solimg from "../assets/SOL.png";
import ChuvaImg from "../assets/CHUVA.png";
import ChuviscoImg from "../assets/CHUVISCO.png";
import NeblinaImg from "../assets/NEBLINA.png";
import NubladoImg from "../assets/NUBLADO.png";

export const convertDescription = (
  oldDescription: string
): string | undefined => {
  let mapper = new Map([
    ["Clear", "Céu Limpo"],
    ["Clouds", "Nublado"],
    ["Drizzle", "Chuviscos"],
    ["Rain", "Chuva"],
    ["Haze", "Neblina"],
  ]);

  return mapper.get(oldDescription)?.toString();
};
export const convertImage = (fileName: string | any) => {
  if (fileName != typeof String) {
    return Solimg;
  }

  let mapper = new Map([
    ["Clear", Solimg],
    ["Clouds", NubladoImg],
    ["Rain", ChuvaImg],
    ["Drizzle", ChuviscoImg],
    ["Haze", NeblinaImg],
  ]);
  return mapper.get(fileName)?.toString();
};

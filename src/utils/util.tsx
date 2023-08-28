import Solimg from '../assets/SOL.png';
import ChuvaImg from '../assets/CHUVA.png';
import ChuviscoImg from '../assets/CHUVISCO.png';
import NeblinaImg from '../assets/NEBLINA.png';
import NubladoImg from '../assets/NUBLADO.png';

export const convertDescription = (oldDescription: string): string | undefined => {
  let mapper = new Map([
    ['Clear', 'Céu Limpo'],
    ['Clouds', 'Nublado'],
    ['Drizzle', 'Chuviscos'],
    ['Rain', 'Chuva'],
    ['Haze', 'Neblina']
  ]);

  return mapper.get(oldDescription)?.toString();
};
export const convertImage = (fileName: string | any): string => {
  let mapper = new Map([
    ['Céu Limpo', Solimg],
    ['Nublado', NubladoImg],
    ['Chuva', ChuvaImg],
    ['Chuviscos', ChuviscoImg],
    ['Neblina', NeblinaImg]
  ]);
  return mapper.get(fileName)?.toString() === undefined ? Solimg : mapper.get(fileName)?.toString();
};

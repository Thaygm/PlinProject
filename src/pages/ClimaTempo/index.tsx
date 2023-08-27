import React from "react";
import ChuvaImg from "../../assets/CHUVA.png";
import ChuviscoImg from "../../assets/CHUVISCO.png";
import NeblinaImg from "../../assets/NEBLINA.png";
import NubladoImg from "../../assets/NUBLADO.png";
import Solimg from "../../assets/SOL.png";

const descriptionMapping = {
  Clear: "Céu Limpo",
  Clouds: "Nublado",
  Drizzle: "Chuviscos",
  Rain: "Chuva",
  Haze: "Neblina",
};

const weatherToImage = {
  Clear: Solimg,
  Clouds: NubladoImg,
  Rain: ChuvaImg,
  Drizzle: ChuviscoImg,
  Haze: NeblinaImg,
};

const ClimaTempo: React.FC = () => {
  return (
    <div>
      <p>{ChuvaImg}</p>
      <p>{process.env.REACT_APP_API_KEY}</p>
    </div>
  );
};

export default ClimaTempo;

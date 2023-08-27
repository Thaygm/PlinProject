import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="flex items-center">
      <div id="menu" className="flex justify-between min-w-[60vw] mt-2 ml-3">
        <div id="cabecalho" className="flex flex-col">
          <span className="font-bold text-lg text-navy transition duration-500 hover:brightness-50">
            Menu
          </span>
          <div className="flex items-center  bg-gradient-to-r from-teal via-winter to-navy pt-1 w-full rounded-8"></div>
        </div>
        <div id="opcoesMenu" className="flex justify-between">
          <Link to="/">Previsão do Tempo</Link>
          <Link to="/endereco">Buscar Endereço</Link>
          <Link to="/contato">Formulário</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

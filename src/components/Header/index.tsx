import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="flex items-center">
      <div id="menu" className="flex justify-between min-w-[60%] lg:w-[40%] mt-2 ml-3">
        <div id="cabecalho" className="flex flex-col">
          <span className="font-bold text-lg text-navy transition duration-500 hover:brightness-50">
            Menu
          </span>
          <div className="flex items-center  bg-gradient-to-r from-teal via-winter to-navy pt-1 w-full rounded-8"></div>
        </div>
        <div id="opcoesMenu" className="flex flex-col md:flex-row">
          <Link
            to="/"
            className="font-bold text-navy transition duration-300 hover:text-darkTeal my-2 md:my-0 md:mx-4"
          >
            Previsão do Tempo
          </Link>
          <Link
            to="/endereco"
            className="font-bold text-navy transition duration-300 hover:text-darkTeal my-2 md:my-0 md:mx-4"
          >
            Buscar Endereço
          </Link>
          <Link
            to="/contato"
            className="font-bold text-navy transition duration-300 hover:text-darkTeal my-2 md:my-0 md:mx-4"
          >
            Formulário
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Header;

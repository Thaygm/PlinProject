import React, { useState } from 'react';
import axios from 'axios';
import { AddressResult, FormAddressData } from '../../types/types';

const BuscaEndereco: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [addressData, setAddressData] = useState<FormAddressData | undefined>();
  const [results, setResults] = useState<Array<AddressResult>>([]);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setAddressData({ ...addressData, [e.target.name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(addressData);

    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${addressData?.stateName}/${addressData?.cityName}/${addressData?.streetName}/json/`
      );
      console.log(response);

      setResults(response.data);
    } catch (error) {
      console.error('Erro ao buscar CEPs', error);
    }
    setLoading(false);
  };
  return (
    <div id="container" className="flex-col items-center flex flex-wrap container mx-auto p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block">Nome do Estado:</label>
          <input
            type="text"
            value={addressData?.stateName}
            name="stateName"
            onChange={handleChange}
            placeholder="Digite o nome do estado"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block">Nome da Cidade:</label>
          <input
            type="text"
            value={addressData?.cityName}
            name="cityName"
            onChange={handleChange}
            placeholder="Digite o nome da cidade"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block">Nome da Rua:</label>
          <input
            type="text"
            value={addressData?.streetName}
            name="streetName"
            onChange={handleChange}
            placeholder="Digite o nome da rua"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-waterGreen hover:bg-darkWinter text-black font-bold py-2 px-4 rounded"
        >
          Buscar CEP
        </button>
      </form>
      {loading && <p>Carregando...</p>}
      {results.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold">Resultados:</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index} className="mt-2">
                <strong>CEP:</strong> {result.cep}, <strong>Logradouro:</strong> {result.logradouro}
                , <strong>Bairro:</strong> {result.bairro}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BuscaEndereco;

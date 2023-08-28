import React, { useState } from 'react';
import { FormContactData } from '../../types/types';

const FormContato: React.FC = () => {
  const [contactData, setContactData] = useState<FormContactData | undefined>();
  const handleChange = (e: any) => {
    const value = e.target.value;
    setContactData({ ...contactData, [e.target.name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(contactData);
  };
  const handleFileDelete = () => {
    setContactData({ ...contactData, arquivo: null });
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Página de Contato</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="block font-semibold">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={contactData?.nome}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactData?.email}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="mensagem" className="block font-semibold">
            Mensagem:
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={contactData?.mensagem}
            onChange={handleChange}
            className="border p-2 w-full h-24"
          />
        </div>
        <div>
          <label htmlFor="arquivo" className="block font-semibold">
            Envie um arquivo:
          </label>
          <input
            type="file"
            id="arquivo"
            name="arquivo"
            onChange={handleChange}
            className="w-full"
          />
          {contactData?.arquivo && (
            <div className="mt-2">
              <p>Arquivo selecionado: {contactData?.arquivo.nome}</p>
              <button
                type="button"
                onClick={handleFileDelete}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
              >
                Excluir Arquivo
              </button>
            </div>
          )}
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full mx-auto mb-10 bg-waterGreen hover:bg-darkWinter text-black font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContato;

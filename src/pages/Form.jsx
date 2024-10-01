import { useState } from "react";
import { mock } from "../exemples";

import Markdown from "markdown-to-jsx";

export default function Form() {

  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    setOutput(mock)
    setInputText("");
  }

  return (
    <main>
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 mt-3">Criar Plano de Estudos</h1>

        <form className="max-w-md mx-auto flex flex-col md:flex-row justify-between items-center gap-5" onSubmit={handleSubmit}>
          <div className="mb-5 w-full">
            <label htmlFor="input" className="block mb-2 text-md font-medium text-gray-900">Objetivo de Estudo</label>
            <input
              type="text"
              id="input"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Tema do planejamento"
              required
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center w-full md:w-1/2">
            Criar Plano
          </button>
        </form>
      </div>

      {output && (
        <div className="max-w-sm mx-auto">
          {/* TODO: Colocar uma margin entre os titulos e semanas */}
          <Markdown>{output[0].response}</Markdown>
        </div>
      )}
    </main>
  );
}

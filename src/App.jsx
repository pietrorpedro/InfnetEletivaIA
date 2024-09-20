import { useState } from "react";
import { mock } from "./exemples";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  function handleSubmitInput(e) {
    e.preventDefault();
    setOutput(mock);
    setInput("");
  }

  return (
    <>
      <form onSubmit={handleSubmitInput}>
        <label>
          Tema
          <input
            type="text"
            placeholder="Digite o tema a ser pesquisado"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </label>

        <button type="submit">Pesquisar</button>
      </form>

      {output && (
        <div className="output">
          <pre>{output[0].response}</pre>
        </div>
      )}
    </>
  );
}

export default App;

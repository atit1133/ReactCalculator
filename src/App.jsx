import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calculate = () => {
    let answers = eval(inputValue);
    setInputValue(answers);
  };

  const clear = () => {
    setInputValue("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h1 className="text-3xl mb-4 font-bold text-center text-gray-800">
          Calculator
        </h1>
        <div className="grid grid-cols-4 gap-2">
          <input
            type="text"
            value={inputValue}
            className="col-span-4 p-2 border rounded text-right"
            readOnly
          />
          <button
            type="button"
            className="col-span-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            onClick={clear}
          >
            C
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
            onClick={() => display("/")}
          >
            /
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
            onClick={() => display("*")}
          >
            *
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("7")}
          >
            7
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("8")}
          >
            8
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("9")}
          >
            9
          </button>
          <button
            type="button"
            className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
            onClick={() => display("-")}
          >
            -
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("4")}
          >
            4
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("5")}
          >
            5
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("6")}
          >
            6
          </button>
          <button
            type="button"
            className="bg-yellow-500 row-span-2 text-white p-2 rounded hover:bg-yellow-600"
            onClick={() => display("+")}
          >
            +
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("1")}
          >
            1
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("2")}
          >
            2
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("3")}
          >
            3
          </button>
          <button
            type="button"
            className="col-span-2 bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display("0")}
          >
            0
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            onClick={() => display(".")}
          >
            .
          </button>
          <button
            type="button"
            className=" bg-green-500 text-white p-2 rounded hover:bg-green-600"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

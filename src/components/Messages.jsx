import { useEffect, useState } from "react";

export const Messages = () => {
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setAdvice(json.slip.advice);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="max-w-full p-5 bg-red-300">
        <p>Количество кликов: {count}</p>
      </div>
      <div className="max-w-full p-5">
        <button
          className="bg-green-500 p-6"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Кликай на меня
        </button>
      </div>
      <div className="max-w-full p-5 bg-orange-200 text-lg text-red-700 rounded-2xl">
        <p>{advice}</p>
      </div>
    </div>
  );
};
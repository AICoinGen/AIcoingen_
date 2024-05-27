"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import OpenAI from "openai";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

const ERC20 = ({ setActive, createERC20 }) => {
  const [token, setToken] = useState({
    name: "",
    symbol: "",
    supply: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleTokenInfo = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e.target.value });
  };

  const suggestCoin = async () => {
    setLoading(true);
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "your role and goal is to be an AI ERC20 Token creator, your job is to return a json file format that suggest a name and a symbol",
        },
      ],
      model: "gpt-3.5-turbo",
    });
    let suggestCoin = JSON.parse(chatCompletion.choices[0].message.content);
    setToken({ name: suggestCoin.name, symbol: suggestCoin.symbol });
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black rounded-xl shadow-xl p-8 relative w-96 sm:w-80 md:w-96 lg:w-2/3 xl:w-1/3">
        <span
          onClick={() => setActive(false)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <AiOutlineClose />
        </span>
        <h4 className="login-title text-center text-white mb-4">
          Create ERC20 Token
        </h4>
        <div id="contactForm" className="log-form">
          <input
            type="text"
            id="name"
            className="rounded-lg w-full bg-black border border-white p-2.5 mb-4 text-white"
            placeholder="Name"
            value={token.name}
            required
            onChange={(e) => handleTokenInfo("name", e)}
          />
          <input
            type="text"
            id="symbol"
            className="rounded-lg w-full bg-black border border-white p-2.5 mb-4 text-white"
            placeholder="Symbol"
            required
            value={token.symbol}
            onChange={(e) => handleTokenInfo("symbol", e)}
          />
          <input
            type="number"
            id="supply"
            className="rounded-lg w-full bg-black border border-white p-2.5 mb-2 text-white"
            placeholder="Total Supply"
            required
            onChange={(e) => handleTokenInfo("supply", e)}
          />
          <button
            onClick={() => suggestCoin()}
            type="button"
            className="font-medium w-full rounded-lg mt-3 py-2.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white"
          >
            {loading ? "Generating..." : "AI Name Generator"}
          </button>
          <button
            onClick={() => createERC20(token)}
            type="button"
            className="font-medium w-full rounded-lg mt-3 py-2.5 bg-blue-600 text-white"
          >
            Create Token
          </button>
          <div className="text-center mt-4 text-white">
            Create your ERC20 Token with a minimum fee of{" "}
            <a className="text-blue-500">1 Matic</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERC20;

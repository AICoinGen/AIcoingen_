"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import OpenAI from "openai";

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
});

const ERC20 = ({ setActive, createERC20 }) => {
  const [token, setToken] = useState({
    name: "",
    symbol: "",
    supply: 0,
  });

  const handleTokenInfo = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e.target.value });
  };
  const suggestCoin = async () => {
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
  };
  // useEffect(() => {
  //   async function main() {
  //     const chatCompletion = await openai.chat.completions.create({
  //       messages: [
  //         {
  //           role: "user",
  //           content:
  //             "your role and goal is to be an AI ERC20 Token creator, your job is to return a json file format that suggest a name and a symbol",
  //         },
  //       ],
  //       model: "gpt-3.5-turbo",
  //     });
  //     console.log(JSON.parse(chatCompletion.choices[0].message.content));
  //   }

  //   main();
  // }, []);

  return (
    <div class="login-area area-padding fix">
      <div class="login-overlay"></div>
      <div class="container">
        <div class="row justify-content-center text-center ">
          <div class="col-xl-6 col-lg-6 col-md-8">
            <div class="login-form signup-form">
              <span onClick={() => setActive(false)}>
                <AiOutlineClose />
              </span>
              <h4 class="login-title text-center">Create ERC20 Token</h4>
              <button
                onClick={() => suggestCoin()}
                type="submit"
                id="submit"
                class="slide-btn color-btn login-btn"
              >
                AI suggest Coin
              </button>
              <div id="contactForm" class="log-form">
                <input
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Name"
                  value={token.name}
                  required
                  onChange={(e) => handleTokenInfo("name", e)}
                />
                <input
                  type="text"
                  id="email"
                  class="form-control"
                  placeholder="Symbol"
                  required
                  value={token.symbol}
                  onChange={(e) => handleTokenInfo("symbol", e)}
                />
                <input
                  type="number"
                  id="msg_subject"
                  class="form-control"
                  placeholder="total supply"
                  required
                  onChange={(e) => handleTokenInfo("supply", e)}
                />

                <button
                  onClick={() => createERC20(token)}
                  type="submit"
                  id="submit"
                  class="slide-btn color-btn login-btn"
                >
                  Create Token
                </button>
                <div id="msgSubmit" class="h3 text-center hidden"></div>
                <div class="clearfix"></div>
                <div class="clear"></div>
                <div class="separetor text-center">
                  <span>Create your ERC20 Token</span>
                </div>
                <div class="sign-icon">
                  <div class="acc-not">
                    with minimum fee of <a> 1 matic</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERC20;

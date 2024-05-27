import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Transfer = ({ setTransfer, transferNativeToken }) => {
  const [token, setToken] = useState({
    address: "",
    tokenNo: "",
  });

  const handleTokenInfo = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e.target.value });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black rounded-xl shadow-xl p-8 relative w-96 sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3">
        <span
          onClick={() => setTransfer(false)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <AiOutlineClose />
        </span>
        <h4 className="login-title text-center text-white mb-4">
          Transfer Token
        </h4>
        <div id="contactForm" className="log-form">
          <input
            type="text"
            id="address"
            className="rounded-lg w-full bg-black border border-white p-2.5 mb-4 text-white"
            placeholder="Address"
            required
            onChange={(e) => handleTokenInfo("address", e)}
          />
          <input
            type="text"
            id="tokenNo"
            className="rounded-lg w-full bg-black border border-white p-2.5 mb-4 text-white"
            placeholder="Amount"
            required
            onChange={(e) => handleTokenInfo("tokenNo", e)}
          />
          <button
            onClick={() => transferNativeToken(token)}
            type="button"
            className="font-medium w-full rounded-lg mt-3 py-2.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-white"
          >
            Transfer Token
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

export default Transfer;

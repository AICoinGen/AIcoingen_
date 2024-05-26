import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { MdPowerSettingsNew } from "react-icons/md";
import { BsBoxArrowDown, BsFillSendFill } from "react-icons/bs";
const Swap = ({ nativeToken, transferNativeToken }) => {
  const [token, setToken] = useState({
    address: "",
    tokenNo: "",
  });

  const handleTokenInfo = (fieldName, e) => {
    setToken({ ...token, [fieldName]: e.target.value });
  };
  return (
    <div class="swap-area bg-color-5 fix area-padding">
      <div class="container">
        <div class="row d-flex flex-wrap align-items-center mx-6">
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="swap-inner">
              <div class="swap-token left-headline">
                <div class="pb-2">COIN SWAP</div>
                <h2>
                  You can swap{" "}
                  <span class="text-[#ff03b7] font-bold">AICoin token</span>{" "}
                  anytime
                </h2>
                <p class="py-3 text-lg font-normal">
                  AICoin is the native cryptocurrency of this platform, offering
                  seamless and secure transactions. With AICoin, you can send
                  any amount to anywhere in the world quickly and efficiently,
                  making it the ideal choice for your digital financial needs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="money-send">
              <div class="calculator-inner rounded-xl">
                <div class="single-cal">
                  <div class="swap-top d-flex flex-wrap align-items-center">
                    <div class=" rounded-full">
                      <span>Token</span>
                    </div>
                    <div class="swap-right">
                      <ul class="dashboard-right-menus">
                        <li>
                          <a href="#0" class="thumbs">
                            <FiSettings />
                          </a>

                          <div class="notification-area bg-black p-4 rounded-lg left-part">
                            <div class="">
                              <span class="set-text">Native Token</span>
                              <div class="swap-set">
                                <span>
                                  Find detail of our ERC20 Native token
                                </span>
                                <ul>
                                  <li>
                                    <a>{nativeToken?.name}</a>
                                  </li>
                                  <li>
                                    <a>{nativeToken?.symbol}</a>
                                  </li>
                                  <li class="pt-2">
                                    <a>Tol: {nativeToken?.totalSupply}</a>
                                  </li>
                                </ul>
                              </div>
                              <div class="swap-set slipege">
                                <span>Address: {nativeToken?.address}</span>
                                <ul>
                                  <li>
                                    <a>Bal: {nativeToken?.balance}</a>
                                  </li>
                                  <li>
                                    <a>Dec: {nativeToken?.decimals}</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="notification-area side-part">
                            <div class="author-body text-center">
                              <span>
                                Aspernatur sit adipisci quaerat unde at neque
                                Redug Lagre dolorAspernatur sit adipisci quaerat
                                unde at neque Redug Lagre dolor.Aspernatur sit
                                adipisci quaerat unde at neque Redug Lagre dolor
                                <br />
                                <a href="#">Buy Token</a>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="inner-form">
                    <form action="#">
                      <label>Address</label>
                      <input
                        type="text"
                        class=" w-full rounded-lg p-2 bg-[#131313] my-2"
                        onChange={(e) => handleTokenInfo("address", e)}
                        placeholder="address"
                      />
                    </form>
                  </div>

                  <div class="inner-form">
                    <form action="#">
                      <label>
                        Amount <span>{nativeToken?.symbol} Token</span>
                      </label>
                      <input
                        onChange={(e) => handleTokenInfo("tokenNo", e)}
                        type="text"
                        class="w-full rounded-lg p-2 bg-[#131313] my-2"
                        placeholder="amount"
                      />{" "}
                    </form>
                  </div>
                  <div class="inner-form-text">
                    <div class="rate-text d-flex flex-wrap align-items-center">
                      <span>Now, you can transfer your Native token</span>
                    </div>
                  </div>
                  <button
                    onClick={() => transferNativeToken(token)}
                    class="cale-btn rounded-lg"
                  >
                    Transfer Token
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;

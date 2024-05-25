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
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-xl-6 col-lg-6 col-md-6">
            <div class="swap-inner">
              <div class="swap-token left-headline">
                <div class="top-text-title">COIN SWAP</div>
                <h2>
                  You can swap <span class="color-text-bold">AICoin token</span>{" "}
                  anytime
                </h2>
                <p>
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
              <div class="calculator-inner">
                <div class="single-cal">
                  <div class="swap-top d-flex flex-wrap align-items-center">
                    <div class="swap-left">
                      <span>Token</span>
                    </div>
                    <div class="swap-right">
                      <ul class="dashboard-right-menus">
                        <li>
                          <a href="#0" class="thumbs">
                            <FiSettings />
                          </a>

                          <div class="notification-area left-part">
                            <div class="notifacation-header">
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
                                  <li>
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
                          <a href="#0" class="author">
                            <MdPowerSettingsNew />
                          </a>
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
                        class="form-input"
                        onChange={(e) => handleTokenInfo("address", e)}
                        placeholder="address"
                      />
                      <span>
                        <BsFillSendFill />
                      </span>
                    </form>
                  </div>
                  <div class="middle-inti text-center">
                    <a href="#">
                      <BsBoxArrowDown />
                    </a>
                  </div>
                  <div class="inner-form">
                    <form action="#">
                      <label>Amount</label>
                      <input
                        onChange={(e) => handleTokenInfo("tokenNo", e)}
                        type="text"
                        class="form-input"
                        placeholder="amount"
                      />{" "}
                      <span>{nativeToken?.symbol} Token</span>
                    </form>
                  </div>
                  <div class="inner-form-text">
                    <div class="rate-text d-flex flex-wrap align-items-center">
                      <span>Now, you can transfer your Native token</span>
                    </div>
                  </div>
                  <button
                    onClick={() => transferNativeToken(token)}
                    class="cale-btn"
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

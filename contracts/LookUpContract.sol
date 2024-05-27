// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";
import "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract LookUpContract is FunctionsClient, ConfirmedOwner {
    using FunctionsRequest for FunctionsRequest.Request;

    struct ERC20Token {
        uint256 tokenID;
        address owner;
        string tokenSupply;
        string tokenName;
        string tokenSymbol;
        string tokenAddress;
        string tokenTransactionHash;
        string tokenCreatedDate;
    }

    struct Donation {
        uint256 donationID;
        address donor;
        uint256 fund;
    }

    address payable contractOwner = payable(0xb309098bcB51E5C687a16FA41bD6055f47c9eBb0);
    uint256 public listingPrice = 0.025 ether;
    mapping(uint256 => ERC20Token) private erc20Tokens;
    mapping(uint256 => Donation) private donations;
    uint256 public _tokenIndex;
    uint256 public _donationIndex;

    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;

    error UnexpectedRequestID(bytes32 requestId);

    event DonationReceived(address indexed donor, uint256 amount);
    event ERC20TokenListed(uint256 indexed id, address indexed owner, string indexed token);
    event Response(bytes32 indexed requestId, string result, bytes response, bytes err);

    string source = 
        "const openaiApiKey = args[0];"
        "const prompt = args[1];"
        "const axios = require('axios');"
        "const response = await axios.post('https://api.openai.com/v1/chat/completions', {"
        "    model: 'gpt-3.5-turbo',"
        "    messages: ["
        "        { role: 'system', content: 'You are a poetic assistant, skilled in explaining complex programming concepts with creative flair.' },"
        "        { role: 'user', content: prompt }"
        "    ]"
        "}, { headers: { 'Authorization': `Bearer ${openaiApiKey}`, 'Content-Type': 'application/json' }});"
        "if (response.data.error) {"
        "    throw Error('Request failed');"
        "}"
        "return Functions.encodeString(response.data.choices[0].message.content);";

    uint32 gasLimit = 300000;

    bytes32 donID = 0x66756e2d657468657265756d2d7365706f6c69612d3100000000000000000000;

    AggregatorV3Interface internal priceFeed;

    modifier onlyOwner() {
        require(
            msg.sender == contractOwner,
            "only owner of the contract can change the listing price"
        );
        _;
    }

    constructor() FunctionsClient(0xA9d587a00A31A52Ed70D6026794a8FC5E2F5dCb0) ConfirmedOwner(msg.sender) {
        priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419); // ETH/USD price feed address on Ethereum mainnet
    }

    function createERC20Token(address _owner, string memory _tokenSupply, string memory _tokenName, string memory _tokenSymbol,
     string memory _tokenAddress, string memory _tokenTransactionHash, string memory _tokenCreatedData
     ) payable external returns (uint256, address, string memory, string memory, string memory, string memory ) {
         _tokenIndex++;
         uint256 _tokenId = _tokenIndex;
         ERC20Token storage erc20Token = erc20Tokens[_tokenId];

         erc20Token.tokenID = _tokenId;
         erc20Token.owner = _owner;
         erc20Token.tokenSupply = _tokenSupply;
         erc20Token.tokenName = _tokenName;
         erc20Token.tokenSymbol = _tokenSymbol;
         erc20Token.tokenAddress = _tokenAddress;
         erc20Token.tokenTransactionHash = _tokenTransactionHash;
         erc20Token.tokenCreatedDate = _tokenCreatedData;
        
        emit ERC20TokenListed(_tokenId, _owner, _tokenAddress);

        return ( _tokenId, _owner, _tokenAddress, _tokenName, _tokenSymbol, _tokenAddress);
    }

    function getAllERC20TokenListed() public view returns (ERC20Token[] memory) {
        uint256 itemCount = _tokenIndex;
        uint256 currentIndex = 0;

        ERC20Token[] memory items = new ERC20Token[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
                uint256 currentId = i + 1;
                ERC20Token storage currentItem = erc20Tokens[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
        }
        return items;
    }
    
    function getERC20Token(uint256 _tokenID) external view returns (
        uint256,
        address,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory,
        string memory) {
        ERC20Token memory erc20Token = erc20Tokens[_tokenID];
        return ( 
        erc20Token.tokenID,
        erc20Token.owner,
        erc20Token.tokenSupply,
        erc20Token.tokenName,
        erc20Token.tokenSymbol,
        erc20Token.tokenAddress,
        erc20Token.tokenTransactionHash,
        erc20Token.tokenCreatedDate
         );
    }
    
    function getUserERC20Tokens(address _user) external view returns (ERC20Token[] memory) {
         uint256 totalItemCount = _tokenIndex;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (erc20Tokens[i + 1].owner == _user) {
                itemCount += 1;
            }
        }

        ERC20Token[] memory items = new ERC20Token[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (erc20Tokens[i + 1].owner == _user) {
                uint256 currentId = i + 1;
                ERC20Token storage currentItem = erc20Tokens[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function getERC20TokenListingPrice() public view returns (uint256) {
        return listingPrice;
    }
  
    function updateListingPrice(uint256 _listingPrice, address owner)
        public
        payable
        onlyOwner
    {
        require(
            contractOwner == owner,
            "Only contract owner can update listing price."
        );
        listingPrice = _listingPrice;
    }

    function withdraw() external onlyOwner {
            uint256 balance = address(this).balance;
            require(balance > 0, "No donations available for withdrawal");
            payable(contractOwner).transfer(balance);
    }

    function getContractBalance() external view onlyOwner returns(uint256) {
            uint256 balance = address(this).balance;
            return balance;
    }
  
    function donate() external payable {
        require(msg.value > 0, "Donation amount must be greater than 0");

          _donationIndex++;
         uint256 _donationId = _donationIndex;
         Donation storage donation = donations[_donationId];

         donation.donationID = _donationId;
         donation.donor = msg.sender;
         donation.fund = msg.value;
       
        emit DonationReceived(msg.sender, msg.value);
    }

    function getAllDonation() public view returns (Donation[] memory) {
        uint256 itemCount = _donationIndex;
        uint256 currentIndex = 0;

        Donation[] memory items = new Donation[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
                uint256 currentId = i + 1;
                Donation storage currentItem = donations[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
        }
        return items;
    }

    function sendRequest(
        uint64 subscriptionId,
        string[] calldata args
    ) external onlyOwner returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(source); // Initialize the request with JS code
        if (args.length > 0) req.setArgs(args); // Set the arguments for the request

        // Send the request and store the request ID
        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );

        return s_lastRequestId;
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId); // Check if request IDs match
        }
        // Update the contract's state variables with the response and any errors
        s_lastResponse = response;
        s_lastError = err;

        // Emit an event to log the response
        emit Response(requestId, string(response), s_lastResponse, s_lastError);
    }
}

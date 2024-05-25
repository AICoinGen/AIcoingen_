//ERC20Generator = 0xDC3A2E74Dfc370E4129d143661D9fDa9D3080537
//LookUpContract = 0x5f0dBeF664d9d6D047FeB500E285492eAe8DE644
import ERC20Generator from "./ERC20Generator.json";
import LookUpContract from "./LookUpContract.json";

export const ERC20Generator_ABI = ERC20Generator.abi;
export const ERC20Generator_BYTECODE = ERC20Generator.bytecode;
export const ERC20Generator_ADDRESS =
  "0x222476f7c0c502fFCabEfcC72dfA5dC1E129e6fa";

export const LookUpContract_ABI = LookUpContract.abi;
export const LookUpContract_ADDRESS =
  "0x6686c65baCDCC61e698Ec301fC9B6098346C4E66";

// ssh-keygen -t rsa -C "moonlightwhisper7@gmail.com" -f "moonlightwhisper7"
// ssh-add -K ~/.ssh/moonlightwhisper7
// pbcopy < ~/.ssh/moonlightwhisper7.pub
// open config

// #gonormonor-personal account
// Host github.com-
//      HostName github.com
//      User git
//      IdentityFile ~/.ssh/github-rahul-personal

import { ethers } from 'ethers';
import MyNFTABI from '../contracts/MyNFT.json';

async function main() {
  let provider = new ethers.BrowserProvider(window.ethereum)
  const contractAddress = "0x0B306BF915C4d645ff596e518fAf3F9669b97016";
  let account = await provider.getSigner();

  const contract = new ethers.Contract(contractAddress, MyNFTABI, account);
  const result = await contract.totalSupply();
  await contract.safeMint('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'https://ipfs.io/ipfs/QmZ4tj')
  console.log(result.toString());
}
  

export default main;
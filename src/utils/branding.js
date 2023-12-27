import { ethers } from "ethers";
import ABI from "../contracts/Branding.json";

let provider = new ethers.BrowserProvider(window.ethereum)
const contractAddress = "..";
const contract = new ethers.Contract(contractAddress, ABI, await provider.getSigner());

export async function getDinosaurByAddress(Address) {
  const result = await contract.getDinosaurByAddress(Address);
  return result;
}

export async function getUrlById(tokenId) {
  // const result = await contract.getUrlById(tokenId);
  return "http://127.0.0.1:8080/ipfs/QmNjSemSWJPsfinaywjXMRCDYS9KLMcwe6Cd2hw5iHWg5U";
}
const { MerkleTree }  = require("merkletreejs") ;
const keccak256  = require("keccak256") ;
const fs = require('fs');
const whitelistAddresses = [
    "0x9c959f670Da90C66cf05F26d855ab3e7b0178E62",
    "0x9c959f670Da90C66cf05F26d855ab3e7b0178E12",
    "0x9c959f670Da90C66cf05F26d855ab3e7b0178Ea2"

]
const leafNodes = whitelistAddresses.map(address => keccak256(address));
const merkletree = new MerkleTree(leafNodes, keccak256, {
    sortPairs: true
})
const root = merkletree.getHexRoot();


const proofs = {};

whitelistAddresses.forEach(address => {
    const proof = merkletree.getHexProof(keccak256(address));
    proofs[address] = { proof };
});

const proofsFileContent = `
const proofs = ${JSON.stringify(proofs, null, 2)};
export default proofs;
`

console.log(root)

fs.writeFileSync('src/proofs.js', proofsFileContent);

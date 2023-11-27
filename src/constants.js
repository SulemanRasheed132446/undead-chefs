export const SYNOPSIS_TEXT =
  `In a mysterious afterlife portal, Undead Chefs emerge with spectral knives and an insatiable hunger for rare ingredients. Together, they form the Culinary Crypt, a guild creating otherworldly dishes with magical properties. Facing a threat from Flavor Phantoms, they embark on a perilous journey to concoct a protective dish. Collectors gain NFTs representing unique skills and tools, unlocking exclusive virtual experiences. In death, the Undead Chefs prove that the culinary arts can bring harmony to a world on the brink of chaos. Welcome to "Spectral Feast: Undead Culinary Quest`;
export const PROJECT_DNE_TEXT =
  "PROJECT DNE • PROJECT DNE • PROJECT DNE • PROJECT DNE • PROJECT DNE •  ";
export const WHITELIST_WINNING_NORMAL_TEXT = `Dive deep into the mystical kitchen of the Undead Chefs by exploring our Discussion Boards on @UndeadCulinary. Engage in lively conversations, exchange tweets with the spectral Main Characters, and unveil hidden story clues`;
export const WHITELIST_WINNING_COLORED_TEXT =
  "to win Whitelist spots, prizes and uncover additional story clues!";
export const MINTING_COLORED_TEXT = "A captivating adventure awaits – ";
export const MINTING_NORMAL_TEXT =
  "Embark on an enchanting culinary odyssey with the Undead Chefs, where a mesmerizing blend of spectral ingredients and ghostly skills awaits. Join the Culinary Crypt crew for an immersive storytelling experience that transcends the boundaries of the living and the afterlife, ensuring an unforgettable journey into the realm of undead gastronomy";
export const MAIN_CHARACTERS = [{
    imageUrl: "/images/characters/image6.png",
    title: "Fresh Chef Aka Matt",
    role:"Founder",
    description: "A professionally trained chef and has been in Web3 for 18 months.",
    userName: "@JB_391",
  },
  {
    imageUrl: "/images/characters/image1.jpg",
    title: "CosoArt",
    role:"Artist",
    description: "legend behind this beautiful Undead Chef art and is the founder and artist of the LoomiHeads project.",
    userName: "@Krakis_",
  },
  {
    imageUrl: "/images/characters/image2.jpg",
    title: "Chris Partlow",
    role:"Advisor",
    description: "Founder of the Paperboys project and a proud Genuine Undead holder",
    userName: "@PresDeeter",
  },
  {
    imageUrl: "/images/characters/image3.jpg",
    title: "Cleavy",
    role:"Mod",
    description: "Mod in Punks2023, Undead Chefs as well as PepeArmyYC",
    userName: "@ProfEckelman",
  },
  {
    imageUrl: "/images/characters/image4.jpg",
    title: "RayNay",
    role:"Mod",
    description: "Mod in the Punks2023 Discord and is the Collab Manager for DSKDAO",
    userName: "@DrBychov",
  },
  {
    imageUrl: "/images/characters/image5.jpg",
    title: "Zuko",
    role:"Mod",
    description: "Member of the Paper boys project",
    userName: "@DrBychov",
  },
];
export const CHARACTERS = [{
    img: "/images/characters/ch1.jpg"
  },
  {
    img: "/images/characters/ch2.gif"
  },
  {
    img: "/images/characters/ch3.jpg"
  },
  {
    img: "/images/characters/ch4.jpg"
  },

];

export const contracts = {
  "goerli": {
    address: "0x209849b4fA42c8dCa2D855fe124D2c4598E932ea",
    abi: [{
      "inputs": [{
        "internalType": "string",
        "name": "name_",
        "type": "string"
      }, {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      }, {
        "internalType": "string",
        "name": "baseURI_",
        "type": "string"
      }],
      "stateMutability": "nonpayable",
      "type": "constructor"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }],
      "name": "IERC173_NOT_OWNER",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }],
      "name": "IERC721Enumerable_INDEX_OUT_OF_BOUNDS",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "tokenOwner",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }],
      "name": "IERC721Enumerable_OWNER_INDEX_OUT_OF_BOUNDS",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "tokenOwner",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }],
      "name": "IERC721_CALLER_NOT_APPROVED",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }],
      "name": "IERC721_INVALID_APPROVAL",
      "type": "error"
    }, {
      "inputs": [],
      "name": "IERC721_INVALID_TRANSFER",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "tokenOwner",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "from",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }],
      "name": "IERC721_INVALID_TRANSFER_FROM",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }],
      "name": "IERC721_NONEXISTANT_TOKEN",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }],
      "name": "IERC721_NON_ERC721_RECEIVER",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }],
      "name": "OperatorNotAllowed",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
      }],
      "name": "Whitelist_CONSUMED",
      "type": "error"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
      }],
      "name": "Whitelist_FORBIDDEN",
      "type": "error"
    }, {
      "inputs": [],
      "name": "Whitelist_NOT_SET",
      "type": "error"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "approved_",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId_",
        "type": "uint256"
      }],
      "name": "Approval",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner_",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "operator_",
        "type": "address"
      }, {
        "indexed": false,
        "internalType": "bool",
        "name": "approved_",
        "type": "bool"
      }],
      "name": "ApprovalForAll",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }],
      "name": "OwnershipTransferred",
      "type": "event"
    }, {
      "anonymous": false,
      "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from_",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "address",
        "name": "to_",
        "type": "address"
      }, {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId_",
        "type": "uint256"
      }],
      "name": "Transfer",
      "type": "event"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "qty_",
        "type": "uint256"
      }, {
        "internalType": "address",
        "name": "to_",
        "type": "address"
      }],
      "name": "airdrop",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "to_",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId_",
        "type": "uint256"
      }],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "tokenOwner_",
        "type": "address"
      }],
      "name": "balanceOf",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "name": "getApproved",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "tokenOwner_",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "operator_",
        "type": "address"
      }],
      "name": "isApprovedForAll",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "maxPerPublic",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "maxPerWhitelist",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "maxSupply",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes32[]",
        "name": "proof_",
        "type": "bytes32[]"
      }],
      "name": "mintNextWhitelist",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "qty_",
        "type": "uint256"
      }],
      "name": "mintPublic",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes32[]",
        "name": "proof_",
        "type": "bytes32[]"
      }],
      "name": "mintWhitelist",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "name": "mintedPerWallet",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "name",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "owner",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "tokenId_",
        "type": "uint256"
      }],
      "name": "ownerOf",
      "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "publicPrice",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }, {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [],
      "name": "saleState",
      "outputs": [{
        "internalType": "enum UndeadChef.Sale",
        "name": "",
        "type": "uint8"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "operator_",
        "type": "address"
      }, {
        "internalType": "bool",
        "name": "approved_",
        "type": "bool"
      }],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "string",
        "name": "baseURI_",
        "type": "string"
      }],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "supply_",
        "type": "uint256"
      }],
      "name": "setMaxSupply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "mints_",
        "type": "uint256"
      }],
      "name": "setMintsPerPublic",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "mints_",
        "type": "uint256"
      }],
      "name": "setMintsPerWhitelist",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "price_",
        "type": "uint256"
      }],
      "name": "setPublicPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "enum UndeadChef.Sale",
        "name": "sale_",
        "type": "uint8"
      }],
      "name": "setSaleState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "price_",
        "type": "uint256"
      }],
      "name": "setWhitelistPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes32",
        "name": "root_",
        "type": "bytes32"
      }],
      "name": "setWhitelistRoot",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [],
      "name": "supplyMinted",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "bytes4",
        "name": "interfaceId_",
        "type": "bytes4"
      }],
      "name": "supportsInterface",
      "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "symbol",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "index_",
        "type": "uint256"
      }],
      "name": "tokenByIndex",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "tokenOwner_",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "index_",
        "type": "uint256"
      }],
      "name": "tokenOfOwnerByIndex",
      "outputs": [{
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "uint256",
        "name": "tokenId_",
        "type": "uint256"
      }],
      "name": "tokenURI",
      "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
      }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "newOwner_",
        "type": "address"
      }],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }, {
      "inputs": [],
      "name": "whitelistPrice",
      "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }],
      "stateMutability": "view",
      "type": "function"
    }, {
      "inputs": [{
        "internalType": "address",
        "name": "to_",
        "type": "address"
      }, {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      }],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }]
  },
  mainnet: {

  }
}
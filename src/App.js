import logo from './logo.svg';
import './App.css';
import {
  SYNOPSIS_TEXT,
  PROJECT_DNE_TEXT,
  MAIN_CHARACTERS,
  WHITELIST_WINNING_NORMAL_TEXT,
  WHITELIST_WINNING_COLORED_TEXT,
  MINTING_COLORED_TEXT,
  MINTING_NORMAL_TEXT,
  CHARACTERS,
  contracts
} from "./constants";
import proofs from "./proofs";
import MainCharactersCard from "./components/MainCharactersCard";
import { motion } from "framer-motion";
import CharactersCard from "./components/CharactersCard";
import { useState } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { Link } from "react-scroll";
import { useAccount , useNetwork, useContractRead ,useContractWrite, usePrepareContractWrite, useWaitForTransaction} from 'wagmi';
import {useEffect, useMemo} from "react";
import {toBigInt} from "ethers"
function App() {
  const [mintAmount, setMintAmount] = useState(2);
  const handleMintAmount = (operation) => {
    if(operation === "+") {
      setMintAmount(mintAmount => {
        if(mintAmount < 3) return mintAmount + 1;
        else return mintAmount
      })
    }else if(operation === "-") {
      setMintAmount(mintAmount => {
        if(mintAmount > 1) return mintAmount - 1;
        else return mintAmount
      })
    }
  };
  const [status, setStatus] = useState("")
  const {openConnectModal} = useConnectModal()
  const {address} = useAccount()
  const { chain } = useNetwork();
  let [proof, setProof] = useState("");
  const contract =
    contracts[
      chain?.name === "mainnet" ? "mainnet" : "goerli"
    ];

    const sharedConfig = {
      address: contract.address,
      abi: contract.abi,
      account: address,
      watch: true,
  };
  const { data: saleState } = useContractRead({
    ...sharedConfig,
    functionName: "saleState",
  });
  const { data: whitelistPrice , error} = useContractRead({
    ...sharedConfig,
    functionName: "whitelistPrice",
  });
  const { data: publicPrice } = useContractRead({
    ...sharedConfig,
    functionName: "publicPrice",
  });

  

  const { config: mintWhitelistConfig } = usePrepareContractWrite({
    ...sharedConfig,
    functionName: "mintWhitelist",
    args: [proof],
    account: address,
    value: whitelistPrice,
    onSuccess(data) {
      setStatus("")
    },
    onError(error) {
      if(saleState !== 1) {
        return
      }
      if(error.message.includes("Whitelist_CONSUMED")) {
        setStatus("You have consumed the whitelist of phase 1")
      } 
    },
  });
  const { config: mintNextWhitelistConfig } = usePrepareContractWrite({
    ...sharedConfig,
    functionName: "mintNextWhitelist",
    args: [proof],
    account: address,
    value: whitelistPrice,
    onSuccess(data) {
      setStatus("")
    },
    onError(error) {
      if(saleState !== 2) {
        return
      }
      if(error.message.includes("Whitelist_CONSUMED")) {
        setStatus("You have consumed the whitelist of phase 2")
      } 
    },
  });

  const { config: mintPublicConfig } = usePrepareContractWrite({
    ...sharedConfig,
    functionName: "mintPublic",
    args: [mintAmount],
    account: address,
    value: publicPrice ? publicPrice * toBigInt(mintAmount): 0,
    onSuccess(data) {
    },
    onError(error) {
      if(saleState !== 3) {
        return
      }
      if(error.message.includes("Exceeds mint per wallet")) {
        setStatus("You have minted max per wallet")
      } 
    },
  });


  const { data: mintWhitelistData, write: mintWhitelistWrite } = useContractWrite(mintWhitelistConfig);
  const { data: mintNextWhitelistData, write: mintNextWhitelistWrite } = useContractWrite(mintNextWhitelistConfig);
  const { data: mintPublictData, write: mintPublicWrite } = useContractWrite(mintPublicConfig);
  const { isLoading: mintWhitelistLoading } = useWaitForTransaction({
    hash: mintWhitelistData?.hash,
  });
  const { isLoading: mintNextWhitelistLoading } = useWaitForTransaction({
    hash: mintNextWhitelistData?.hash,
  });
  const { isLoading: mintPublicLoading } = useWaitForTransaction({
    hash: mintPublictData?.hash,
  });

  useEffect(() => {
    if(address && saleState) {
      const proofData = proofs[address]
      if(proofData) {
        setProof(proofData.proof);
        setStatus("")
      }else {
       if(saleState !== 3) {
        setStatus("You are not whitelisted")
       } 
      }
    }
  }, [address, saleState])


  const handleMint = () => {
    if(saleState === 1) {
      mintWhitelistWrite && mintWhitelistWrite()
    }else if( saleState === 2) {
      mintNextWhitelistWrite && mintNextWhitelistWrite()
    } else if (saleState === 3) {
      mintPublicWrite && mintPublicWrite()
    }
    return;
  }

  const Phase = useMemo(() => {
    if(saleState === 0) {
      return "MINT HAS NOT STARTED"
    }
    else if(saleState === 1) { return "WHITELIST PHASE 1"}
    else if(saleState === 2) { return "WHITELIST PHASE 2"}
    else if(saleState === 3) { return "PUBLIC MINT PHASE "}
    return null
  }, [saleState])

  const mintDetails = useMemo(() => {
    if(saleState === 1) { return "Mint 3 for 0.005"}
    else if(saleState === 2) { return "Mint 3 for 0.005"}
    else if(saleState === 3) { return "Mint 1 for .0025 "}
    return null
  }, [saleState])



  return (
      <main className="bg-black font-[pixellari] ">
      <motion.div
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
        className="pb-12 py-4"
      >
        <div className="flex flex-row-reverse items-center gap-4 mr-4 md:mr-28">
          <a
          href='https://discord.com/invite/duthbE7NZ3'
          target="_blank"
          rel="noreferrer">
            <img src="/icons/discord-icon.svg" />
          </a>
          <a
            href="https://twitter.com/UndeadChefNFT"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/twitter-icon.svg" />
          </a>
         {address? <p className='text-[red]  mt-1'>{address.slice(0, 5)}...</p> : <img src="/icons/crypto-wallet.svg" onClick={openConnectModal} className="cursor-pointer"/>}
        </div>
        <h1 className="text-center stroke-red-500 text-4xl md:text-8xl w-2/3 mt-16 mx-auto font-[pixellari] highlight">UNDEAD CHEFS</h1>
        <h1 className="text-center stroke-lime-500 text-4xl md:text-7xl w-2/3 mt-16 mx-auto font-[pixellari] highlight">
          A NEW ERA OF STORYTELLING BEGINS
        </h1>
        <div className="flex flex-col justify-center items-center">
          <button className="btn hidden border-2 font-[pixellari] border-white p-2 mt-4 md:mt-16 lg:mt-32 bg-black text-white">
            CONNECT WALLET
          </button>
          <Link
            to="roadmap mt-4 md:mt-16 lg:mt-32"
            className="cursor-pointer"
            spy={true}
            smooth={true}
          >
            <p className="font-[pixellari] mt-8 md:mt-16 text-2xl rotate-90 text-lime-500 highlight">
              {">"}
            </p>
            <p className="font-[pixellari]  rotate-90 text-lime-500 highlight text-2xl">
              {">"}
            </p>
          </Link>
          <div className="flex flex-wrap md:flex-nowrap w-9/12 lg:w-7/12  xl:w-1/2  ">
            <div className="pt-4 md:pt-14   md:w-auto text-white md:m-auto md:m-0 ">
              <h1 className="font-[pixellari]  text-4xl mt-2 highlight text-center md:text-center">
                INTRO
              </h1>
              <p className="text-sm md:text-lg mt-4 leading-6 text-justify md:text-center font-[pixellari]">
                {SYNOPSIS_TEXT}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-cover bg-background2 flex justify-center  pt-20 flex-col pb-4 lg:pt-8 ">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="text-center text-4xl font-[pixellari] text-white mt-24"
        >
          MINT
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="w-4/5 border-[red] border-2 px-6 py-4 mx-auto mt-36 info-box"
        >
          <span className="text-white">{WHITELIST_WINNING_NORMAL_TEXT}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="w-3/5 mx-auto mt-8  "
        >
          <span className="text-red-500">{MINTING_COLORED_TEXT}</span>
          <span className="text-white">{MINTING_NORMAL_TEXT}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="w-3/5 mx-auto mt-8  "
        >
          <p className="text-red-500 text=3xl text-center text-3xl">Details</p>
          <p className="text-2xl text-white text-center"><span className="text-red-500">PRESALE:</span> Nov 28 -11 PM EST to 2 AM EST- 3 PER WALLET</p>
          <p className="text-2xl text-white text-center"><span className="text-red-500">PRESALE 2:</span> Nov 29 - 2 AM EST to 5 AM - 3 PER WALLET</p>
          <p className="text-2xl text-white text-center"><span className="text-red-500">PUBLIC MINT:</span> 5AM -TILL SELL OUT - 3 PER WALLET</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="flex justify-center w-6/12 xl:w-5/12 mt-24 mx-auto gap-8 flex-wrap"
        >
          {CHARACTERS.map(({ img }) => (
            <CharactersCard imageUrl={img} key={img} />
          ))}
        </motion.div>
        {Phase && <p className='text-white m-auto text-3xl mt-4'>{Phase}</p>}
        {mintDetails && <p className=' m-auto text-2xl mt-1 text-[red]'>{mintDetails}</p>}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-4  font-[pixellari] text-3xl w-1/6 justify-center mt-2 mx-auto text-white"
        >
         {!address && <button onClick={() => openConnectModal()}  className="border-[red]  border-solid border-2 bg-[red] px-4 py-2 mt-4 hover:opacity-80">Connect wallet</button>}
         {saleState === 3  &&   <><button
            className="text-white"
            onClick={() => handleMintAmount("-")}
          >
            {"<"}
          </button>
          <p className="text-lime-400 ">{mintAmount}</p>
          <button
            className="text-white"
            onClick={() => handleMintAmount("+")}
          >
            {">"}
          </button>
          </>}
        
        </motion.div>
        {saleState && <button
            className="text-white border-[red] border-2 px-4 py-1 w-fit m-auto text-2xl mt-4 bg-[red] hover:opacity-80 cursor-pointer"
            onClick={() => handleMint()}
            disabled={status}
          >
            {"MINT "} {saleState !== 3 ? <span>3</span>: ""}
          </button>
          
        }
        {  (mintPublicLoading || mintWhitelistLoading || mintNextWhitelistLoading) && <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
          }
          {status && <p className='text-[red] text-center mt-4'>{status}</p>}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className=" text-white mt-24 text-center font-[pixellari] text-4xl"
        >
          MEET THE TEAM
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.2,
          }}
          className="flex flex-wrap flex-col justify-center items-center md:flex-row w-9/12 md:w-full align-center mx-auto gap-x-6 mt-6 max-w-4xl 2xl:max-w-6xl"
        >
          {MAIN_CHARACTERS.map((character) => (
            <MainCharactersCard character={character} key={character.title} />
          ))}
        </motion.div>
        
        <p className="text-[red] text-center mt-12 text-3xl uppercase font-[pixellari]">Undead Chefs</p>
        <p className="text-white text-center">Copyright © Undead Chefs 2023</p>
      </div>
      </main>

  )
}

export default App;

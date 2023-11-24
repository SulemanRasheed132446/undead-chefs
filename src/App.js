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
} from "./constants";
import MainCharactersCard from "./components/MainCharactersCard";
import { motion } from "framer-motion";
import CharactersCard from "./components/CharactersCard";
import { useState } from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { Link } from "react-scroll";
import { useAccount } from 'wagmi';

function App() {
  const [mintAmount, setMintAmount] = useState(1);
  const handleMintAmount = (operation) => {

  };
  const {openConnectModal} = useConnectModal()
  const {address} = useAccount()

  console.log(openConnectModal)
  return (
      <main className="bg-black font-[pixellari] ">
      <motion.div
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
        className="pb-12"
      >
        <div className="flex flex-row-reverse items-center gap-4 mr-4 md:mr-28">
          <img src="/icons/discord-icon.svg" />
          <a
            href="https://twitter.com/ProjectDNE"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/twitter-icon.svg" />
          </a>
          <img src="/icons/crypto-wallet.svg" />
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
            <div className="pt-4 md:pt-14 md:w-9/12  md:w-auto text-white md:m-auto md:m-0 ">
              <h1 className="font-[pixellari]  text-4xl mt-2 highlight text-center md:text-center">
                INTRO
              </h1>
              <p className="font-[pixellari] text-sm md:text-lg mt-4 leading-6 text-justify md:text-center font-[pixellari]">
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
          <p className="text-2xl text-white text-center"><span className="text-red-500">PRESALE:</span> 10:00 AM EST- 3 PER WALLET</p>
          <p className="text-2xl text-white text-center"><span className="text-red-500">PRESALE 2:</span> - 11:00 AM EST- 3 PER WALLET</p>
          <p className="text-2xl text-white text-center"><span className="text-red-500">PUBLIC MINT:</span>  3:00 PM EST- 3 PER WALLET</p>
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex gap-4  font-[pixellari] text-3xl w-1/6 justify-center mt-8 mx-auto text-white"
        >
         {!address && <button onClick={() => openConnectModal()}>Connect wallet</button>}
          <button
            className="text-white"
            onClick={() => handleMintAmount()}
          >
            {"<"}
          </button>
          <p className="text-lime-400 ">{mintAmount}</p>
          <button
            className="text-white"
            onClick={() => handleMintAmount()}
          >
            {">"}
          </button>
        </motion.div>

        <button className="btn w-min mx-auto font-[pixellari] px-8 py-2 border-2 border-white mt-6 bg-black text-white hidden">
          MINT
        </button>
        <p className="text-[red] text-center mt-12 text-3xl uppercase font-[pixellari]">Undead Chefs</p>
        <p className="text-white text-center">Copyright © Undead Chefs 2023</p>
      </div>
      </main>

  )
}

export default App;

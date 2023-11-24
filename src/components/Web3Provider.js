"use client"
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";



const appName = "Undead Chef";
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? "0ec7b16fb9939d89dedfedac7718e203";
const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY ?? "zFtQZoE1DUn-8er5Os1mHh6GWpMfASiu";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, ...(process.env.NODE_ENV === "development" ? [goerli] : [goerli])],
  [alchemyProvider({ apiKey: alchemyApiKey }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: appName,
  projectId: projectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
  webSocketPublicClient,
});



export default function Provider({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          {children}
        </RainbowKitProvider>
    </WagmiConfig>
  )
}

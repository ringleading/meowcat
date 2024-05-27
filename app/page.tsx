"use client";
import Image from "next/image";
import sleeping_meowcat from "@/public/assets/gifs/sleeping_meowcat.gif";
import meow_head from "@/public/assets/images/meow_head.webp";

import styles from "./styles.module.css";

import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Home() {
  const copyToClipboard = (email: string) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <div>
      <span className={styles.repeating}>meow</span>
      <span className={styles.repeating_right}>meow</span>
      <main className="grid h-screen place-items-center text-white">
        <div className="flex flex-col justify-center text-center gap-2">
          <Image
            src={sleeping_meowcat}
            alt="meowcat"
            priority
            height={500}
            width={500}
            decoding="async"
            className="relative"
          ></Image>
          <div id="trade" className="flex items-center gap-5 justify-center">
            <a
              className="text-xl font-bold drop-shadow-md"
              href="https://traderjoexyz.com/avalanche/trade?outputCurrency=0x8aD25B0083C9879942A64f00F20a70D3278f6187"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trade
            </a>
            <a
              className="text-xl font-bold drop-shadow-md"
              href="https://dexscreener.com/avalanche/0xbbf8e4b9ad041ede1f5270caf5b7b41f0e55f719"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dexscreener
            </a>
            <a
              className="text-xl font-bold drop-shadow-md"
              href="https://www.dextools.io/app/en/avalanche/pair-explorer/0xbbf8e4b9ad041ede1f5270caf5b7b41f0e55f719"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dextools
            </a>
          </div>
          <div id="scanners" className="flex items-center gap-5 justify-center">
            <a
              className="text-xl font-bold drop-shadow-md"
              href="https://www.coingecko.com/en/coins/meowcat-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoinGecko
            </a>
            <a
              className="text-xl font-bold drop-shadow-md"
              href="https://coinmarketcap.com/currencies/meowcat-xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CoinMarketCap
            </a>
          </div>
          <div className="flex items-center justify-center gap-5">
            <p className="uppercase font-bold drop-shadow-md text-green-600 text-xl">
              We are now live on{" "}
              <a
                href="https://www.okx.com/web3/dex-swap#inputChain=43114&inputCurrency=0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e&outputChain=43114&outputCurrency=0x8ad25b0083c9879942a64f00f20a70d3278f6187"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:cursor-pointer"
              >
                <span className="underline">OKX</span>{" "}
                <ExternalLinkIcon className="mb-1"></ExternalLinkIcon>
              </a>
              <iframe
                referrerPolicy="no-referrer"
                src="https://www.okx.com/web3/dex-swap#inputChain=43114&inputCurrency=0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e&outputChain=43114&outputCurrency=0x8ad25b0083c9879942a64f00f20a70d3278f6187"
              />
              <a
                href="https://www.okx.com/web3/dex-swap#inputChain=43114&inputCurrency=0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e&outputChain=43114&outputCurrency=0x8ad25b0083c9879942a64f00f20a70d3278f6187"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:cursor-pointer"
              ></a>
            </p>
          </div>

          <div
            id="assets"
            className="flex flex-col items-center justify-center lg:mt-2"
          >
            <a href="/assets">
              <Image
                src={meow_head}
                alt="meowhead"
                priority
                height={100}
                width={100}
                decoding="async"
                className="relative"
              ></Image>
            </a>
            <a className="text-xl font-bold drop-shadow-md" href="/assets">
              Brand Assets
            </a>
          </div>

          <div id="socials" className="flex items-center gap-5 justify-center">
            <a
              className="text-xl drop-shadow-md"
              href="https://twitter.com/avaxmeowcat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="text-xl drop-shadow-md"
              href="https://t.me/meowcatavax"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              className="text-xl drop-shadow-md"
              href="https://discord.gg/aBGuMRZq7j"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
          <div className="text-xs lg:text-base">
            <p>
              Enquiries:{" "}
              <span onClick={() => copyToClipboard("meowcat@meowcat.xyz")}>
                meowcat@meowcat.xyz
              </span>
            </p>
            <p>
              Business:{" "}
              <span
                onClick={() => copyToClipboard("meowcat.avalanche@gmail.com")}
              >
                meowcat.avalanche@gmail.com
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

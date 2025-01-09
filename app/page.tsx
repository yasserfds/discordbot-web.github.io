"use client";
import { DISCORD_URL } from "@/env";

export default function Home() {
  const discordInviteURL = DISCORD_URL;

  const handleInviteDiscord = () => {
    if (discordInviteURL) {
      window.open(discordInviteURL, "_blank");
    } else {
      console.error("Discord invite URL is not provided.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <div className="text-center mb-10">
        <h1 className="text-[#fff] text-[2.5rem]">Invite Rawly.</h1>
        <p className="text-[1.1rem] text-[#fff] mt-[20px]">
          Click the button below to invite the bot to your server!
        </p>
        <button
          className="px-5 py-3 mt-[20px] bg-[#7289da] text-white border-none rounded-[4px] cursor-pointer text-[1.2rem] transition-colors duration-300 ease hover:bg-[#677bc4]"
          onClick={handleInviteDiscord}
        >
          Invite the bot
        </button>
      </div>

      {/* Social Media Links */}
      <div className="flex mt-[10px]">
        <a
          onClick={() => window.open("https://discord.gg/p4rJ9TrJUa")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="discord"
            draggable="false"
            src="/assets/discord.png"
            alt="Discord"
            className="absolute h-[7vh] left-[0.5vw] bottom-[0.5vw] cursor-pointer"
          />
        </a>
        <a
          onClick={() => window.open("https://twitter.com/yasserfds")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="twitter"
            draggable="false"
            src="/assets/twitter.png"
            alt="Twitter"
            className="absolute h-[7vh] left-[8vh] bottom-[0.5vw] cursor-pointer"
          />
        </a>
        <p className="text-white absolute h-[7vh] left-[45vw] bottom-[0.5vw] cursor-default">
          Made by: Yasser Fedsi
        </p>
      </div>
    </div>
  );
}

import { links } from "../utils/utils";

export default function Home() {
  const discordInviteURL = import.meta.env.VITE_INVITE_DISCORD_URL;

  const handleInviteDiscord = () => {
    if (discordInviteURL) {
      window.open(discordInviteURL, "_blank");
    } else {
      console.error("Discord invite URL is not provided.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="text-center mb-10">
        <h1 className="text-[#fff] text-3xl md:text-3xl">Invite Rawly.</h1>
        <p className="text-lg md:text-xl text-[#fff] mt-[20px]">
          Click the button below to invite the bot to your server!
        </p>
        <button
          className="px-5 py-3 mt-5 bg-[#7289da] text-white border-none rounded-md cursor-pointer text-lg md:text-xl transition-colors duration-300 ease hover:bg-[#677bc4]"
          onClick={handleInviteDiscord}
        >
          Invite the bot
        </button>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center mt-5">
        {/* Logos */}
        <div className="flex space-x-6 md:space-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              onClick={() => window.open(link.url)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id={link.name.toLowerCase()}
                draggable="false"
                src={link.image}
                alt={link.name}
                className="h-10 md:h-12 cursor-pointer"
              />
            </a>
          ))}
        </div>
        {/* Author */}
        <p className="text-white text-center text-sm md:text-base mt-10">
          Made by: <span className="text-red-400">Yasser Fedsi</span>
        </p>
      </div>
    </div>
  );
}

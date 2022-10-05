/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_severbg: "#36393f",
        discord_serverContainer: "#202225",
        discord_channelBg: "#2f3136",
        discord_servernameBg: "#34373c",
        discord_channelText: "#8e9297",
        discord_channelHoverBg: "#3a3c43",
        discord_userId: "#b9bbbe",
        discord_userBg: "#292b2f",
        discord_iconHover: "#dcddde",
        discord_chatHeader: "#72767d",
        discord_chatInput: "#40444b",
        discord_message: "#32353b",
        discord_delete: "#ed4245",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

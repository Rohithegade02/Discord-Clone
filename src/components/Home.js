import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import ServerIcon from "./ServerIcon";
import { auth, db } from "../firebase";
import {
  ChevronDownIcon,
  CogIcon,
  MicrophoneIcon,
  PhoneIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import Channel from "./Channel";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";

function Home() {
  const [user] = useAuthState(auth);

  const [channels] = useCollection(db.collection("channels"));

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };

  return (
    <>
      {!user && <Navigate to="/" />}
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-discord_serverContainer p-3 min-w-max">
          <div className="server-default hover:bg-discord_purple">
            <img
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384f934b806f37f4956_145dc557845548a36a82337912ca3ac5.svg"
              alt=""
              className="h-5"
            />
          </div>
          <hr className="border-gray-700 w-8 border mx-auto" />
          <ServerIcon image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/160477/images/F69olKlTDWfJQcAnS4jw_file.jpg" />
          <ServerIcon image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/160477/images/F69olKlTDWfJQcAnS4jw_file.jpg" />
          <ServerIcon image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/160477/images/F69olKlTDWfJQcAnS4jw_file.jpg" />
          <ServerIcon image="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/160477/images/F69olKlTDWfJQcAnS4jw_file.jpg" />

          <div className="server-default  hover:bg-discord_green group">
            <PlusIcon className="h-7  group-hover: text-white" />
          </div>
        </div>
        <div className="bg-discord_channelBg flex flex-col min-w-max">
          <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-discord_servernameBg  cursor-pointer">
            Offical PAPA Server...
            <ChevronDownIcon className="h-5 ml-2" />
          </h2>
          <div className="text-discord_channelText flex-grow overflow-y-scroll scrollbar-hide">
            <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-3  mr-2" />
              <h4 className="font-semibold ">Channels</h4>
              <PlusIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                onClick={handleAddChannel}
              />
            </div>
            <div className="flex flex-col space-y-2 px-2 mb-4">
              {channels?.docs.map((doc) => (
                <Channel
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                />
              ))}
            </div>
          </div>
          <div className="bg-discord_userBg p-2 flex items-center justify-content space-x-8">
            <div className="flex items-center space-x-1">
              <img
                src={user?.photoURL}
                alt=""
                className="rounded-full h-10"
                onClick={() => auth.signOut()}
              />
              <h4 className="text-white text-xs font-medium ">
                {user?.displayName}
                <span className="text-discord_userId block ">
                  #{user?.uid.substring(0, 4)}
                </span>
              </h4>
            </div>
            <div className="text-gray-400 flex items-center">
              <div className="hover:bg-discord_channelHoverBg p-2 rounded-md">
                <MicrophoneIcon className="h-5 icon" />
              </div>
              <div className="hover:bg-discord_channelHoverBg p-2 rounded-md">
                <PhoneIcon className="h-5 icon" />
              </div>
              <div className="hover:bg-discord_channelHoverBg p-2 rounded-md">
                <CogIcon className="h-5 icon" />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-discord_severbg flex-grow">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default Home;

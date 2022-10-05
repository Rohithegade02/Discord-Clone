import { TrashIcon } from "@heroicons/react/solid";
import moment from "moment";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/ChannelSlice";
import { auth, db } from "../firebase";

function Message({ id, message, timestamp, name, email, photoURL }) {
  const [user] = useAuthState(auth);
  const channelId = useSelector(selectChannelId);
  return (
    <div className="flex items-center p-1 pl-5 my-5 hover:bg-discord_message group">
      <img
        src={photoURL}
        alt=""
        className="h-10 rounded-full mr-3 cursor-pointer hover:shadow-2xl"
      />
      <div className="flex flex-col ">
        <h4 className="flex items-center space-x-2 font-medium">
          <span className="hover:underline  text-white text-sm cursor-pointer">
            {name}
          </span>
          <span className="text-discord_chatHeader text-xs">
            {moment(timestamp?.toDate().getTime()).format("lll")}
          </span>
        </h4>
        <p className="text-sm text-discord_iconHover">{message}</p>
      </div>
      {user?.email === email && (
        <div
          className="hover:bg-discord_delete p-1 ml-auto rounded-sm text-discord_delete hover:text-white cursor-pointer"
          onClick={() =>
            db
              .collection("channels")
              .doc(channelId)
              .collection("messages")
              .doc(id)
              .delete()
          }
        >
          <TrashIcon className="h-5 hidden  group-hover:inline " />
        </div>
      )}
    </div>
  );
}

export default Message;

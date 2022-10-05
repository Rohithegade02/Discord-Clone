import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const [user] = useAuthState(auth);
  const history = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(() => history("/channels"))
      .catch((error) => alert(error.message));
  };
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-discord_blue">
      <a href="/">
        <img
          src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62594fdd2eb6504fca0545cb_364fc8a0ee7fcebf47ca6ebd16ec12f1%20(1).svg"
          alt=""
          className="w-32 h-12 object-contain "
        />
      </a>
      <div className="hidden  lg:flex space-x-6 ">
        <a className="link">Download</a>
        <a className="link">Why Discord?</a>
        <a className="link">Nitro</a>
        <a className="link">Safety</a>
        <a className="link">Support</a>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={!user ? signIn : () => history("/channels")}
          className="bg-white font-medium p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap "
        >
          {!user ? "Login" : "Open Discord"}
        </button>
        <MenuIcon className="h-9 text-white cursor-pointer lg:hidden" />
      </div>
    </header>
  );
}

export default Header;

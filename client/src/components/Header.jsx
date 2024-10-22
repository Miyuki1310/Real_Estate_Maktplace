import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-center bg-slate-200">
      <div className="container flex justify-between items-center p-3">
        <h1 className="font-bold text-sm sm-text-xl flex flex-wrap text-xl">
          <span className="text-slate-500">Miyuki</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        <form className="bg-slate-100 p-2 rounded-lg flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
            type="text"
            placeholder="Search..."
          ></input>
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4 ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

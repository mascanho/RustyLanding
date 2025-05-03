import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <div className="text-sm text-white/40 flex items-center space-x-2">
          <div className="w-3 animate-pulse h-3 rounded-full  bg-purple-600"></div>
          <span>RustySEO users</span>
          <span className="text-purple-600">58</span>
          <span></span>
        </div>

        <a
          className="text-sm text-white/40"
          href="https://www.github.com/mascanho"
        >
          Built by Mascanho
        </a>

        {/* <ul className="flex gap-5 flex-wrap">

        <div>
          <span>App Downloads:</span>
          <span>{Math.floor(Math.random() * 100)}</span>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6 "
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul> */}
      </div>
    </Section>
  );
};

export default Footer;

import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import Logo from "../assets/logo.png";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link
          className="block w-[8rem] md:w-[12rem] xl:mr-8 flex items-center space-x-3"
          to="/"
        >
          <img src={Logo} width={32} height={32} alt="Brainwave" />
          <span>RustySEO</span>
        </Link>

        <nav
          className={`${openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item, index) => {
              let url = item.url;
              if (url.startsWith("#") && pathname.pathname !== "/") {
                url = "/" + url;
              }

              const isActive =
                item.url === pathname.hash || item.url === pathname.pathname;
              const isInternal = url.startsWith("/");

              const className = `block relative cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile || index === navigation.length - 1
                ? "lg:hidden"
                : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${isActive
                  ? "z-2 lg:text-n-1"
                  : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`;

              return isInternal ? (
                <Link
                  key={item.id}
                  to={url}
                  onClick={handleClick}
                  className={className}
                >
                  {item.title}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={url}
                  onClick={handleClick}
                  className={className}
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button className="hidden lg:flex" href="#download">
            Download
          </Button>
        </div>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
